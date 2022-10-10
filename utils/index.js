const DFAS = [
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
].reduce((chain, dfa) => {
    chain[dfa] = dfa;
    return chain;
}, {});
module.exports = DFAS;
