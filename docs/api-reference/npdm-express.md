# @npdm/express

## createNpdmRouter(options)

A method which returns an [Express router object](https://expressjs.com/en/4x/api.html#router) with the only one parametrized endpoint: `/:packageName/:version/*`.

As an example, if we request the URL `/lodash/4.17.21/_apply.js`, we will get file `_apply.js` from the `lodash` package of version `4.17.21`.

The `createNpdmRouter` method takes [InMemoryDynamicLoaderOptions](./npdm-core.md#inmemorydynamicloaderoptions) as a parameter and allows configuring `InMemoryDynamicLoader` which is used under the hood.

The next rules describe the behavior of the endpoint:

- If the requested package is not allowed by package specifiers, the 400 HTTP status is returned
- If asset is not found, the 404 HTTP status is returned
- In case of any internal errors HTTP status 500 is returned, and the error is logged into the console.

