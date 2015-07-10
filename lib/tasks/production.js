/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// PRODUCTION TASK
// - if karma tests pass
// - compress all the things
// -------------------------

module.exports = function (gulp, config, handleErrors) {

    // Run this to compress all the things!
    gulp.task('production', ['karma'], function () {
        // This runs only if the karma tests pass
        return gulp.start([
            'clean:all',
            'bower',
            'less:compile',
            'minifyCss',
            'js:rjs',
            'html:copy',
            'images:copy'
        ]);
    });
};
