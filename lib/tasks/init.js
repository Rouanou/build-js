/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// INIT TASK
// - clean all the stuff
// - copy vendors files
// - compile less files
// ---------------------

module.exports = function (gulp, config, handleErrors) {

    gulp.task('init:nobower', function () {
        return gulp.start('less:compile', 'vendorsFiles:fonts', 'vendorsFiles:css');
    });

    gulp.task('init', ['bower'], function () {
        return gulp.start('less:compile', 'vendorsFiles:fonts', 'vendorsFiles:css');
    });
};
