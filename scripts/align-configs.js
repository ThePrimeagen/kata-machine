const fs = require("fs");
const path = require("path");

module.exports.stats = function(config, day_path) {
    let stats;
    try {
        stats = require("../stats.json");
    } catch(e) {
        stats = undefined;
    }

    stats = config.dsa.reduce((acc, ds) => {
        if (!acc[ds]) {
            acc[ds] = 0;
        }
        acc[ds]++;
        return acc;
    }, stats || {});

    fs.writeFileSync(
        path.join(__dirname, "..", "stats.json"),
        JSON.stringify(stats, null, 4));
}

module.exports.package_json = function(config, day_path) {
    const package_json = require("../package.json");
    package_json.scripts.test = `jest ${config.dsa.join(" ")}`;
    package_json.scripts.day = `echo ${day_path}`;

    fs.writeFileSync(
        path.join(__dirname, "..", "package.json"),
        JSON.stringify(package_json, null, 4));
}

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

