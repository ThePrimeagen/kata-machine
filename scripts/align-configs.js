const fs = require("fs");
const path = require("path");

module.exports.ts_config = function(set_to) {
    const ts_config = require("../tsconfig.json");
    ts_config.compilerOptions.paths["@code/*"] = [`${set_to}/*`];

    fs.writeFileSync(
        path.join(__dirname, "..", "tsconfig.json"),
        JSON.stringify(ts_config, null, 4));
}

module.exports.jest = function(set_to) {
    const jest = require("../.jest.config.json");
    jest.moduleNameMapper["@code/(.*)"] = [`<rootDir>/src/${set_to}/$1`];

    fs.writeFileSync(
        path.join(__dirname, "..", ".jest.config.json"),
        JSON.stringify(jest, null, 4));
}

