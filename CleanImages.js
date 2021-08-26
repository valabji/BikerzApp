console.log("hi")
const fs = require('fs')
// deadfile App.js --output report.json --dir ./assets/images
const r = require("./report.json")
const rx = Object.keys(r.unusedAssets)
rx.forEach(x => {
    fs.unlink(x,()=>{})
});