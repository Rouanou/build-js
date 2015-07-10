/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// HTML TASK
// - watch html files
// -------------------------

module.exports = function (gulp, config, handleErrors) {
    gulp.task('html:copy', function () {
        return gulp.src(config.html.dev)
            .pipe(gulp.dest(config.html.build));
    });
};
