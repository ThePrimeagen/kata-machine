type QNode<T> = {
    value: T,
    next?: QNode<T>
}
export default class Stack<T> {

    public length: number;
    private head?: QNode<T>
    private tail?: QNode<T>



    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    push(item: T): void {
        let node: QNode<T> = { value: item }
        this.length++
        if (!this.head) {
            this.head = this.tail = node;
            this.length = 1
            return
        }
        let oldHead = this.head
        node.next = oldHead;
        this.head = node;
}
    pop(): T | undefined {
        this.length--
        if (!this.head) {
            this.head = this.tail = undefined
 return
        }
        let value = this.head.value
        this.head = this.head.next
        return value

}
    peek(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let value = this.head.value;
        return value
}
}