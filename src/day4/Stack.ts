type Wrapper<N> = N | undefined;

export default class Stack<T> {
    public length: number;
    private head: Wrapper<ListNode<T>> = undefined;
    private tail: Wrapper<ListNode<T>> = undefined;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const listNode = new ListNode<T>(item);
        if (!this.length) {
            this!.head = listNode;
            this!.tail = listNode;
            this.length++;
            return;
        }
        listNode.next = this.head;
        this.head = listNode;
        this.length++;
    }
    pop(): T | undefined {
        // you can think of it in terms of state.
        // int erms of filled values
        // or in terms of actions
        // i go down. state
        // length is 0.
        // i go down length is not zero.
        // i store head, then attach head to bottom of old top
        if (this.length === 0) {
            return;
        }
        if (this.length === 1) {
            this.length--;
            const stored = this.head!.val;
            this.head = this.tail = undefined;
            return stored;
        }
        const scope = this.head;
        let scopeNext = this.head!.next;
        if (scope) {
            this.head = scope.next;
            this.length--;
            return scope!.val;
        }
        return;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}

class ListNode<T> {
    val: T;
    next: Wrapper<ListNode<T>> = undefined;
    constructor(val: T) {
        this.val = val;
    }
}
