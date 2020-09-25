"use strict";
exports.__esModule = true;
exports.conjureMinorElementals = exports.conjureWoodlandBeings = exports.conjureAnimals = void 0;
var randomCreatures_1 = require("./randomCreatures");
function conjureAnimals(_a) {
    var challengeRating = _a.challengeRating, terrains = _a.terrains, sources = _a.sources;
    if (challengeRating > 2 || challengeRating < 0) {
        throw new Error('The challengeRating passed to conjureAnimals must be in the range [0, 2]');
    }
    var count = 1;
    if (challengeRating <= 0.25) {
        count = 8;
    }
    else if (challengeRating <= 0.5) {
        count = 4;
    }
    else if (challengeRating <= 1) {
        count = 2;
    }
    else {
        count = 1;
    }
    return randomCreatures_1.randomCreatures({
        challengeRatingMin: challengeRating,
        challengeRatingMax: challengeRating,
        terrains: terrains,
        types: ['Beast'],
        count: count,
        sources: sources
    });
}
exports.conjureAnimals = conjureAnimals;
function conjureWoodlandBeings(_a) {
    var challengeRating = _a.challengeRating, terrains = _a.terrains, sources = _a.sources;
    if (challengeRating > 2 || challengeRating < 0) {
        throw new Error('The challengeRating passed to conjureWoodlandBeings must be in the range [0, 2]');
    }
    var count = 1;
    if (challengeRating <= 0.25) {
        count = 8;
    }
    else if (challengeRating <= 0.5) {
        count = 4;
    }
    else if (challengeRating <= 1) {
        count = 2;
    }
    else {
        count = 1;
    }
    return randomCreatures_1.randomCreatures({
        challengeRatingMin: challengeRating,
        challengeRatingMax: challengeRating,
        terrains: terrains,
        types: ['Fey'],
        count: count,
        sources: sources
    });
}
exports.conjureWoodlandBeings = conjureWoodlandBeings;
function conjureMinorElementals(_a) {
    var challengeRating = _a.challengeRating, terrains = _a.terrains, sources = _a.sources;
    if (challengeRating > 2 || challengeRating < 0) {
        throw new Error('The challengeRating passed to conjureMinorElementals must be in the range [0, 2]');
    }
    var count = 1;
    if (challengeRating <= 0.25) {
        count = 8;
    }
    else if (challengeRating <= 0.5) {
        count = 4;
    }
    else if (challengeRating <= 1) {
        count = 2;
    }
    else {
        count = 1;
    }
    return randomCreatures_1.randomCreatures({
        challengeRatingMin: challengeRating,
        challengeRatingMax: challengeRating,
        terrains: terrains,
        types: ['Elemental'],
        count: count,
        sources: sources
    });
}
exports.conjureMinorElementals = conjureMinorElementals;
