const {
    LinearSearchList,
    BinarySearchList,
    SinglyLinkedList,
    Stack,
} = require("./utils");
require("dotenv").config();

const selectedSuite = [
    LinearSearchList,
    BinarySearchList,
    SinglyLinkedList,
    Stack,
];
const multiSuite = [
    "SinglyLinkedList",
    "LinearSearchList",
    "BinarySearchList",
    "Stack",
    "DFSOnBST",
    "LRU",
    "TwoCrystalBalls",
    "BubbleSort",
    "DoublyLinkedList",
    "Queue",
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
