type QNode<T> = {
    value: T,
    next?: QNode<T>
}

export default class Queue<T extends any> {
    public length: number;
    private head?: QNode<T>;
    private tail? : QNode<T>

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {

        let node: QNode<T> = { value: item }
        this.length++
        if (!this.tail) {
            this.head = this.tail = node;
            return

        }

        this.tail.next = node;
        this.tail = node;



}
    deque(): T | undefined {

        if (this.length === 0) {
        return undefined
    }
        const value = this.head?.value
        let newHead = this.head?.next
        this.head = newHead;
        this.length--
        return value
}
    peek(): T | undefined {
        if (!this.head) {
            this.head = this.tail
            return this.head?.value
        }
        let value = this.head?.value
        return value;
}
}