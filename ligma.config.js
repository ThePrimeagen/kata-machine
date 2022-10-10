const DFAS = require("./utils");
require("dotenv").config();

const selectedSuite = [DFAS.ArrayList];
const multiSuite = [
    "DFSOnBST",
    "LRU",
    "LinearSearchList",
    "BinarySearchList",
    "TwoCrystalBalls",
    "BubbleSort",
    "SinglyLinkedList",
    "DoublyLinkedList",
    "Queue",
    "Stack",
    "ArrayList",
    "MazeSolver",
    "QuickSort",
    "BTPreOrder",
    "BTInOrder",
    "BTPostOrder",
    "BTBFS",
    "CompareBinaryTrees",
    "DFSOnBST",
    "DFSGraphList",
    "Trie",
    "BFSGraphMatrix",
    "Map",
    "MinHeap",
];
const lookupMap = {
    SINGLE: selectedSuite,
    MULTI: multiSuite,
    DEFAULT: multiSuite,
};
const lookup = (mode, defaultChoice) => {
    const defaultChosen =
        defaultChoice !== null
            ? lookupMap[defaultChoice] || lookupMap["DEFAULT"]
            : lookupMap["DEFAULT"];
    return lookupMap[mode] || defaultChosen;
};
module.exports = {
    dsa: lookup(process.env.MODE, "MULTI"),
};
