/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// LESS TASK
// - copy less files in dest folder
// - compile them, autoprefix result
// - output in main.min.css
// - trigger live reload
// --------------------------------

var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var debug        = require('gulp-debug');
var reload       = require('browser-sync').reload;
var plumber      = require("gulp-plumber");


module.exports = function (gulp, config, handleErrors) {

    gulp.task('less:compile', function () {
        return gulp.src(config.less.devFiles)
            .pipe(debug({title: 'Compiling less files...'}))
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(less())
            .pipe(concat('main.min.css'))
            .pipe(autoprefixer({
                browsers: config.global.autoPrefixBrowserList,
                cascade:  true
            }))
            .pipe(gulp.dest(config.less.devBuild))
            .pipe(reload({stream: true}));
    });
};
