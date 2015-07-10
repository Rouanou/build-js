/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
"use strict";

// HANDLE ERROR FUNCTION
// - log the error in the console
// - do not break the stream
// ------------------------------

var notify = require("gulp-notify");

module.exports = function (error) {
    console.log(error.toString());
    notify({ message: 'Error : ' + error.toString() });
    this.emit('end');
};
