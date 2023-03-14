let mix = require('laravel-mix');

mix.sass('src/sass/app.scss', 'css');

mix.js('src/js/app.js', 'js');
mix.setPublicPath('dist');