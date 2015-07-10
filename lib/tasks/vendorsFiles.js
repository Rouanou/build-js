/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";


// VENDORSFILES TASK
// - copy vendors less files in dest folder
// - outputs vendors css in vendors.min.css
// ----------------------------------------

var concat = require('gulp-concat');
var debug = require('gulp-debug');
var plumber = require("gulp-plumber");
var uglify = require('gulp-uglify');

module.exports = function (gulp, config, handleErrors) {

    gulp.task('vendorsFiles:fonts', function () {
        return gulp.src(config.vendorsFiles.fontsDev)
            .pipe(debug({
                title: 'Copying vendors fonts...'
            }))
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(gulp.dest(config.vendorsFiles.fontsDevBuild))
            .pipe(gulp.dest(config.vendorsFiles.fontsBuild));
    });

    gulp.task('vendorsFiles:css', ['vendorsFiles:fonts'], function () {
        return gulp.src(config.vendorsFiles.cssDev)
            .pipe(debug({
                title: 'Concatenating vendors css...'
            }))
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(concat('vendors.min.css'))
            .pipe(gulp.dest(config.vendorsFiles.cssDevBuild));
    });

    //gulp.task('vendorsFiles:js', function () {
    //    return gulp.src(config.vendorsFiles.jsDev)
    //        .pipe(debug({title: 'Concatenating vendors js...'}))
    //        .pipe(plumber({
    //            errorHandler: handleErrors
    //        }))
    //        .pipe(concat('vendors-scripts.min.js'))
    //        .pipe(uglify())
    //        .pipe(gulp.dest(config.vendorsFiles.jsDevBuild));
    //});
};
