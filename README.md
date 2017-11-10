# Replace variables in HTML with rollup

A rollup.js plugin to replace variables in html files during the build process, based on replace-in-file. Make a single replacement or multiple replacements at once.


## Installation
```shell
# Using npm
npm install rollup-plugin-replace-html-vars --save-dev

# Using yarn
yarn add rollup-plugin-replace-html-vars
```


## Simple example

Replace first occurrence only:

```js
// Import the plugin
import replaceHtmlVars from 'rollup-plugin-replace-html-vars';

// Load the library and specify options
// rollup.js configuration
...
plugins: [
    // Place at the end of your rollup plugin section
    // Any string is fine as variable,
    // here we use _THIS_IS_THE_VARIABLE_
    replaceHtmlVars({
        files: 'path/to/files/example.html',
        from: '_THIS_IS_THE_VARIABLE_',
        to: '1.0.0',
    })
]
```

```html
// Use in example.html
<p>Current version: _THIS_IS_THE_VARIABLE_</p>
```

```html
// Results in value of options.to, here '1.0.0'
<p>Current version: 1.0.0</p>
```


## Replace multiple variables

Replace first occurrence only:

```js
// Import the plugin
import replaceHtmlVars from 'rollup-plugin-replace-html-vars';

// Load the library and specify options
// rollup.js configuration
...
plugins: [
    // Place at the end of your rollup plugin section
    // Any string is fine as variable
    replaceHtmlVars({
        files: 'path/to/files/example.html',
        from: ['FIRST_VARIABLE', 'second-variable'],
        to: ['Number one', 'Only second'],
    })
]
```

```html
// Use in example.html
<p>Jane Doe is: FIRST_VARIABLE</p>
<p>John Doe is: second-variable</p>
```

```html
// Results in value of options.to, here '1.0.0'
<p>Jane Doe is: Number one</p>
<p>John Doe is: Only second</p>
```


## Regular expressions and easy cache-buster

Replace **all occurrences** of `${timestamp}` in your code, a simple way to create a cache-buster with rollup.js:

```js
// Import the plugin
import replaceHtmlVars from 'rollup-plugin-replace-html-vars';

// Load the library and specify options
// rollup.js configuration
...
plugins: [
    // Place at the end of your rollup plugin section
    // Any string is fine as variable, here we use ${timestamp}
    replaceHtmlVars({
        files: 'path/to/files/*.html',
        from: /\${timestamp}/g,
        to: Date.now(),
    })
]
```

```html
// Use in an array of html files
<link rel="stylesheet" type="text/css" href="static/bundle.css?t=${timestamp}" />
<script src="static/bundle.js?t=${timestamp}"></script>
```

```html
// Results in options.to, in this example Date.now()
<link rel="stylesheet" type="text/css" href="static/bundle.css?t=1510343208773" />
<script src="static/bundle.js?t=1510343208773"></script>
```


## More Options

`rollup-plugin-replace-html-vars` is a plugin for rollup.js which wraps `replace-in-file`. All options of [replace-in-file](https://github.com/adamreisnz/replace-in-file) are available for `rollup-plugin-replace-html-vars`.


## License
(MIT License)

Copyright 2017, [Andreas Jacob](http://cordobo.com/)