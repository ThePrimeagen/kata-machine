type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    
    constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
    }

    enqueue(item: T): void { // pushin to the queue
        const node = {value: item} as Node<T>;

        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;    
            return;
        }
        
        this.tail.next = node;
        this.tail = node;

    }
    deque(): T | undefined { // popping from the queue
        if (!this.head){
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;
        
        // se tivessemos em C aqui estariamos usando um Free()
        head.next = undefined;
        
        if (this.length === 0){
            this.tail = undefined;
        }
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value; // seeing in queue
    }
}