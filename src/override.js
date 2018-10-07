
let override = {};

try {
    override = require("./override.json");
} catch(e) {
    console.log("Unable to read overriden configuration, use original one");
}

export {override};


