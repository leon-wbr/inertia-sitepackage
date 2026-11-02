<?php

declare(strict_types=1);

namespace LeonWbr\InertiaSitepackage\Middleware;

use LeonWbr\Inertia\Middleware\InertiaMiddleware as BaseInertiaMiddleware;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Domain\Repository\PageRepository;
use TYPO3\CMS\Core\Site\Entity\Site;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Frontend\ContentObject\Menu\TextMenuContentObject;
use TYPO3\CMS\Frontend\DataProcessing\MenuProcessor;
use TYPO3\CMS\Core\Database\ConnectionPool;

class InertiaMiddleware extends BaseInertiaMiddleware
{
  public function share(ServerRequestInterface $request): array
  {
    /** @var Site */
    $site = $request->getAttribute('site');
    $connection = GeneralUtility::makeInstance(ConnectionPool::class)
      ->getConnectionForTable('pages');

    $pages = $connection->select(
      ['pid', 'uid', 'title', 'slug'],
      'pages',
      ['nav_hide' => 0, 'deleted' => 0, 'hidden' => 0],
      [],
      ['sorting' => 'ASC']
    )->fetchAllAssociative();

    $menu = $this->buildMenuTree($pages);

    return [
      "site" => [
        "title" => $site->getAttribute('websiteTitle') ?? "",
        "availableLanguages" => array_reduce(
          $site->getLanguages(),
          function ($result, $language) {
            $result[$language->getLocale()->getLanguageCode()] = $language->getTitle();
            return $result;
          },
          []
        ),
        "mainNavigation" => $menu,
      ]
    ];
  }

  protected function buildMenuTree(array $pages): array
  {
    $tree = [];
    $lookup = [];

    // Index pages by uid
    foreach ($pages as $page) {
      $lookup[$page['uid']] = $page;
    }

    // Build the tree
    foreach ($lookup as &$page) {
      if (isset($lookup[$page['pid']])) {
        if (!isset($lookup[$page['pid']]['children'])) {
          $lookup[$page['pid']]['children'] = [];
        }

        $lookup[$page['pid']]['children'][] = &$page;
      } else {
        $tree[] = &$page;
      }
    }

    return $tree;
  }
}
