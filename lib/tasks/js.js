/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// JS TASKS
// - compile JS
// - output it in dest dir
// -----------------------

var rjs = require('gulp-requirejs');

module.exports = function (gulp, config, handleErrors) {

    gulp.task('js:copy', function () {
        gulp.src(config.build.js2Dest)
            .pipe(gulp.dest(config.js.dest));

        return gulp.src(config.build.js2DestRequire)
            .pipe(gulp.dest(config.build.jsDestRequire));
    });

    gulp.task('js:rjs', ['js:copy', 'annotate'], function () {
        return rjs({
            baseUrl: config.global.devDir,
            out: config.js.destFile,
            fileExclusionRegExp: /^(r|build)\.js$/,
            optimize: "uglify",
            optimizeCss: 'standard',
            removeCombined: true,
            mainConfigFile: config.js.srcFile,
            preserveLicenseComments: false,
            name: config.js.name
        }).pipe(gulp.dest(config.js.dest));
    });
};
