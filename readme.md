# Elixir Without Laravel

By request, I have made a basic demo repo for how to use Elixir without Laravel.
The original post is [here](http://iamlawrence.me/laravel/2016/01/09/elixir-without-laravel.html).

The app itself is a hash digester written in Vue.js in _71 loc_, which I think is pretty neat in itself!

![Hash Digester in Vue.js](https://i.imgur.com/bjOZf03.png)

The `gulpfile.js` has three tasks:

1. Compiling sass to css, `src/sass/app.scss` -> `dist/css/app.css`
2. Browserify js, `src/js/app.js` -> `dist/js/app.js`
3. Sync browser if any `**/*.html`, `dist/js/**/*.js`, `dist/css/**/*.css` changes

# Setup

To get running:

```
npm install
gulp watch
```

Then browse to [localhost:3000](http://localhost:3000) and start coding!
Remember `gulp --production` to minify!

# Notes

As a final note, I added `babel-preset-es2015` and `babel-preset-react` to the dev dependencies.
This fixes [an issue](https://github.com/laravel/elixir/issues/354) that I have sometimes:

    Couldn't find preset "es2015" relative to directory

