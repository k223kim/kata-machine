export default class MinHeap {
    public length: number;
    private arr: number[];

    constructor() {
        this.length = 0;
        this.arr = [];
    }

    insert(value: number): void {
        // add to the last
        this.arr.push(value);
        this.length++;
        // bubbleup (heapifyUp)
        this.heapifyUp(this.length-1);
    }
    delete(): number {
        // remove the head
        const head = this.arr[0];
        // add the last element to the heap
        const last = this.arr[this.length-1];
        this.length--;
        this.arr[0] = last;
        // heapifyDown
        this.heapifyDown(0);
        return head
    }

    heapifyUp(idx: number): void{
        if (idx === 0){
            return;
        }
        const curr = this.arr[idx];
        const parentIdx = this.getParent(idx);
        const parent = this.arr[parentIdx];
        if (curr < parent){
            this.arr[idx] = parent;
            this.arr[parentIdx] = curr;
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void{
        if (idx >= this.length){
            return;
        }
        const leftIdx = this.getLeftChild(idx);
        if (leftIdx >= this.length){
            // no children
            return;
        }
        const leftVal = this.arr[leftIdx];
        const rightIdx = this.getRightChild(idx);
        const rightVal = this.arr[rightIdx];
        const curr = this.arr[idx];
        if (leftVal > rightVal && rightVal < curr){
            // swap curr and rightval
            this.arr[rightIdx] = curr;
            this.arr[idx] = rightVal;
            this.heapifyDown(rightIdx);
        }
        else if (leftVal <= rightVal && leftVal < curr){
            this.arr[leftIdx] = curr;
            this.arr[idx] = leftVal;
            this.heapifyDown(leftIdx);
        }
    }

    private getParent(idx: number): number{
        return Math.floor((idx-1) / 2);
    }

    private getLeftChild(idx: number): number{

        return idx * 2 + 1;
    }

    private getRightChild(idx: number): number{
        return idx * 2 + 2;
    }
}
