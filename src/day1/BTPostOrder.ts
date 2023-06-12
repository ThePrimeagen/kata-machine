type BinaryNode<T> = {
    value: T,
    left: BinaryNode<T>|null,
    right: BinaryNode<T>|null,
}

function walk(currNode: BinaryNode<number>|null, path: number[]) {
    if (!currNode || !currNode.value) {
        return;
    }

    walk(currNode.left, path);
    walk(currNode.right, path);
    path.push(currNode.value);

    return;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const path = [] as number[];
    walk(head, path);

    return path;
}
