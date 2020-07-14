# GitHub Types

A simple package with GitHub API types.

## What is this

This is an attempt to create an easy to use type package for use with the GitHub API v3.

## What is this not

This is not meant to be an API wrapper or a substitute for your favorite GitHub client.

If you are looking for a client please take a look at [Octokit/rest.js](https://github.com/octokit/rest.js).

For other languages take a look at [this list](https://developer.github.com/v3/libraries/).

## How to use this package

You can install this package from [NPM](https://npmjs.com) but running:

```shell
$ npm i github-types
```

Once installed you can use these types by importing/requiring them in your code:

```javascript
import { Repo } from "github-types";
```

We have a simple example in the [examples](examples) directory that uses the GitHub API with these types.
