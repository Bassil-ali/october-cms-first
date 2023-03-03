var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

elixir.config.assetsPath = 'themes/bassil/assets/';
elixir.config.publicPath = 'themes/bassil/assets/compiled/';

elixir(function(mix){

    mix.sass('style.scss');

    mix.scripts([
        'jquery.js',
        'app.js'
    ]);

    mix.livereload([
        'themes/bassil/assets/compiled/css/style.css',
        'themes/bassil/**/*.htm',
        'themes/bassil/assets/compiled/js/*.js'
    ]);

});