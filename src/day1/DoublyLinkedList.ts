type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>


}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>
    

    

    constructor() {
        this.length = 0
        this.head = undefined
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>
        
        this.length++
        if(!this.head){
            this.head = this.tail = node
            return
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;

}
    insertAt(item: T, idx: number): void {
        if(idx > this.length){
            throw new Error('Index out of bounds')
        } else if (idx === this.length){
            this.append(item)
            return
        } else if (idx === 0) {
            this.prepend(item)
            return
        }

        this.length++
        let curr = this.head
        //traversing the list until the index
        for(let i = 0; curr && i < idx; ++i){
            curr = curr.next
        }

        curr = curr as Node<T>
        const node = {value: item} as Node<T>
        
        //node next needs to be current that we're inserting at 
        node.next = curr
        node.prev = curr.prev

        //break links to previous node
        curr.prev = node
        if(curr.prev){
            curr.prev.next = curr
        }

}
    append(item: T): void {

        this.length++
        const node = {value:item} as Node<T>
        if(!this.tail){
            this.head = this.tail = node
            return
        }

        node.prev = this.tail
        this.tail.next = node
        this.tail = node
}
    remove(item: T): T | undefined {
        let curr = this.head
        for( let i = 0; curr && i < this.length; ++i){
            if(curr.value === item){
                break;
            }
            curr = curr.next
        }
        //if there is no current, there is no item to remove
        if(!curr){
            return  undefined
        }
        this.length--

        if(this.length = 0){
            const out = this.head?.value
            this.head = this.tail = undefined
            return out
        }
        if(curr.prev){
            curr.prev = curr.next
        }

        if(curr.next){
            curr.next = curr.prev
        }

        //if the item is at the head or the tail, point them to the next/previous items
        if(curr === this.head){
            this.head = curr.next
        }
        if(curr === this.tail){
            this.tail = curr.prev
        }

        curr.prev = curr.next = undefined
        return curr.value

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}