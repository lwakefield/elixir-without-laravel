# Elixir Without Laravel

* * *

By request, I have made a basic demo repo for how to use Elixir without Laravel.
The original post is [here](http://iamlawrence.me/laravel/2016/01/09/elixir-without-laravel.html).

The app itself is a hash digester written in Vue.js in *71 loc*, which I think is pretty neat in itself!

![Hash Digester in Vue.js](https://i.imgur.com/bjOZf03.png)

The `gulpfile.js` has three tasks:

1. **Sass to CSS**: `src/sass/app.scss` -> `dist/css/app.css`
2. **Browserify JS**: `src/js/app.js` -> `dist/js/app.js`
3. **Browser Sync** watches these for changes: `**/*.html`, `dist/js/**/*.js`, `dist/css/**/*.css`

* * *

## Setup

To get running:

```
npm install
npm start
```

Then **[localhost:3000](http://localhost:3000)** should automatically launch.

You may need to open `src/sass/app.scss` and save it once for gulp to kick on and process it for the first time.


* * *

## Prerequisites

All you need is ~~love~~ Node.js.

#### Windows and OSX

1. [Install Node/NPM](http://nodejs.org)
 * Minimum: `0.10.13`
 * Recommended: `0.12.0` or above

#### Debian, Ubuntu, Mint, & other similar Linux Distros

1. Update Advanced Package Tool: `sudo apt-get update`
2. Install Node.js: `sudo apt-get install nodejs`
3. Install NPM: `sudo apt-get install npm`
4. Create a symbolic link for node `sudo ln -s /usr/bin/nodejs /usr/bin/node`


* * *

## Production

To minify for production run:

```
npm run prod
```

* * *

## Notes

As a final note, I added `babel-preset-es2015` and `babel-preset-react` to the dev dependencies.
This fixes [an issue](https://github.com/laravel/elixir/issues/354) that I have sometimes:

    Couldn't find preset "es2015" relative to directory
