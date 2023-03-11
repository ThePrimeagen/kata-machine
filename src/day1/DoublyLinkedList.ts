type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?:Node<T>
}


export default class DoublyLinkedList<T> {

    public length: number;
    private head?: Node<T>


    constructor() {
        this.length = 0;
        this.head = undefined
    }

    prepend(item: T): void {
    const node = {value: item } as Node<T>
    if (!this.length) {
        this.head = node;
        this.length++
    } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length++
        return
    }
}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}