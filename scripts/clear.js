const fs = require("fs");
const path = require("path");

const src_path = path.join(__dirname, "..", "src");

try {
    fs.readdirSync(src_path).
        filter(f => {
            if (f.includes("day")) {
                console.log("found", f);
                return true;
            }
            console.log("ignoring", f);
            return false;
        }).
        forEach(f => {
            const file = path.join(src_path, f);
            console.log("deleting", file);
            fs.rmSync(file, {
                recursive: true,
                force: true,
            });
        });
} catch (e) { console.log(e); }



