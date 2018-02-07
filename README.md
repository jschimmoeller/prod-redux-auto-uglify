Redux-auto issue
================

this project was created to show issue with create react app and redux auto

steps to install and validate it runs:
--------------------------------------

```bash
git clone https://github.com/jschimmoeller/prod-redux-auto-uglify.git
cd prod-redux-auto-uglify
npm install
npm start

```

reproduce issue:
----------------

```bash
npm run build

```

results:
--------

> npm run build
>
> prod-redux-auto-uglify@0.1.0 build /Users/jschimmoeller/projects/prod-redux-auto-uglify react-scripts build
>
> Creating an optimized production build... Failed to compile.
>
> Failed to minify the code from this file:
>
> ./node_modules/redux-auto/index.js:31
>
> Read more here: http://bit.ly/2tRViJ9
