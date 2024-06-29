---
outline: [2,3]
---
# @npdm/core

## Classes

### PackageLoader

Manages the loading of package contents from a registry. Supports configuration of allow list to include or exclude specific packages based on their names and versions. Takes [PackageLoaderOptions](#packageloaderoptions) as an argument.

### InMemoryDynamicLoader

The basic class of the `@npdm/core`. Manages the in-memory caching of package contents, allowing dynamic retrieval of package assets. Supports expirable caching mechanisms if a time-to-live (TTL) is specified in the options. Constructor accepts [InMemoryDynamicLoaderOptions](#inmemorydynamicloader) as an argument.

### RestrictedPackageError

A subclass of the `Error` which is thrown when accessing the restricted package, not allowed by the list of package specifiers, passed into the `InMemoryDynamicLoader` or `PackageLoader`.

## Types

### PackageContent

An array of files and their contents returned by `fetchPackageContent` method of the `PackageLoader` class. Used in `InMemoryDynamicLoader` under the hood.

```ts
type PackageContent = {
  path: string,
  content: Uint8Array,
}[];
```

### PackageLoaderOptions

The constructor argument for the [PackageLoader](#packageloader).

```ts
type PackageLoaderOptions = {
  /** Registry URL to fetch package content from. By default "https://registry.npmjs.org" */
  registry?: string;

  /** Which packages to include. If not provided, all packages will be included */
  include?: PackageSpecifier[];

  /** Which packages to exclude. Filters included packages */
  exclude?: PackageSpecifier[];
};
```

### PackageSpecifier

Package specifier to include or exclude package into or out of the list of allowed packages. If a package name or version is a string, it will be matched exactly.

```ts
type PackageSpecifier = {
  name?: string | RegExp;
  version?: string | RegExp;
};
```

### InMemoryDynamicLoaderOptions

A union of [PackageLoaderOptions](#packageloaderoptions) and `ttl` parameter, specific for [InMemoryDynamicLoader](#inmemorydynamicloader).

```ts
type InMemoryDynamicLoaderOptions = PackageLoaderOptions & {
  /** Maximum time to keep package content in memory if unused, 0 or false disables cleanup */
  ttl?: false | number;
};
```