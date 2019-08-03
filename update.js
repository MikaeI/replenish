const fs = require('fs');
let state = JSON.parse(fs.readFileSync('state.json'));
state.updated = Date.now();
fs.writeFile("state.json", JSON.stringify(state), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
});
