type Wrapper<N> = N | undefined;

class ListNode<T> {
    value: T;
    next: Wrapper<ListNode<T>> = undefined;
    constructor(value: T) {
        this.value = value;
    }
}
export default class SinglyLinkedList<T> {
    public length: number;
    public head: Wrapper<ListNode<T>> = undefined;
    public tail: Wrapper<ListNode<T>> = undefined;
    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        // loop through where the name of the holder is the position.
        /*
        a b c d e
      ^           prev
        @         scope
          |       scope.next
        */
        // create item
        const listNode = new ListNode<T>(item);
        // situation first if a is the prepend.
        // start off scoping the first item;
        let scope = this.head;
        this.head = listNode; // and we know we change the head always

        // if the first item is match
        if (this.length === 0) {
            this.append(listNode.value);
            return;
        }
        listNode.next = scope;
        this.length++;

        return;
        //
        // move the next pointer into view.
        // peel off scope and stick to b
        // next prope refreshes.
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const listNode = new ListNode<T>(item);
        // create node

        if (this.head === this.tail) {
            if (!this.head) {
                // if empty then head = tail
                this.head = listNode;
            } else {
                this.head.next = listNode;
            }
            this.length++;
            this.tail = listNode;
            return;
        }
        let head: Wrapper<ListNode<T>> = this.head;

        while (head!.next) {
            head = head!.next;
        }

        head!.next = listNode;
        this.tail = listNode;

        this.length++;
    }
    remove(item: T): T | undefined {
        const match = (leaf: ListNode<T>) => item === leaf.value;
        let head = this.head;
        if (this.head === this.tail && !this.head) return;
        if (this.head === this.tail && this.head && item === this.head.value) {
            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return head!.value;
        }
        let prev = undefined;
        while (head) {
            if (item === head.value) {
                if (head === this.tail) {
                    prev!.next = undefined;
                    this.tail = prev;
                } else if (head === this.head) {
                    this.head = head.next;
                } else {
                    prev!.next = head.next;
                }
                this.length--;
                return item;
            }
            prev = head;
            head = head.next;
        }
        return;
    }
    get(idx: number): T | undefined {
        let head = this.head;
        let _idx = 0;
        while (head) {
            if (idx === _idx) {
                return head.value;
            }
            _idx++;
            head = head.next;
        }
        return;
    }
    getListNodeValues() {
        let head = this.head;
        while (head) {
            console.log(head.value);
            head = head.next;
        }
        console.log({ head: this.head, tail: this.tail });

        return;
    }
    removeAt(idx: number): T | undefined {
        let head = this.head;
        if (this.head === this.tail && !this.head) {
            return;
        }
        if (this.length === 1) {
            this.head = this.tail = undefined;
            this.length--;
            return head!.value;
        }
        let _idx = 0;
        let prev = undefined;
        while (head!.next) {
            if (_idx === idx) {
                if (prev === undefined) {
                    this.head = head!.next;
                    this.length--;
                    return head!.value;
                }
                prev!.next = head!.next;
                this.length--;
                return head!.value;
            }

            _idx++;
            prev = head;
            head = head!.next;
        }
        if (_idx === idx) {
            prev!.next = undefined;
            this.tail = prev;
            this.length--;
            return head!.value;
        }
        return;
    }
}
