/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// DOC TASK
// - valid JS
// -----------

var yuidoc = require("gulp-yuidoc");

module.exports = function (gulp, config, handleErrors) {

    gulp.task('doc', function () {
        return gulp.src(config.docs.dev)
            .pipe(yuidoc())
            .pipe(gulp.dest(config.docs.build));
    });
};
