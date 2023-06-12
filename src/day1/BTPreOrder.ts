type BinaryNode<T> = {
    value: T,
    left: BinaryNode<T>|null,
    right: BinaryNode<T>|null,
}

function walk(currNode: BinaryNode<number>|null, path: number[]) {
    if (!currNode || !currNode.value) {
        return;
    }

    path.push(currNode.value);
    walk(currNode.left, path);
    walk(currNode.right, path);

    return;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path = [] as number[];
    walk(head, path);

    return path;
}
