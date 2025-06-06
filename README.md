> **⚠️ EXPERIMENTAL STATUS**: This package is publicly available but in early experimental stage. It is not recommended for production use yet. Expect breaking changes, limited debugging capabilities, and ongoing significant architectural changes. Feel free to try it out and provide feedback, but use with caution.

# TYPO3 Inertia Sitepackage

A modern TYPO3 sitepackage template demonstrating how to build powerful single-page applications using [Inertia.js](https://inertiajs.com/), React, and Vite while retaining TYPO3's backend capabilities.

## ⚠️ Known Issues

- Asset handling is currently limited to development server injection (done in TYPO3 Inertia Adapter)
- Production builds require proper asset collection (planned integration with [vite-asset-collector](https://docs.typo3.org/p/praetorius/vite-asset-collector))

## Features

- Complete [Inertia.js](https://inertiajs.com/) + React + Vite setup optimized for TYPO3
- TypeScript support out of the box
- Pre-configured content element components
- Modern development workflow with hot reloading

## Requirements

- Node.js >= 18
- TYPO3 v13.4
- [TYPO3 Inertia Adapter](https://github.com/leon-wbr/inertia)

## Quick Start

1. Install TYPO3 and the Inertia adapter
2. Install this sitepackage
3. Run `yarn install` in Resources/Private/Vite
4. Start development with `yarn dev`
