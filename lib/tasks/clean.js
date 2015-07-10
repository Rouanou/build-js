/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// CLEAN TASKS
// - remove target content (dist, dev, all)
// ---------------------------------------

var del = require('del');

module.exports = function (gulp, config, handleErrors) {

    gulp.task('clean:dist', function (cb) {
        return del(config.global.buildDir + '/**/*', cb);
    });

    gulp.task('clean:dev', function (cb) {
        return del(config.global.devBuildDir, cb);
    });

    gulp.task('clean:bower', function (cb) {
        return del(config.global.bowerDir + '/**/*', cb);
    });

    gulp.task('clean:all', function () {
        return gulp.start('clean:dist', 'clean:dev', 'clean:bower');
    });
};
