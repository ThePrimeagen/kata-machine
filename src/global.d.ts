declare interface List<T> {
    get length(): number;
    removeAt(index: number): T | undefined;
    remove(item: T): T | undefined;
    get(index: number): T | undefined;
    add(item: T): void;
}

declare type GraphEdge = {to: number, weight: number};
declare type WeightedAdjacencyList = GraphEdge[][];
declare type WeightedAdjacencyMatrix = number[][]; // A number means weight

declare type AdjacencyList = number[][];
declare type AdjacencyMatrix = number[][]; // A 1 means connected

declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T>;
    right: BinaryNode<T>;
}

declare type GeneralNode<T> = {
    value: T;
    children: GeneralNode<T>[]
}
