/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";


// MINIFYCSS TASK
// - minify css
// - show final files size
// -----------------------

var minifyCSS = require('gulp-minify-css');
var size      = require('gulp-filesize');

module.exports = function (gulp, config, handleErrors) {

    gulp.task('minifyCss', ['less:compile', 'vendorsFiles:css'], function () {
        return gulp.src(config.build.cssDev)
            .pipe(minifyCSS({
                keepBreaks: true
            }))
            .pipe(gulp.dest(config.build.cssBuild))
            .pipe(size());
    });
};
