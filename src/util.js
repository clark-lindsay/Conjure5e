"use strict";
exports.__esModule = true;
function randomInt(min, max) {
    var roundUpMin = Math.ceil(min);
    var roundDownMax = Math.floor(max);
    return Math.floor(Math.random() * (roundDownMax - roundUpMin)) + roundUpMin;
}
exports.randomInt = randomInt;
function range(start, end) {
    if (end < start || start < 0 || end < 0) {
        throw Error('The start and end values of a range must be positive, with end >= start');
    }
    return Array.from(new Array(end - start), function (_, i) { return i + start; });
}
exports.range = range;
