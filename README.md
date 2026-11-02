> **This repository is archived.** The sitepackage has been folded into [leon-wbr/inertia-typo3](https://github.com/leon-wbr/inertia-typo3), where it lives on as the example project's starter in [`example/packages/sitepackage`](https://github.com/leon-wbr/inertia-typo3/tree/main/example/packages/sitepackage). To start a project, copy that directory into your project's `packages/` directory; the [adapter's README](https://github.com/leon-wbr/inertia-typo3#starting-from-the-example-sitepackage) has the steps. Issues and pull requests go to leon-wbr/inertia-typo3.

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
