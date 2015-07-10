/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// JSLINT TASK
// - valid JS
// -----------

var jslint       = require('gulp-jslint');
var plumber      = require("gulp-plumber");
var debug        = require("gulp-debug");

module.exports = function (gulp, config, handleErrors) {
    gulp.task('jslint', function () {
        return gulp.src(config.js.dev)
            .pipe(debug({title: 'Running jslint...'}))
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(jslint({
                node : true,
                unparam: true,
                nomen: true,
                plusplus: true,
                vars: true,
                eqeq: true,
                white: true,
                todo: true
            }));
    });
};
