---
outline: [2,3]
---

# @npdm/module-federation

## Methods

### initNpdm(npdmOptions, modulesMap)

Initializes Module Federation and returns typed `loadDynamicModule` method to dynamically load packages. The first one, `npdmOptions`, should contain the URL to the NPDM server endpoint (for example, as part of the Express server created with `@npdm/express`). `npdmOptions` also may include (optionally) parameters to pass to the Module Federation [init() method](https://module-federation.io/guide/basic/runtime.html#init).

The second parameter is `modulesMap`, where the key is the alias for the component to retrieve with `loadDynamicModule`, and value is [DynamicModule](#dynamicmodule) which is expected to be created with the method [connectModule](#connectmoduledynamicmodule-packageversion)

### connectModule(dynamicModule, packageVersion)

The `connectModule` method is used to allow strict typing in the `loadDynamicModule` method. The first argument should be a module specification, and the second argument is the expected module version. It returns `DynamicModule` which can be consumed by `initNpdm` method to load some particular module of the particular version from the particular package.

### getRemoteName

Remote name for the Module Federation in the NPDM system is standardized and should be combined from package name and version. The same method should be reused with `ModuleFederationPlugin` in the remote name, and is used under the hood in the `initNpdm` method

## Types

### DynamicPackageSpec

The `DynamicPackageSpec` type represents the basic NPDM package, which should be used with `@npdm/module-federation`

```ts
/**
 * Remote package entry point specification
 */
export type DynamicPackageSpec = {
  /** Name of the NPM package, required to retrieve the assets from it */
  packageName: string; // package name of current package

  /** Current version of the package from which module specification is taken */
  packageVersion: string; // default version of current package

  /** The path to the remote entry file for the dynamic module */
  remoteEntryRelativePath: string; // where remote entry is placed

  /** Module Federation's entryGlobalName */
  remoteEntryGlobalName?: string;

  /** Module Federations's RemoteEntryType */
  remoteType?: RemoteEntryType;
};
```

### DynamicModule

If `DynamicPackageSpec` describes NPDM package as remote, than `DynamicModule` describes the particular module exposed by this remote. This is a generic type, which optionally includes `TProps`, Typescript typing for the particular module.

```ts
export type DynamicModule<TProps = undefined> = {
  /** Package specification **/
  packageSpec: DynamicPackageSpec;

  /**
   * A path by which exposed component can be retrieved
   * @example "/Button"
   */
  exposedPath: string;
};
```

For example, if in `ModuleFederationPlugin` options we set:

```ts
  new ModuleFederationPlugin({
    name: getRemoteName(name, version),
    exposes: {
      './Button': './src/components/Button.tsx',
    },
    // ...other options
  }),
```

Than in our module we should set `exposedPath` as "/Button":

```ts
export const buttonModule: DynamicModule<ButtonModule> = {
  exposedPath: '/Button',
  packageSpec,
};
```

### NpdmOptions

Includes all the params for the ModuleFederation [init() method](https://module-federation.io/guide/basic/runtime.html#init) as optional, and also required `npdmUrl` (see [initNpdm method](#initnpdmnpdmoptions-modulesmap))