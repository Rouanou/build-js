/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// WATCH TASK
// - watch less & html files
// -------------------------

module.exports = function (gulp, config, handleErrors) {

    gulp.task('watch', function () {
        gulp.watch(config.less.src, ['less:compile'])
            .on('error', handleErrors);
        return gulp.watch(config.html.src, ['html'])
            .on('error', handleErrors);
    });
};
