> **⚠️ EXPERIMENTAL STATUS**: This package is in early experimental stage. It is not recommended for production use yet. Expect breaking changes, limited debugging capabilities, and ongoing significant architectural changes. Feel free to try it out and provide feedback, but use with caution.

# TYPO3 Inertia Sitepackage

A modern TYPO3 sitepackage template demonstrating how to build powerful single-page applications using [Inertia.js](https://inertiajs.com/), React, and Vite while retaining TYPO3's backend capabilities.

## ⚠️ Known Issues

- Asset handling is currently limited to development server injection (done in [TYPO3 Inertia Adapter](https://github.com/leon-wbr/inertia))
- Production builds require proper asset collection (planned integration with [vite-asset-collector](https://docs.typo3.org/p/praetorius/vite-asset-collector))

## Features

- Complete [Inertia.js](https://inertiajs.com/) + React + Vite setup optimized for TYPO3
- TypeScript support out of the box
- Pre-configured content element components
- Modern development workflow with hot reloading

## Installation

### Requirements

- Node.js >= 18
- TYPO3 v13.4
- [TYPO3 Inertia Adapter](https://github.com/leon-wbr/inertia)

### Quick Start

Clone this repository and require it locally using Composer.

This extension is set up to be used with the [Vite AssetCollector for TYPO3](https://github.com/s2b/vite-asset-collector), which needs a configuration in the root of your TYPO3 installation. 

An example configuration that will work out of the box if the paths are matched (keep in mind that you need to install the dependencies):

```js
import { defineConfig } from "vite";
import typo3 from "vite-plugin-typo3";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [typo3(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(
        __dirname,
        "./packages/inertia-sitepackage/Resources/Private/src"
      ),
    },
  },
});
```

Run this to install the dependencies:

`ddev yarn add vite vite-plugin-typo3 @vitejs/plugin-react @tailwindcss/vite`

Start the Vite development server and launch the project:

`ddev vite && ddev launch`
