<?php

use LeonWbr\InertiaSitepackage\Middleware\InertiaMiddleware;

return [
  'frontend' => [
    'inertia-middleware' => [
      'target' => InertiaMiddleware::class,
    ],
  ],
];
