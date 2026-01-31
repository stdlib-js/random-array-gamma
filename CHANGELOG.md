# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-01-31)

<section class="commits">

### Commits

<details>

-   [`0d7c7b1`](https://github.com/stdlib-js/stdlib/commit/0d7c7b148724969c79eef40805f7df7c5a61b32c) - **docs:** pass in proper argument in TSDoc example code for `random/array` packages _(by Philipp Burckhardt)_
-   [`54da286`](https://github.com/stdlib-js/stdlib/commit/54da28610f5ee6b2aa181addb1775d32f79043ee) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="features">

### Features

-   [`d6b2dfd`](https://github.com/stdlib-js/stdlib/commit/d6b2dfdefa617027bfcd14310f2fddc9db49a6c7) - add `assign` method and refactor implementation
-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - rename type definitions for array and ndarray data types

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0): rename type definitions for array and ndarray data types

    -   In order to migrate, users should update their implementations to
        use the latest naming conventions. The affected type definitions
        are aliases for individual data type strings, so their should be
        no behavioral changes.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`e99e4bc`](https://github.com/stdlib-js/stdlib/commit/e99e4bc77b1f24bf17daa3c4e38240e3ecf4f2ae) - **docs:** update related packages _(by Athan Reines)_
-   [`1205885`](https://github.com/stdlib-js/stdlib/commit/1205885e8d9f427f7b78abfe8f95b5d03cdc180c) - **chore:** remove obsolete files _(by Athan Reines)_
-   [`d6b2dfd`](https://github.com/stdlib-js/stdlib/commit/d6b2dfdefa617027bfcd14310f2fddc9db49a6c7) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - **feat:** rename type definitions for array and ndarray data types _(by Athan Reines)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(#1145)](https://github.com/stdlib-js/stdlib/pull/1145) _(by stdlib-bot)_
-   [`3653808`](https://github.com/stdlib-js/stdlib/commit/3653808823106dcfc1b033a8bd054f4250b12e11) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2023-07-31)

<section class="features">

### Features

-   [`720e367`](https://github.com/stdlib-js/stdlib/commit/720e367ed057bf75c6ae4fce8b62f606b99a94c0) - add support for creating an array of pseudorandom numbers drawn from a gamma distribution [(#914)](https://github.com/stdlib-js/stdlib/pull/914)

</section>

<!-- /.features -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#871](https://github.com/stdlib-js/stdlib/issues/871)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`2e197bc`](https://github.com/stdlib-js/stdlib/commit/2e197bc4bab1c252c283ff512d82610648368598) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`2b7294c`](https://github.com/stdlib-js/stdlib/commit/2b7294cfb85eae2efedc868fecc3a86316825f44) - **docs:** remove unsupported options _(by Athan Reines)_
-   [`720e367`](https://github.com/stdlib-js/stdlib/commit/720e367ed057bf75c6ae4fce8b62f606b99a94c0) - **feat:** add support for creating an array of pseudorandom numbers drawn from a gamma distribution [(#914)](https://github.com/stdlib-js/stdlib/pull/914) _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

