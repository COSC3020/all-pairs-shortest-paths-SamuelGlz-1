const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


var graph = { 
    'a' : {'b':2},
    'b' : {'c':6},
    'c' : {'d':4, 'a':1},
    'd' : {'b':2}};

assert(JSON.stringify(allPairsShortestPaths(graph)) === '[]')



graph = {
    'a' : {'b':2},
    'b' : {}
}


graph = {}

assert(JSON.stringify(allPairsShortestPaths(graph)) === JSON.stringify([]))


