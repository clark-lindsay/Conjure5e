"use strict";
exports.__esModule = true;
exports.recordArguments = exports.writeSourcePreferences = void 0;
var fs_1 = require("fs");
function writeSourcePreferences(sources, destinationFolder) {
    if (destinationFolder === void 0) { destinationFolder = ''; }
    var data = {
        sources: sources
    };
    var destination = destinationFolder === '' ? 'preferredSources.json' : destinationFolder + "/preferredSources.json";
    fs_1.writeFileSync(destination, JSON.stringify(data));
}
exports.writeSourcePreferences = writeSourcePreferences;
function recordArguments(spell, challengeRating, terrains, sources, destinationFolder) {
    if (destinationFolder === void 0) { destinationFolder = ''; }
    var data = {
        spell: spell,
        challengeRating: challengeRating,
        terrains: terrains,
        sources: sources
    };
    var destination = destinationFolder ? destinationFolder + "/lastArguments.json" : 'lastArguments.json';
    fs_1.writeFileSync(destination, JSON.stringify(data));
}
exports.recordArguments = recordArguments;
