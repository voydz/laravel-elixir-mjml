var gulp = require('gulp');
var mjml = require('gulp-mjml')
var Elixir = require("laravel-elixir");

var Task = Elixir.Task;
var Notify = Elixir.Notification;
var config = Elixir.config;

Elixir.extend("mjml", function(src, output) {

    config.html = {
        outputFolder: 'html'
    };

    config.html.mjml = {
        folder: 'mjml'
    };

    new Task('mjml', function() {
        var paths = prepGulpPaths(src, output);

        gulp.src(paths.src.path)
            .pipe(mjml())
            .pipe(gulp.dest(paths.output.baseDir))
            .pipe(new Notify('MJML Compiled!'));
    });

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