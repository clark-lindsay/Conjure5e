"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var creatures_1 = require("./creatures");
var util_1 = require("../src/util");
function randomCreatures(_a) {
    var challengeRatingMin = _a.challengeRatingMin, challengeRatingMax = _a.challengeRatingMax, types = _a.types, count = _a.count, terrains = _a.terrains, sources = _a.sources;
    var creatures = Object.values(creatures_1.creatures).reduce(function (accumulator, subList) { return __spreadArrays(accumulator, subList); }, []);
    creatures = filterBySource(sources, creatures);
    creatures = filterByChallengeRating(challengeRatingMin, challengeRatingMax, creatures);
    creatures = filterByType(types, creatures);
    creatures = filterByTerrain(terrains, creatures);
    if (!creatures.length) {
        return [];
    }
    if (count === null || count === undefined) {
        return [creatures[util_1.randomInt(0, creatures.length)]];
    }
    var result = [];
    for (var _i = 0, _b = util_1.range(0, count); _i < _b.length; _i++) {
        var _ = _b[_i];
        result.push(creatures[util_1.randomInt(0, creatures.length)]);
    }
    return result;
}
exports.randomCreatures = randomCreatures;
function filterBySource(sources, creatures) {
    var result = creatures;
    if (sources) {
        result = result.filter(function (creature) { var _a; return (_a = sources) === null || _a === void 0 ? void 0 : _a.includes(creature.source); });
    }
    return result;
}
function filterByChallengeRating(challengeRatingMin, challengeRatingMax, creatures) {
    var result = creatures;
    if (!isNullOrUndefined(challengeRatingMin)) {
        if (challengeRatingMin === undefined) {
            throw new Error("challengeRatingMin is undefined");
        }
        result = result.filter(function (creature) { return creature.challengeRating >= challengeRatingMin; });
    }
    if (!isNullOrUndefined(challengeRatingMax)) {
        if (challengeRatingMax === undefined) {
            throw new Error("challengeRatingMax is undefined");
        }
        result = result.filter(function (creature) { return creature.challengeRating <= challengeRatingMax; });
    }
    return result;
}
function filterByType(types, creatures) {
    var result = creatures;
    if (types) {
        result = result.filter(function (creature) { return types.includes(creature.type); });
    }
    return result;
}
function filterByTerrain(terrains, creatures) {
    if (!terrains) {
        return creatures;
    }
    var result = [];
    var _loop_1 = function (terrain) {
        result = __spreadArrays(result, creatures.filter(function (creature) { return creature.terrains.includes(terrain); }));
    };
    for (var _i = 0, terrains_1 = terrains; _i < terrains_1.length; _i++) {
        var terrain = terrains_1[_i];
        _loop_1(terrain);
    }
    return result;
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
