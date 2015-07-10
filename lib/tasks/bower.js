/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// BOWER TASK
// - install bower components
// --------------------------

var bower        = require('gulp-bower');
var plumber      = require("gulp-plumber");

module.exports = function (gulp, config, handleErrors) {

    gulp.task('bower', ['clean:bower'], function () {
        return bower()
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(gulp.dest(config.global.bowerDir));
    });
};
