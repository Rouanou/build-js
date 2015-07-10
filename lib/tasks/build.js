/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// BUILD TASK
// - create dist folder with all the stuff
// ---------------------------------------
var RunSequence = require('run-sequence');

module.exports = function (gulp, config, handleErrors) {

    var runSequence = RunSequence.use(gulp);

    gulp.task('build', function (cb) {
        runSequence(
            'clean:all',
            'bower',
            ['karma:unit', 'jslint'],
            ['vendorsFiles:fonts', 'vendorsFiles:css'],
            'less:compile',
            'minifyCss',
            ['html:copy', 'images:copy'],
            'js:rjs',
            cb
        );
    });

    gulp.task('build:notest', function (cb) {
        runSequence(
            'clean:all',
            'bower',
            ['vendorsFiles:fonts', 'vendorsFiles:css'],
            'less:compile',
            'minifyCss',
            ['html:copy', 'images:copy'],
            'js:rjs',
            cb
        );
    });

    gulp.task('build:nobower', function (cb) {
        runSequence(
            ['vendorsFiles:fonts', 'vendorsFiles:css'],
            'less:compile',
            'minifyCss',
            ['html:copy', 'images:copy'],
            'js:rjs',
            cb
        );
    });
};
