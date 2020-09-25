"use strict";
exports.__esModule = true;
exports.creatures = void 0;
// TODO: add a global parameter somewhere in a configuration file so that I can specify what source books are allowed
var sources_1 = require("./sources");
var BR = sources_1.sources.BR, MM = sources_1.sources.MM, DiT = sources_1.sources.DiT, ERLW = sources_1.sources.ERLW, MtoF = sources_1.sources.MtoF, SKT = sources_1.sources.SKT, TP = sources_1.sources.TP, ToA = sources_1.sources.ToA, ToH = sources_1.sources.ToH, VGtM = sources_1.sources.VGtM, WGtE = sources_1.sources.WGtE;
exports.creatures = {
    beasts: [
        {
            name: 'Frog',
            challengeRating: 0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Sea Horse',
            challengeRating: 0,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Baboon',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Badger',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Bat',
            challengeRating: 0,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Cat',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Crab',
            challengeRating: 0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Deer',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Eagle',
            challengeRating: 0,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Fire Beetle',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Goat',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Hawk',
            challengeRating: 0,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Hyena',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Jackal',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Lizard',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Octopus',
            challengeRating: 0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Owl',
            challengeRating: 0,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Quipper',
            challengeRating: 0,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Rat',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Raven',
            challengeRating: 0,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Scorpion',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Sheep',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: SKT
        },
        {
            name: 'Spider',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Vulture',
            challengeRating: 0,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Weasel',
            challengeRating: 0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Blood Hawk',
            challengeRating: 0.125,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Camel',
            challengeRating: 0.125,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Dolphin',
            challengeRating: 0.125,
            terrains: ['Water'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Flying Snake',
            challengeRating: 0.125,
            terrains: ['Land', 'Air', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Crab',
            challengeRating: 0.125,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Rat',
            challengeRating: 0.125,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Weasel',
            challengeRating: 0.125,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Mastiff',
            challengeRating: 0.125,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Mule',
            challengeRating: 0.125,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Poisonous Snake',
            challengeRating: 0.125,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Pony',
            challengeRating: 0.125,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Stirge',
            challengeRating: 0.125,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Axe Beak',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Boar',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Constrictor Snake',
            challengeRating: 0.25,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Cow',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Draft Horse',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Elk',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Fastieth',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: ERLW
        },
        {
            name: 'Giant Badger',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Bat',
            challengeRating: 0.25,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Centipede',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Frog',
            challengeRating: 0.25,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Lizard',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Owl',
            challengeRating: 0.25,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Poisonous Snake',
            challengeRating: 0.25,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Wolf Spider',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Hadrosaurus',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Ox',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Panther',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Pteranodon',
            challengeRating: 0.25,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Riding Horse',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Stench Kow',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Swarm of Bats',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Swarm of Rats',
            challengeRating: 0.25,
            terrains: ['Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Swarm of Ravens',
            challengeRating: 0.25,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Wolf',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Ape',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Black Bear',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Clawfoot Raptor',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Beast',
            source: WGtE
        },
        {
            name: 'Crocodile',
            challengeRating: 0.5,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Goat',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Sea Horse',
            challengeRating: 0.5,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Wasp',
            challengeRating: 0.5,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Reef Shark',
            challengeRating: 0.5,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Swarm of Insects',
            challengeRating: 0.5,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Swarm of Rot Grubs',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Warhorse',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Brown Bear',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Clawfoot',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: ERLW
        },
        {
            name: 'Dire Wolf',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Eagle',
            challengeRating: 1.0,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Hyena',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Octopus',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Spider',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Toad',
            challengeRating: 1.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Vulture',
            challengeRating: 1.0,
            terrains: ['Land', 'Air'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Ice Spider',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: SKT
        },
        {
            name: 'Lion',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Swarm of Quippers',
            challengeRating: 1.0,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Tiger',
            challengeRating: 1.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Allosaurus',
            challengeRating: 2.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Aurochs',
            challengeRating: 2.0,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Cave Bear',
            challengeRating: 2.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Boar',
            challengeRating: 2.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Ice Spider Queen',
            challengeRating: 2.0,
            terrains: ['Land'],
            type: 'Beast',
            source: SKT
        },
        {
            name: 'Giant White Moray Eel',
            challengeRating: 2.0,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Constrictor Snake',
            challengeRating: 2.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Elk',
            challengeRating: 2.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Hunter Shark',
            challengeRating: 2.0,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Plesiosaurus',
            challengeRating: 2.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Polar Bear',
            challengeRating: 2.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Rhinoceros',
            challengeRating: 2.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Saber-toothed Tiger',
            challengeRating: 2.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Swarm of Poisonous Snakes',
            challengeRating: 2.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Ankylosaurus',
            challengeRating: 3.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Scorpion',
            challengeRating: 3.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Snapping Turtle',
            challengeRating: 3.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: ToA
        },
        {
            name: 'Killer Whale',
            challengeRating: 3.0,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Elephant',
            challengeRating: 3.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Stegosaurus',
            challengeRating: 4.0,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Brontosaurus',
            challengeRating: 5.0,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Giant Crocodile',
            challengeRating: 5.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Shark',
            challengeRating: 5.0,
            terrains: ['Water'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Hulking Crab',
            challengeRating: 5.0,
            terrains: ['Land', 'Water'],
            type: 'Beast',
            source: SKT
        },
        {
            name: 'Swarm of Cranium Rats',
            challengeRating: 5.0,
            terrains: ['Land'],
            type: 'Beast',
            source: VGtM
        },
        {
            name: 'Triceratops',
            challengeRating: 5.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Mammoth',
            challengeRating: 6.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Giant Ape',
            challengeRating: 7.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        },
        {
            name: 'Tyrannosaurus Rex',
            challengeRating: 8.0,
            terrains: ['Land'],
            type: 'Beast',
            source: BR
        }
    ],
    fey: [
        {
            name: 'Boggle',
            challengeRating: 0.125,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Valenar Hawk',
            challengeRating: 0.125,
            terrains: ['Land', 'Air'],
            type: 'Fey',
            source: ERLW
        },
        {
            name: 'Blink Dog',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Fey',
            source: BR
        },
        {
            name: 'Pixie',
            challengeRating: 0.25,
            terrains: ['Land', 'Air'],
            type: 'Fey',
            source: MM
        },
        {
            name: 'Sprite',
            challengeRating: 0.25,
            terrains: ['Land', 'Air'],
            type: 'Fey',
            source: BR
        },
        {
            name: 'Darkling',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Satyr',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Fey',
            source: BR
        },
        {
            name: 'Valenar Hound',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Fey',
            source: ERLW
        },
        {
            name: 'Valenar Steed',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Fey',
            source: ERLW
        },
        {
            name: 'Dryad',
            challengeRating: 1,
            terrains: ['Land'],
            type: 'Fey',
            source: BR
        },
        {
            name: 'Quickling',
            challengeRating: 1,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Darkling Elder',
            challengeRating: 2,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Meanlock',
            challengeRating: 2,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Sea Hag',
            challengeRating: 2,
            terrains: ['Land', 'Water'],
            type: 'Fey',
            source: BR
        },
        {
            name: 'Green Hag',
            challengeRating: 3,
            terrains: ['Land'],
            type: 'Fey',
            source: BR
        },
        {
            name: 'Redcap',
            challengeRating: 3,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Siren',
            challengeRating: 3,
            terrains: ['Land', 'Water'],
            type: 'Fey',
            source: ToH
        },
        {
            name: 'Yeth Hound',
            challengeRating: 4,
            terrains: ['Land', 'Air'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Annis Hag',
            challengeRating: 6,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Dusk Hag',
            challengeRating: 6,
            terrains: ['Land'],
            type: 'Fey',
            source: ERLW
        },
        {
            name: 'Bheur Hag',
            challengeRating: 7,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Korred',
            challengeRating: 7,
            terrains: ['Land'],
            type: 'Fey',
            source: VGtM
        },
        {
            name: 'Autumn Eladrin',
            challengeRating: 10,
            terrains: ['Land'],
            type: 'Fey',
            source: MtoF
        },
        {
            name: 'Spring Eladrin',
            challengeRating: 10,
            terrains: ['Land'],
            type: 'Fey',
            source: MtoF
        },
        {
            name: 'Summer Eladrin',
            challengeRating: 10,
            terrains: ['Land'],
            type: 'Fey',
            source: MtoF
        },
        {
            name: 'Winter Eladrin',
            challengeRating: 10,
            terrains: ['Land'],
            type: 'Fey',
            source: MtoF
        }
    ],
    elementals: [
        {
            name: 'Chwinga',
            challengeRating: 0,
            terrains: ['Land', 'Air', 'Water'],
            type: 'Elemental',
            source: ToA
        },
        {
            name: 'Geonid',
            challengeRating: 0.25,
            terrains: ['Land'],
            type: 'Elemental',
            source: TP
        },
        {
            name: 'Mud Mephit',
            challengeRating: 0.25,
            terrains: ['Land', 'Water', 'Air'],
            type: 'Elemental',
            source: MM
        },
        {
            name: 'Smoke Mephit',
            challengeRating: 0.25,
            terrains: ['Land', 'Air'],
            type: 'Elemental',
            source: MM
        },
        {
            name: 'Steam Mephit',
            challengeRating: 0.25,
            terrains: ['Land', 'Air'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Dust Mephit',
            challengeRating: 0.5,
            terrains: ['Land', 'Air'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Ice Mephit',
            challengeRating: 0.5,
            terrains: ['Land', 'Air'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Magma Mephit',
            challengeRating: 0.5,
            terrains: ['Land', 'Air'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Magmin',
            challengeRating: 0.5,
            terrains: ['Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Fire Snake',
            challengeRating: 1,
            terrains: ['Land'],
            type: 'Elemental',
            source: MM
        },
        {
            name: 'Azer',
            challengeRating: 2,
            terrains: ['Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Four-Armed Gargoyle',
            challengeRating: 2,
            terrains: ['Land', 'Air'],
            type: 'Elemental',
            source: DiT
        },
        {
            name: 'Gargoyle',
            challengeRating: 2,
            terrains: ['Land', 'Air'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Flail Snail',
            challengeRating: 3,
            terrains: ['Land'],
            type: 'Elemental',
            source: VGtM
        },
        {
            name: 'Water Weird',
            challengeRating: 3,
            terrains: ['Water'],
            type: 'Elemental',
            source: MM
        },
        {
            name: 'Air Elemental',
            challengeRating: 5,
            terrains: ['Air'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Earth Elemental',
            challengeRating: 5,
            terrains: ['Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Fire Elemental',
            challengeRating: 5,
            terrains: ['Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Water Elemental',
            challengeRating: 5,
            terrains: ['Land', 'Water'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Salamander',
            challengeRating: 5,
            terrains: ['Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Xorn',
            challengeRating: 5,
            terrains: ['Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Galeb Duhr',
            challengeRating: 6,
            terrains: ['Land'],
            type: 'Elemental',
            source: MM
        },
        {
            name: 'Invisible Stalker',
            challengeRating: 6,
            terrains: ['Air', 'Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Frost Salamander',
            challengeRating: 9,
            terrains: ['Land'],
            type: 'Elemental',
            source: MtoF
        },
        {
            name: 'Giant Four-Armed Gargoyle',
            challengeRating: 10,
            terrains: ['Air', 'Land'],
            type: 'Elemental',
            source: ToA
        },
        {
            name: 'Dao',
            challengeRating: 11,
            terrains: ['Air', 'Land'],
            type: 'Elemental',
            source: MM
        },
        {
            name: 'Djinni',
            challengeRating: 11,
            terrains: ['Air', 'Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Efreeti',
            challengeRating: 11,
            terrains: ['Air', 'Land'],
            type: 'Elemental',
            source: BR
        },
        {
            name: 'Marid',
            challengeRating: 11,
            terrains: ['Air', 'Land', 'Water'],
            type: 'Elemental',
            source: MM
        },
        {
            name: 'Phoenix',
            challengeRating: 16,
            terrains: ['Air', 'Land'],
            type: 'Elemental',
            source: MtoF
        },
        {
            name: 'Leviathan',
            challengeRating: 20,
            terrains: ['Land', 'Water'],
            type: 'Elemental',
            source: MtoF
        },
        {
            name: 'Zaratan',
            challengeRating: 22,
            terrains: ['Land', 'Water'],
            type: 'Elemental',
            source: MtoF
        },
        {
            name: 'Elder Tempest',
            challengeRating: 23,
            terrains: ['Air'],
            type: 'Elemental',
            source: MtoF
        }
    ]
};
