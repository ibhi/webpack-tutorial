# Webpack Step By Step Tutorial
Each branch contains step by step instructions for configuring webpack
* 01-basic            -> This branch contains very basic webpack configuration
* 02-require-modules  -> This branch contains webpack config to require modules defined and exported in different js files in to entry files
* 03-es2015           -> This branch contains webpack config to transpile es2015 code to es5 code
* 04-optimize         -> This branch contains configuration to do a production build using node environment variables
* 05-hmr              -> This branch contains config for hot module replacement. This enables to update the page without refreshing the page by just injecting the patch in to the browser, so that the application maintains its current state
* 06-file-loader      -> This branch contains config to load images using webpack file-loader
* 07-url-loader       -> This branch contains config to load smaller images as data-url instead of actual files. This might provide some performance boost than loading the images through xhr
* 08-tree-shaking     -> This branch contains config to do dead code elimination by tree shaking. Webpack 2 requires es6 imports to do tree shaking, so configure your babel to not to use commonjs module(refer .babelrc in this repo for more info)
* 09-css-loader       -> This config allows us to load css stylesheets through webpack by requiring it. Style-loader injects the required styles in to the head tag of the page
* 10-extract-text-plugin -> This branch contains config that will extract the `required` css and spit it in to a new file
