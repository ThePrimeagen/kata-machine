#! /usr/bin/env node

import fs from "fs";
import inquirer from "inquirer";
import { exec, spawn } from "child_process";
import ora from "ora";
import degit from "degit";

const INSTALL_DIR = "kata";

const check_first_time = () => {
    // return false if cwd is kata
    if (process.cwd().split("/").slice(-1)[0] === INSTALL_DIR) {
        return false;
    }
    return !fs.existsSync(`./${INSTALL_DIR}`);
};

let is_first_time = check_first_time();

if (is_first_time) {
    const emitter = degit("ThePrimeagen/kata-machine");
    emitter.clone(INSTALL_DIR);
    // The user doesn't need the CLI dir
    try {
        fs.rmdirSync(`./${INSTALL_DIR}/cli`);
    } catch (_err) {}
}

inquirer
    .prompt([
        {
            type: "checkbox",
            message: "What are we working on today?",
            name: "dsa",
            choices: [
                new inquirer.Separator(" = Data Structures = "),
                {
                    name: "DoublyLinkedList",
                },
                {
                    name: "Queue",
                },
                {
                    name: "Stack",
                },
                {
                    name: "ArrayList",
                },
                {
                    name: "Trie",
                },
                {
                    name: "Map",
                },
                {
                    name: "MinHeap",
                },
                new inquirer.Separator(" = Algorithms = "),
                {
                    name: "DFSOnBST",
                },
                {
                    name: "LRU",
                },
                {
                    name: "LinearSearchList",
                },
                {
                    name: "BinarySearchList",
                },
                {
                    name: "TwoCrystalBalls",
                },
                {
                    name: "BubbleSort",
                },
                {
                    name: "MazeSolver",
                },
                {
                    name: "QuickSort",
                },
                {
                    name: "BTPreOrder",
                },
                {
                    name: "BTInOrder",
                },
                {
                    name: "BTPostOrder",
                },
                {
                    name: "BTBFS",
                },
                {
                    name: "CompareBinaryTrees",
                },
                {
                    name: "DFSOnBST",
                },
                {
                    name: "DFSGraphList",
                },
                {
                    name: "BFSGraphMatrix",
                },
            ],
            validate(answer) {
                if (answer.length < 1) {
                    return "You must choose at least one dsa.";
                }

                return true;
            },
        },
    ])
    .then((answers) => {
        const spinner = ora();

        if (is_first_time) {
            process.chdir(`./${INSTALL_DIR}`);

            const npm_install_process = spawn("npm", ["i"]);
            npm_install_process.on("spawn", () => {
                spinner.text = "Installing npm modules";
                spinner.start();
            });
            npm_install_process.on("exit", () => {
                spinner.succeed();
                console.log("All done. Good luck!");
                console.log(`Now run cd ${INSTALL_DIR}`);
            });
        }

        fs.writeFile(
            "./ligma.config.json",
            JSON.stringify(answers, null, 2),
            "utf8",
            (err) => {
                if (err) {
                    console.error(err.message);
                    return;
                }
            },
        );

        exec("./scripts/generate", (err) => {
            if (err) {
                console.error(err.message);
                return;
            }
        });

        console.clear();
        console.log("");
    });
