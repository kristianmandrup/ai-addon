## Install addon

Automate installation of addons such as [sigma-ui-framework](https://github.com/sigmaframeworks/sigma-ui-framework)

Multiple dependency installs (npm):

`validate.js aurelia-validation aurelia-validatejs aurelia-ui-framework amcharts moment numeral fabric whatwg-fetch`

`dtsSource` under `transpiler`:

```
"./node_modules/aurelia-ui-framework/**/*.d.ts"
```

`addon.js`

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

### Plugins config

```
plugins/
  index.js
```

```js
export default = [
  ...
  ,'aurelia-ui-framework' <-- insert
];
```

`plugins/aurelia-ui-framework.js`

```js
export default function configure(aurelia) {
    aurelia.use
       .plugin('aurelia-validation')
       .plugin('aurelia-validatejs')
       .plugin('aurelia-ui-framework', function (config) {
           // AppKey for local/session storage key prefix
           config.App.Key = 'App';
           // Application Title
           config.App.Title = 'Aurelia UI Framework';
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
       });
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

