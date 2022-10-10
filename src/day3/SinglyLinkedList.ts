type WithNull<T> = T | null;
type WithUndef<T> = T | undefined;

export default class SinglyLinkedList<T> {
    public length: number = 0;
    public head: WithUndef<ListNode<T>> = undefined;
    public tail: WithUndef<ListNode<T>> = undefined;

    constructor(head: WithUndef<ListNode<T>> = undefined) {
        if (head) {
            this.length++;
            this.head = head;
            this.tail = head;
        }
    }

    prepend(item: T): void {
        // make node of item
        // attach the current head to the butt of item
        // register the new head.
        // update count.
        //edge cases
        // if there no item in the ll
        // use append.
        // if theres on ly one in the ll
        // should still work.

        if (this.length === 0) {
            return this.append(item);
        }
        const node = new ListNode<T>(item);

        node.next = this.head;
        this.head = node;
        this.length++;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const nodeItem = new ListNode(item);
        this.length = this.length + 1;
        if (this.tail) {
            this.tail.next = nodeItem;
            this.tail = this.tail.next;
        } else {
            this.head = nodeItem;
            this.tail = this.head;
        }
    }
    remove(item: T): WithUndef<T> {
        let head = this.head;
        //  [Node, Node, Node]
        //h  ^
        //t               ^
        let prevNode = head;
        let isUseLogicLoop = this.length === 1;
        let idx = 0;
        while (head && isUseLogicLoop) {
            if (head.value === item) {
                const num = this.removeAt(idx);
                // reevalutea head and tail nodes.
                return num;
            }
            prevNode = head;
            head = head?.next;
            idx++;
        }
        if (!isUseLogicLoop && head && head.value === item) {
            return this.removeAt(0);
        }
        return;
    }
    getVals(): Array<T> {
        let mem = this.head;
        const vals = [];
        while (mem) {
            vals.push(mem.value);
            mem = mem.next;
        }
        return vals;
    }
    get(idx: number): WithUndef<T> {
        let counter = 0;
        let mem = this.head;
        while (mem) {
            if (idx === counter) {
                return mem?.value;
            }
            mem = mem.next;
            counter++;
        }
        return;
    }
    removeAt(idx: number): T | undefined {
        let head = this.head;
        let counter = 0;
        let prev = null;
        let isEmpty = this.length === 0;
        let isWithinIterableBounds = idx >= 0 && idx < this.length;

        if (isEmpty || !isWithinIterableBounds) {
            return;
        }
        if (idx === 0 && this.length === 1) {
            this.head = undefined;
            this.tail = undefined;
            this.length = this.length - 1;

            return head?.value;
        }
        while (isWithinIterableBounds && head) {
            // if 0
            if (idx === 0 && idx === counter) {
                this.head = this.head?.next;
                minus.call(this);
                return head.value;
            }
            if (prev && idx === counter) {
                prev.next = head.next;
                minus.call(this);
                return head.value;
            }
            if (prev && idx === this.length - 1 && counter === idx) {
                prev.next = head.next;
                this.tail = head.next;
                minus.call(this);
                return head.value;
            }
            // store prev
            prev = head;
            //iterate
            head = head.next;
            counter++;
        }
        function minus() {
            this.length = this.length - 1;
        }
        return;
    }
}
class ListNode<T> {
    public value: T;
    public next: ListNode<T> | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}

/*
loop throuth

while (ListNode.next !== null)
*/
type LogOptions = {
    silence: boolean;
};
type TArgs = Array<any | LogOptions>;
function log() {
    const options = Array.prototype.slice.call(arguments, -1) as LogOptions;
    let silence = false;
    if (Object.prototype.toString.call(options) === "[Object object]") {
        silence = options.silence;
    }
    if (silence === false) {
        console.log.prototype.apply(null, arguments);
    }
}
