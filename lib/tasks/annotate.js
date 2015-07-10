/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

var plumber      = require('gulp-plumber');
var ngAnnotate   = require('gulp-ng-annotate');

// ANNOTATE TASK
// - needed for require.js
// -----------------------

module.exports = function (gulp, config, handleErrors) {

    gulp.task('annotate', function () {
        return gulp.src(config.js.dev, {base: './'})
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(ngAnnotate())
            .pipe(gulp.dest('./'));
    });
};

