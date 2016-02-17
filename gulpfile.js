var elixir = require('laravel-elixir');
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';
elixir.config.viewPath = './';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    mix.browserify('app.js');
    mix.browserSync({
        files: ['**/*.html', 'dist/js/**/*.js', 'dist/css/**/*.css'],
        proxy: undefined,
        server: {
            baseDir: "./"
        }
    });
});
