
module.exports = {
    ArrayList: {
        type: "class",
        methods: [{
            name: "add",
            args: "item: T",
            return: "void",
        }, {
            name: "remove",
            args: "item: T",
            return: "T | undefined",
        }, {
            name: "removeAt",
            args: "idx: number",
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
    SinglyLinkedList: {
        type: "class",
    },
    DoublyLinkedList: {
        type: "class",
    },
    Queue: {
        type: "class",
    },
    Stack: {
        type: "class",
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
        "return": ": WeightedAdjacencyList | null",
    },
};

