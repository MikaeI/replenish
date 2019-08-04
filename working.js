#!/usr/bin/env node
const fs = require('fs');
let state = JSON.parse(fs.readFileSync('./node_modules/replenish/state.json'));
state.working = true;
fs.writeFile("./node_modules/replenish/state.json", JSON.stringify(state), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
});
