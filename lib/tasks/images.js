/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// IMAGES TASK
// - output images in dest dir
// -----------------------

var debug = require('gulp-debug');
var plumber = require("gulp-plumber");

module.exports = function (gulp, config, handleErrors) {

    gulp.task('images:copy', function () {
        return gulp.src(config.images.devFiles)
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(debug({title: 'Copying image files...'}))
            .pipe(gulp.dest(config.images.build));
    });
};
