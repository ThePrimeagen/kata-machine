type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?:Node<T>
}


export default class DoublyLinkedList<T> {

    public length: number;
    private head?: Node<T>
    private tail?: Node<T>


    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined
    }

    prepend(item: T): void {
    const node = {value: item } as Node<T>
    if (!this.length) {
        this.head = this.tail = node;
        this.length++
    } else {
        (this.head) ? this.head.prev = node : undefined;
        node.next = this.head;
        this.head = node;
        this.length++
        return
    }
}
    insertAt(item: T, idx: number): void {

        if (idx > this.length) {
            throw new Error('not valid');

        } else if (idx === this.length) {
            this.append(item);
            return
        } else if (idx === 0) {
            this.prepend(item);
            return
        }
          this.length++
        let curr = this.head;

        for (let i = 0; curr && i < idx; i++){
            curr = curr.next
        }
        curr = curr as Node<T>;
        const node = {value: item} as Node<T>
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node

        if (curr.prev) {
            curr.prev.next = curr
        }
}
    append(item: T): void {

      this.length++;
        const node = {value: item} as Node<T>
        if (!this.tail) {
            this.head = this.tail = node;
            return
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node

}
    remove(item: T): T | undefined {

        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++){
            if (curr.value === item) {
                break;
            }
            curr = curr.next
        }
        if (!curr) {
            return
        }

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return
        }

        const previousNode = curr.prev;
        const nextNode = curr.next;
        const node: Node<T> = { value: previousNode?.value as T, prev: previousNode?.prev, next: nextNode }
        this.head = node;
        this.length--;



}
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value

}
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;

        }

    }

    private getAt(idx: number) {

    }
}