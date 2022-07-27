const length_property = {
    getters: [{
        name: "length",
        return: "number",
        prop_name: "_length",
    }],
    properties: [{
        name: "_length",
        type: "number",
        scope: "private",
    }]
};
const list_interface = {
    methods: [{
        name: "prepend",
        args: "item: T",
        return: "void",
    }, {
        name: "insertAt",
        args: "item: T, idx: number",
        return: "void",
    }, {
        name: "append",
        args: "item: T",
        return: "void",
    }, {
        name: "remove",
        args: "item: T",
        return: "T | undefined",
    }, {
        name: "get",
        args: "idx: number",
        return: "T | undefined",
    }, {
        name: "removeAt",
        args: "idx: number",
        return: "T | undefined",
    }],
    ...length_property,
};

module.exports = {
    Map: {
        generic: "<T extends (string | number), V>",
        type: "class",
        methods: [{
            name: "get",
            args: "key: T",
            return: "V | undefined",
        }, {
            name: "set",
            args: "key: T, value: V",
            return: "void",
        }, {
            name: "delete",
            args: "key: T",
            return: "V | undefined",
        }, {
            name: "size",
            return: "number",
        }],
    },

    RingBuffer: {
        generic: "<T>",
        type: "class",
        methods: [{
            name: "push",
            args: "item: T",
            return: "void",
        }, {
            name: "get",
            args: "idx: number",
            return: "T | undefined",
        }, {
            name: "pop",
            return: "T | undefined",
        }],
        getters: [{
            name: "length",
            return: "number",
            prop_name: "_length",
        }],
        properties: [{
            name: "_length",
            type: "number",
            scope: "private",
        }]
    },

    ArrayList: {
        type: "class",
        generic: "<T>",
        ...list_interface,
    },
    SinglyLinkedList: {
        generic: "<T>",
        type: "class",
        ...list_interface,
    },
    DoublyLinkedList: {
        generic: "<T>",
        type: "class",
        ...list_interface,
    },
    Queue: {
        generic: "<T>",
        type: "class",
        ...length_property,
        methods: [{
            name: "enqueue",
            args: "item: T",
            return: "void",
        }, {
            name: "deque",
            args: "",
            return: "T | undefined",
        }, {
            name: "peek",
            args: "",
            return: "T | undefined",
        }]
    },
    Stack: {
        generic: "<T>",
        type: "class",
        ...length_property,
        methods: [{
            name: "push",
            args: "item: T",
            return: "void",
        }, {
            name: "pop",
            args: "",
            return: "T | undefined",
        }, {
            name: "peek",
            args: "",
            return: "T | undefined",
        }]
    },

    Trie: {
        type: "class",
        methods: [{
            name: "insert",
            args: "item: string",
            return: "void",
        }, {
            name: "delete",
            args: "item: string",
            return: "void",
        }, {
            name: "find",
            args: "partial: string",
            return: "string[]",
        }]
    },

    BubbleSort: {
        type: "fn",
        fn: "bubble_sort",
        args: "arr: number[]",
        "return": "void",
    },

    InsertionSort: {
        type: "fn",
        fn: "insertion_sort",
        args: "arr: number[]",
        "return": "void",
    },

    MergeSort: {
        type: "fn",
        fn: "merge_sort",
        args: "arr: number[]",
        "return": "void",
    },

    QuickSort: {
        type: "fn",
        fn: "quick_sort",
        args: "arr: number[]",
        "return": "void",
    },

    DijkstraList: {
        type: "fn",
        fn: "dijkstra_list",
        args: "source: number, sink: number, arr: WeightedAdjacencyList",
        "return": "number[]",
    },

    PrimsList: {
        type: "fn",
        fn: "prims",
        args: "list: WeightedAdjacencyList",
        return: "WeightedAdjacencyList | null",
    },

    BinarySearchList: {
        type: "fn",
        fn: "bs_list",
        args: "haystack: number[], needle: number",
        return: "boolean",
    },

    LinearSearchList: {
        type: "fn",
        fn: "linear_search",
        args: "haystack: number[], needle: number",
        return: "boolean",
    },

    TwoCrystalBalls: {
        type: "fn",
        fn: "two_crystal_balls",
        args: "breaks: boolean[]",
        return: "number",
    },

    MazeSolver: {
        type: "fn",
        fn: "solve",
        args: "maze: string[], wall: string, path: string, start: Point, end: Point",
        return: "Point[]",
    },

    BTPreOrder: {
        type: "fn",
        fn: "pre_order_search",
        args: "head: BinaryNode<number>",
        return: "number[]",
    },

    BTInOrder: {
        type: "fn",
        fn: "in_order_search",
        args: "head: BinaryNode<number>",
        return: "number[]",
    },

    BTPostOrder: {
        type: "fn",
        fn: "post_order_search",
        args: "head: BinaryNode<number>",
        return: "number[]",
    },

    BTBFS: {
        type: "fn",
        fn: "bfs",
        args: "head: BinaryNode<number>, needle: number",
        return: "boolean",
    },

    CompareBinaryTrees: {
        type: "fn",
        fn: "compare",
        args: "a: BinaryNode<number> | null, b: BinaryNode<number> | null",
        return: "boolean",
    },

    DFSOnBST: {
        type: "fn",
        fn: "search",
        args: "head: BinaryNode<number>, needle: number",
        return: "boolean",
    },

    DFSGraphList: {
        type: "fn",
        fn: "dfs",
        args: "graph: WeightedAdjacencyList, source: number, needle: number",
        return: "number[] | null",
    },

    BFSGraphList: {
        type: "fn",
        fn: "bfs",
        args: "graph: WeightedAdjacencyList, source: number, needle: number",
        return: "number[] | null",
    },

    BFSGraphMatrix: {
        type: "fn",
        fn: "bfs",
        args: "graph: WeightedAdjacencyMatrix, source: number, needle: number",
        return: "number[] | null",
    },
};

