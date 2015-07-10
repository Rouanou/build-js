/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

var handler = require('./lib/util/errorHandler');
var tasks = require('require-dir')('./lib/tasks');

module.exports = function (gulp, config, errHandler) {

    return Object.keys(tasks).map(function (key) {
        return tasks[key](gulp, config, errHandler || handler);
    });

};
