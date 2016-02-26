var gulp = require('gulp');
var mjml = require('gulp-mjml')
var Elixir = require("laravel-elixir");

var $ = Elixir.Plugins;
var config = Elixir.config;
var Task = Elixir.Task;
var Notify = Elixir.Notification;

Elixir.extend("mjml", function(src, output) {

    config.html = {
        outputFolder: 'html'
    };

    config.html.mjml = {
        folder: 'mjml'
    };

    var paths = prepGulpPaths(src, output);

    new Task('mjml', function() {
        gulp.src(paths.src.path)
            .pipe(mjml())
            .pipe($.concat(paths.output.name))
            .pipe(gulp.dest(paths.output.baseDir))
            .pipe(new Notify('MJML Compiled!'));
    })
    .watch(paths.src.baseDir + '/**/*.mjml')
    .ignore(paths.output.path);

});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function(src, output) {
    return new Elixir.GulpPaths()
        .src(src, config.get('assets.html.mjml.folder'))
        .output(output || config.get('public.html.outputFolder'));
};