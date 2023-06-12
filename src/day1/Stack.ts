type Node<T> = {
    value: T, 
    next?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    
    constructor() {
        this.length = 0;
        this.head = undefined; 
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        node.next = this.head;
        this.head = node;
        
        return;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const poppedNode = this.head;
        this.head = poppedNode.next;
        this.length--;

        return poppedNode.value;
        
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
