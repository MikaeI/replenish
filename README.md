# replenish

> Development utility to trigger reload of a web page in a browser.

## Requirements

- Node.js

## Install

`npm install --save-dev replenish`

## Usage

In a CLI, use the `replenish` command any time you want to perform a reload.

Example of client side setup (1s polling interval):

```
let timestamp = Date.now();
let request = new XMLHttpRequest();
request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        if (JSON.parse(this.response).updated > timestamp) {
            location.reload();
        }
    }
};
setInterval(() => {
    request.open("GET", "state.json", true);
    request.send();
}, 1000);
```

## License

MIT © [Mikael Åsbjørnsson-Stensland](http://persille.no/)
