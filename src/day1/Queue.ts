type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
     

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;

        return;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const poppedNode = this.head;
        this.head = this.head.next;
        poppedNode.next = undefined;
        

        if (this.length === 0) {
            this.tail = undefined;
        }
        return poppedNode.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

