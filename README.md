# Unknow problem with "path"

Steps to reproduce:

* Clone this repo
* run `yarn`
* run `yarn workspace @tarkus/web-form start`

After the project starts, this error appears on screen and below the default CRA console with the localhost URLs:

* The `packagesapps/web-form` is just a rename in the typescript default app.
* The `packages/ui` and `packages/components-typescript` are also the default ones that come with the playground.

This is the error in the console:

```
Compiled successfully!

You can now view @tarkus/web-form in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.66:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
    at validateString (internal/validators.js:125:11)
    at Object.join (path.js:1147:7)
    at noopServiceWorkerMiddleware (/Users/me/path-to-my/project/node_modules/react-dev-utils/noopServiceWorkerMiddleware.js:14:26)
    at Layer.handle [as handle_request] (/Users/me/path-to-my/project/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:317:13)
    at /Users/me/path-to-my/project/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:275:10)
    at launchEditorMiddleware (/Users/me/path-to-my/project/node_modules/react-dev-utils/errorOverlayMiddleware.js:20:7)
    at Layer.handle [as handle_request] (/Users/me/path-to-my/project/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:317:13)
    at /Users/me/path-to-my/project/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:275:10)
    at handleWebpackInternalMiddleware (/Users/me/path-to-my/project/node_modules/react-dev-utils/evalSourceMapMiddleware.js:42:7)
    at Layer.handle [as handle_request] (/Users/me/path-to-my/project/node_modules/express/lib/router/layer.js:95:5)
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
    at validateString (internal/validators.js:125:11)
    at Object.join (path.js:1147:7)
    at noopServiceWorkerMiddleware (/Users/me/path-to-my/project/node_modules/react-dev-utils/noopServiceWorkerMiddleware.js:14:26)
    at Layer.handle [as handle_request] (/Users/me/path-to-my/project/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:317:13)
    at /Users/me/path-to-my/project/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:275:10)
    at launchEditorMiddleware (/Users/me/path-to-my/project/node_modules/react-dev-utils/errorOverlayMiddleware.js:20:7)
    at Layer.handle [as handle_request] (/Users/me/path-to-my/project/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:317:13)
    at /Users/me/path-to-my/project/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/me/path-to-my/project/node_modules/express/lib/router/index.js:275:10)
    at handleWebpackInternalMiddleware (/Users/me/path-to-my/project/node_modules/react-dev-utils/evalSourceMapMiddleware.js:42:7)
    at Layer.handle [as handle_request] (/Users/me/path-to-my/project/node_modules/express/lib/router/layer.js:95:5)
```
