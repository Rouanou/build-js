/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// KARMA TASKS
// - run tests
// -----------

var karma        = require('karma');
var plumber      = require("gulp-plumber");
var debug        = require("gulp-debug");

module.exports = function (gulp, config, handleErrors) {

    gulp.task('karma:watch', function () {
        return gulp.src(config.karma.testsFiles)
            .pipe(debug({title: 'Watching karma...'}))
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(karma({
                configFile: config.karma.configFile,
                action: 'watch',
                // enable/disable watching file and executing tests whenever any file changes
                autoWatch: true
            }));
    });

    gulp.task('karma:unit', function () {
        return gulp.src(config.karma.testsFiles)
            .pipe(debug({title: 'Executing karma unit tests...'}))
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(karma({
                configFile: config.karma.configFile,
                action: 'run'
            }));
    });
};
