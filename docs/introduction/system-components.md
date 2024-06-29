# System Components

NPDM is not a monolith solution, but consists of a few modules, which of them has it's own role.

## @npdm/core

The `@npdm/core` package is the heart of the NPDM system. Its main part is `InMemoryDynamicLoader` class. Its responsibility is downloading and caching static assets from the NPM packages and resolving them by package name and version, and by given relative path.

This package is supposed to be a part of an NPDM server, which serves microfrontend deployables as static assets.

<!-- TODO link to the API reference -->

## @npdm/express

`@npdm/express` is a package which allows to create router for the [Express](https://expressjs.com/) server application. The responsibility of such a router is to create endpoint to retrieving the assets from NPM packages by URL like `/{packageName}/{packageVersion}/{assetPath}`. This is something that allows deployment of multiple microfrontend version which can be reused for different applications.

<!-- TODO link to the API reference -->

## @npdm/module-federation

`@npdm/module-federation` provides interfaces to apply NP(D)M approach to Module Federation with usage of [Federation Runtime](https://module-federation.io/guide/basic/runtime.html). It provides some methods which allows to publish remotes as NPM packages and retrieve them via NPDM server.

This package also introduces some approach to allow strict typing for each remote, so you can create strict specification about each package and align interfaces between it and a consumer modules using Typescript.

<!-- TODO link to the article about NPDM Module Federation -->