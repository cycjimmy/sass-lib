# sass-lib

![Test CI workflow status][workflows-badge-image]
[![libraries dependency status][libraries-status-image]][libraries-status-url]
[![libraries sourcerank][libraries-sourcerank-image]][libraries-sourcerank-url]
[![Release date][release-date-image]][release-url]
[![semantic-release][semantic-image]][semantic-url]
[![npm license][license-image]][download-url]

Personal collection of sass.

## Install
[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

```shell
# via npm
$ npm install @cycjimmy/sass-lib --save

# or via yarn
$ yarn add @cycjimmy/sass-lib
```

## Requirements

- Dart Sass >= 1.80.0 (module system only, `@import` is not supported)

## Usage

```scss
// Native Dart Sass (enable the node package importer first:
// `sass --pkg-importer=node` or `importers: [new sass.NodePackageImporter()]`)
@use 'pkg:@cycjimmy/sass-lib' as *;

// Vite and other bundlers that resolve bare specifiers
@use '@cycjimmy/sass-lib' as *;

// webpack sass-loader
@use '~@cycjimmy/sass-lib' as *;
```

Entry points (prefix with `pkg:` for the native Dart Sass importer):

```scss
@use '@cycjimmy/sass-lib/functions/index' as fn;
@use '@cycjimmy/sass-lib/mixins/index' as mx;
@use '@cycjimmy/sass-lib/placeholders/index' as *;
@use '@cycjimmy/sass-lib/reset/h5';
@use '@cycjimmy/sass-lib/reset/special';
```

<!-- Links: -->
[npm-image]: https://img.shields.io/npm/v/@cycjimmy/sass-lib
[npm-url]: https://npmjs.org/package/@cycjimmy/sass-lib

[download-image]: https://img.shields.io/npm/dt/@cycjimmy/sass-lib
[download-url]: https://npmjs.org/package/@cycjimmy/sass-lib

[workflows-badge-image]: https://github.com/cycjimmy/sass-lib/workflows/Test%20CI/badge.svg

[libraries-status-image]: https://img.shields.io/librariesio/release/npm/@cycjimmy/sass-lib
[libraries-sourcerank-image]: https://img.shields.io/librariesio/sourcerank/npm/@cycjimmy/sass-lib
[libraries-status-url]: https://libraries.io/github/cycjimmy/sass-lib
[libraries-sourcerank-url]: https://libraries.io/npm/@cycjimmy%2Fsass-lib

[release-date-image]: https://img.shields.io/github/release-date/cycjimmy/sass-lib
[release-url]: https://github.com/cycjimmy/sass-lib/releases

[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

[license-image]: https://img.shields.io/npm/l/@cycjimmy/sass-lib
