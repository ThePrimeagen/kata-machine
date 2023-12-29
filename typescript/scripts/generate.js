const fs = require("fs");
const path = require("path");
const config = require("../ligma.config");
const dsa = require("./dsa");

const src_path = path.join(__dirname, "..", "src");
let day = 1;

try {
    day = +fs.readdirSync(src_path).
        filter(i => i.includes("day")).
        sort((a, b) => {
            return +b.substring(3) - a.substring(3);
        })[0].substring(3) + 1;

    if (isNaN(day)) {
        console.log("day is nan");
        day = 1;
    }
} catch (e) {
    day = 1;
}

const day_name = `day${day}`;
const day_path = path.join(src_path, day_name);
const relative_day_path = path.relative(process.cwd(), day_path);
try { fs.unlinkSync(day_path); } catch (e) { }
try { fs.mkdirSync(day_path); } catch (e) { }

function generate_method(method) {
    return `${method.name}(${method.args || ""}): ${method.return || "void"} {

}`;
}

function generate_property(prop) {
    return `${prop.scope} ${prop.name}: ${prop.type};`
}

function generate_getter(getter) {
    return `get ${getter.name}(): ${getter.return} {
    return this.${getter.prop_name};
}`
}

function create_class(name, item) {
    fs.writeFileSync(path.join(day_path, `${name}.ts`), `export default class ${name}${item.generic || ""} {
    ${(item.properties || []).map(generate_property).join("\n    ")}

    ${(item.getters || []).map(generate_getter).join("\n    ")}

    constructor() {
    }

    ${(item.methods || []).map(generate_method).join("\n    ")}
}`);
}

function create_function(name, item) {
    const g = item.generic ? item.generic : "";
    fs.writeFileSync(path.join(day_path, `${name}.ts`), `export default function ${item.fn}${g}(${item.args}): ${item.return} {

}`);
}

config.dsa.forEach(ds => {
    const item = dsa[ds];
    if (!item) {
        throw new Error(`algorithm ${ds} could not be found`);
    }
    if (item.type === "class") {
        create_class(ds, item);
    } else {
        create_function(ds, item);
    }
});

const align = require("./align-configs");
align.jest(day_name);
align.ts_config(day_name);
align.package_json(config, relative_day_path);
align.stats(config, day_path);

