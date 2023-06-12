type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = newNode;
            this.length++;
            return;
        }

        return this.linkNode(this.head, newNode);
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length - 1) {
            return;
        }
        const newNode = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = newNode;
            this.length++;
            return;
        } 

        if (idx === 0) {
            return this.prepend(item);
        }

        if (idx === this.length - 1) {
            return this.append(item);
        }

        let currentNode = this.getNode(idx);

        return this.linkNode(currentNode, newNode);
    }

    append(item: T): void {
        this.length++;

        const newNode = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = newNode;

            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }
        let currentNode = this.head as Node<T>;

        for (let i = 0; i < this.length; i++) {
            if (i === 0) {
                continue;
            }
            if (currentNode.value === item) {
                break;
            }

            if (i === this.length - 1) {
                return;
            }

            currentNode = currentNode.next as Node<T>;

        }

        return this.unlinkNode(currentNode);
    }

    get(idx: number): T | undefined {
        if (!this.head || idx < 0 || idx > this.length -1) {
            return;
        }

        if (idx === 0) {
            return this.head.value;
        }

        let currentNode = this.getNode(idx);

        return currentNode.value;
    }

    private getNode(idx: number): Node<T> {
        let currentNode = this.head as Node<T>;
        for (let i = 1; i <= idx; i++) {
            currentNode = currentNode.next as Node<T>;
        }
        return currentNode;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length - 1) {
            return;
        }

        if (this.length === 0) {
            return;
        }

        let currentNode = this.head as Node<T>;

        if (idx === 0) {
            return this.unlinkNode(this.head as Node<T>);
        }

        currentNode = this.getNode(idx);

        return this.unlinkNode(currentNode);
    }

    private unlinkNode(node: Node<T>) {
        const out = node.value;
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }  

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }

        this.length--;
        return out;
    }

    private linkNode(node: Node<T>, newNode: Node<T>) {
        newNode.next = node;
        newNode.prev = node.prev;
        if (node.prev) {
            node.prev.next = newNode;
            node.prev = newNode;
        } else {
            node.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return;
    }
}
