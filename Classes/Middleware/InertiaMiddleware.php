<?php

declare(strict_types=1);

namespace LeonWbr\InertiaSitepackage\Middleware;

use LeonWbr\Inertia\Middleware\InertiaMiddleware as BaseInertiaMiddleware;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Site\Entity\Site;

class InertiaMiddleware extends BaseInertiaMiddleware
{
  public function share(ServerRequestInterface $request): array
  {
    /** @var Site */
    $site = $request->getAttribute('site');
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
      ]
    ];
  }
}
