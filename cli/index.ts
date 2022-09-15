#! /usr/bin/env node

import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { exec, spawn } from "child_process";
import ora, { Ora } from "ora";
import degit from "degit";

const INSTALL_DIR = "kata";
const GENERATE_SCRIPT = path.join("scripts", "generate");

const check_first_time = () => {
    // return false if cwd is kata
    if (process.cwd().split(path.sep).slice(-1)[0] === INSTALL_DIR) {
        return false;
    }
    return !fs.existsSync(INSTALL_DIR);
};

let is_first_time = check_first_time();

const clone_and_npm_install = async (s: Ora) => {
    const emitter = degit("ThePrimeagen/kata-machine");
    await emitter.clone(INSTALL_DIR);

    process.chdir(INSTALL_DIR);

    try {
        fs.rmdirSync("cli");
    } catch (err) {}

    return new Promise((resolve, reject) => {
        const npm_install_process = exec("npm i");
        npm_install_process.on("spawn", () => {
            s.text = "Installing npm modules";
            s.start();
        });
        npm_install_process.on("exit", () => {
            s.succeed();
            resolve(true);
        });
        npm_install_process.on("error", reject);
    });
};

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
    .then(async (answers) => {
        const spinner = ora();

        if (is_first_time) {
            await clone_and_npm_install(spinner);
        }

        fs.writeFile(
            path.join("ligma.config.json"),
            JSON.stringify(answers, null, 2),
            "utf8",
            (err) => {
                if (err) {
                    console.error(err.message);
                    return;
                }
            },
        );

        exec(`node ${GENERATE_SCRIPT}`, (err) => {
            if (err) {
                console.error(err.message);
                return;
            }
            console.clear();
            console.log("All done. Good luck!");
            console.log(`Now run cd ${INSTALL_DIR}`);
        });
    });
