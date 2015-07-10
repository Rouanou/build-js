/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";


// LIVE TASK
// - watch html, less, js files
// - reload if changes
// ----------------------------

var browserSync = require('browser-sync'),
    gutil = require('gulp-util');
var reload = browserSync.reload;
var spawn = require('child_process').spawn;

function dup(env) {
    return Object.keys(env).reduce(function (prev, cur) {
        prev[cur] = env[cur];
        return prev;
    }, {});
}


module.exports = function (gulp, config, handleErrors) {
    gulp.task('live', ['annotate'], function () {
        var dupenv = dup(process.env);
        var cmd = config.global.nodeServer.split(' ');
        var child = spawn(cmd[0], cmd.splice(1), {
            cwd: process.cwd(),
            env : dupenv,
            stdio: 'inherit'
        });

        // Listen for an exit event:
        child.on('data', function (data) {
            gutil.log(data);
        });

        // Listen for an exit event:
        child.on('exit', function (exitCode) {
            gutil.log("local server exited with code: ", exitCode);
        });
        // Listen for an error event:
        child.on('error', function (err) {
            gutil.log("erreur sur le local server : ", err);
        });

        browserSync({
            proxy: config.global.proxy,
            port: config.global.bsPort,
            ui: {
                port: config.global.bsUiPort
            },
            ghostMode: false

        });

        gulp.watch(config.less.lessFiles, ['less:compile']);
        gulp.watch(config.html.dev).on('change', reload);
        return gulp.watch(config.js.dev, browserSync.reload);
    });
};
