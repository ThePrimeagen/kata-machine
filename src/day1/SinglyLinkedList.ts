type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const newNode = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;

        return;
    }
    insertAt(item: T, idx: number): void {

    }
    append(item: T): void {
        this.length++;
        const newNode = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return;
    }
    remove(item: T): T | undefined {
        if (!this.length) {
            return;
        }

        let currNode = this.head as Node<T>;
        let prevNode;

        do {
            if (currNode.value === item) {
                if (this.length === 1) {
                    this.head = this.tail = undefined;
                    this.length--;

                    return currNode.value;
                }

                if (!prevNode) {
                    this.head = currNode.next;
                } else {
                    prevNode.next = currNode.next;
                    if (!currNode.next) {
                        this.tail = prevNode;
                    }
                } 

                this.length--;

                return currNode.value;
            }

            prevNode = currNode;
            currNode = currNode.next as Node<T>;
        } while (currNode);

        return;
    }

    get(idx: number): T | undefined {
        if (!this.length || idx < 0 || idx > this.length - 1) {
            return;
        }
        
        let currNode = this.head as Node<T>;
        for (let i = 0; i <= idx; i++) {
            if (i === idx) {
                return currNode.value;
             }
             currNode = currNode.next as Node<T>;
        } 

        return;
    }
    removeAt(idx: number): T | undefined {
        if (!this.length || idx < 0 || idx > this.length - 1) {
            return;
        }
        
        let currNode = this.head as Node<T>;
        let prevNode;
        for (let i = 0; i <= idx; i++) {
            if (i === idx) {
                if (this.length === 1) {
                    this.head = this.tail = undefined;
                    this.length--;

                    return currNode.value;
                }

                if (!prevNode) {
                    this.head = currNode.next;
                } else {
                    prevNode.next = currNode.next;
                    if (!prevNode.next) {
                        this.tail = prevNode;
                    }
                }

                this.length--;

                return currNode.value;
            }

            prevNode = currNode;
            currNode = currNode.next as Node<T>;
        }

        return;
    }
}
