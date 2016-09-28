# Ai-addon [![Build Status](https://secure.travis-ci.org/kristianmandrup/ai-addon.png?branch=master)](http://travis-ci.org/kristianmandrup/ai-addon) [![NPM version](https://badge-me.herokuapp.com/api/npm/ai-addon.png)](http://badges.enytc.com/for/npm/ai-addon)

## Addon manager for Aurelia

Automate installation of addons such as [sigma-ui-framework](https://github.com/sigmaframeworks/sigma-ui-framework)

### Sigma UI Example

`install.json`

```json
"dtsSource": [
  "./node_modules/aurelia-ui-framework/**/*.d.ts"
]
"bundles": {
  "vendor-bundle.js": {
    "prepend": [

    ],
    "dependencies": [
      ...
    ]
  }
}
"libs": [
  ... // libs to install via npm
],
"plugins": [
  ... // plugins to install
]
```

### Package (module) installations

Multiple dependency installs (npm):

`validate.js aurelia-validation aurelia-validatejs aurelia-ui-framework amcharts moment numeral fabric whatwg-fetch`

### Plugins config

```
plugins/
  index.js
```

```js
export default = [
  ...
  ,'aurelia-ui-framework' // <-- insert
];
```

`configs/index.js`

```
import sigmaUi from './sigma-ui';
// ...

export default = {
  'sigma-ui': sigmaUi
  // ...
};
```

### Plugin config function

`configs/sigma-ui.js`

```
export default function (config) {
   // AppKey for local/session storage key prefix
   config.App.Key = 'App';
   // Application Title
   config.App.Title = 'Sigma UI Framework';
   // Application Version
   config.App.Version = '1.00';

   // HTTPClient Base API URL
   config.Http.BaseUrl = './';
   // HTTPClient Extra Headers
   config.Http.Headers = {
       'X-API-VERSION': '1'
   };
   // HTTPClient Send Basic Authorization Header
   config.Http.AuthorizationHeader = false;

   // Enable AmCharts
   config.UseCharts = true;
   }
```

### Plugin config

`plugins/aurelia-ui-framework.js`

```js
export default function configure(aurelia) {
    aurelia.use
       .plugin('aurelia-validation')
       .plugin('aurelia-validatejs')
       .plugin('sigma-ui-framework', configs['sigma-ui']);
}
```

##### Install UI Framework and amCharts

```
npm install validate.js aurelia-validation aurelia-validatejs aurelia-ui-framework amcharts moment numeral fabric whatwg-fetch --save
```

##### Modify `aurelia_project/aurelia.json`

Add the following to the  `vendor-bundle` -> `prepend` array

```json
"node_modules/fabric/dist/fabric.js",
"node_modules/whatwg-fetch/fetch.js"
```

Add the following to the  `vendor-bundle` -> `dependencies` array

```json
"lodash",
"moment",
"numeral",
"aurelia-validatejs",
"aurelia-fetch-client",
{
  "name": "amcharts",
  "path": "../node_modules/amcharts/dist",
  "main": "amcharts",
  "resources": [
    "amcharts/plugins/export/export.css"
  ]
},
{
  "name": "validate.js",
  "path": "../node_modules/validate.js",
  "main": "validate"
},
{
  "name": "aurelia-validation",
  "path": "../node_modules/aurelia-validation/dist/amd",
  "main": "aurelia-validation"
},
{
  "name": "aurelia-ui-framework",
  "path": "../node_modules/aurelia-ui-framework",
  "main": "aurelia-ui-framework"
}
```

Add the next line to `dtsSource` under `transpiler`

```json
"./node_modules/aurelia-ui-framework/**/*.d.ts"
```


## Contributing

Please submit all issues and pull requests to the [kristianmandrup/ai-addon](https://github.com/kristianmandrup/ai-addon) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/kristianmandrup/ai-addon/issues).

## License

The MIT License

Copyright (c) 2016, Kristian Mandrup

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

