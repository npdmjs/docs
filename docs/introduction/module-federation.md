---
outline: [2,3]
---

# Module Federation

## Preface

Since NPDM server only serves static files from the NPM packages, to use remote components as microfrontends, we need some other technology. The-state-of-art solution is the [Module Federation](https://module-federation.io/).

This article describes a proof-of-concept of the approach which can be used to implement versioned microfrontends with deployment through the NPDM server. To integrate NPDM server with the Module Federation, a few abstractions were introduced.

To check example implementation, refer to the [Example](./example.md) article.

## Abstractions

### Package Specification

Package specification describes a versioned remote component (microfrontend). It should contain information, in which NPM package the remote module should be found, and its default version, which has to be changed later in runtime. Another important part of the package specification is the field `remoteEntryRelativePath` which defines the path to the entry file, relative to the root of the NPM package. Package specification has type [DynamicPackageSpec](../api-reference/npdm-module-federation.md#dynamicpackagespec).

Here is an example of the package specification:

```ts
import type { DynamicPackageSpec } from '@npdm/module-federation';

export const packageSpec: DynamicPackageSpec = {
  // where the remote component is placed:
  packageName: 'npdmjs-react-example',
  // default package version, which is changed in runtime:
  packageVersion: '1.0.0',
  // path to the Module Federation entry file in the package:
  remoteEntryRelativePath: '/npdm/entry.js',
};
```

### Dynamic Module

If package specification defines the remote, the dynamic module defines and describes particular module which is [exposed](https://module-federation.io/configure/exposes.html) in this remote.

Because we can use dynamic modules from the different package versions, each module should include its package specification. First reason why dynamic module exists as an object an abstraction is that we should define exposed component as the part of the versioned package. The second reason is that dynamic module plays the role of an interface which defines rules of how this component should be used. Here is the example of the dynamic module:

```ts
import { packageSpec } from './packageSpec.js';
import type { FC } from 'react';
import type { DynamicModule } from '@npdm/module-federation';

export type WonderfulButtonProps = {
  label: string;
  onClick?: () => void;
};

// our React component type
export type WonderfulButtonType = FC<WonderfulButtonProps>;

export const wonderfulButtonModule: DynamicModule<{
  // this will be module, which contains default component
  default: WonderfulButtonType
}> = {
  // in the 'exposes' field in ModuleFederationPlugin:
  // './Button': './src/components/WonderfulButton.tsx'
  exposedPath: '/Button',
  // we use some exiting package specification
  packageSpec,
};
```

## Recommended Rules

Both package and dynamic module specifications supposed to define interfaces which can allow safe usage of the remote modules in the host application.

In the proposed approach we put all the specifications into the package first of all for the sake of the semantic versioning. The logic behind it is that when interface of the component changes, we have to update our consumer applications accordingly anyway. Such an approach can lose in terms of flexibility comparing to the [Module Federation remote types](https://module-federation.io/guide/basic/type-prompt.html), but at the same time we can guarantee during local testing that interfaces will be aligned with the remote modules.

The next rules can be recommended to achieve maximal stability:

1. **Package specification should not be changed during package lifetime, except if only default `packageVersion`**. To ensure safe switching between different modules we should make sure that the entry point and remote name stays the same.

2. **Each breaking change in the dynamic module specification should be published with the new major version.** In the future versions of `@npdm/module-federation` we may add validation logic to make sure that version of remote module which was set dynamically during runtime aligns with the major version of the package used in the application.

3. **Each change in the dynamic module specification which is not breaking, should be published with the new minor version of the package**. In case if in your application you want to use new features from the remote module, you should upgrade package version to get new interfaces.

