export default class MinHeap {
    public length: number;
    private data: number[];
    

    constructor() {
        this.data = []
        this.length = 0
    }
    

    insert(value: number): void {
        this.data[this.length] = value
        this.heapifyUp(this.length)
        this.length++
    }

    delete(): number {
        if(this.length === 0){
            return -1
        }
        
        const out = this.data[0]
        this.length--
        if(this.length === 0 ){
            this.data = []
            return out
        }

        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        return out
    }

    private heapifyDown (idx: number): void{
        const leftIndex = this.leftChild(idx)
        const rightIndex = this.rightChild(idx)
        
        if(idx >= this.length || leftIndex >= this.length){
            return
        }

        const leftValue = this.data[leftIndex]
        const rightValue = this.data[rightIndex]
        const value = this.data[idx]
        
        if(leftValue > rightValue && value > rightValue){
            this.data[idx] = rightValue
            this.data[rightIndex] = value
            this.heapifyDown(rightIndex)

        } else if(rightValue > leftValue && value > leftValue){
            this.data[idx] = leftValue
            this.data[leftIndex] = value
            this.heapifyDown(leftIndex)

        }


    }

    private heapifyUp(idx: number): void {
        if (idx === 0){
            return
        }

        const parent = this.parent(idx)
        const parentValue = this.data[parent]
        const value = this.data[idx]

        if(parentValue > value){
            this.data[idx] = parentValue
            this.data[parent] = value
            this.heapifyUp(parent)
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1 )/ 2)
    }

    private leftChild(idx: number): number{
        return idx * 2 + 1 
    }
    private rightChild(idx: number): number{
        return idx * 2 + 2 
    }
}