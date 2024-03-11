export default class MinHeap {
    public length: number;
    private arr: number[];

    constructor() {
        this.length = 0;
        this.arr = [];
    }

    insert(value: number): void {
        this.arr[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0){
            return -1;
        }
        this.length--;
        const head = this.arr[0];
        this.arr[0] = this.arr[this.length];
        this.heapifyDown(0);
        return head;
    }


    private heapifyUp(idx: number): void{
        if (idx === 0){
            return;
        }
        const parentIdx = this.getParent(idx);
        const parentVal = this.arr[parentIdx];
        if (parentVal > this.arr[idx]){
            this.arr[parentIdx] = this.arr[idx];
            this.arr[idx] = parentVal;
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void{
        if (idx === this.length){
            return;
        }
        const leftIdx = this.getLeft(idx);
        if (leftIdx > this.length){
            return;
        }
        const leftVal = this.arr[leftIdx];
        const rightIdx = this.getRight(idx);
        const rightVal = this.arr[rightIdx];
        if (leftVal > rightVal && rightVal < this.arr[idx]){
            this.arr[rightIdx] = this.arr[idx];
            this.arr[idx] = rightVal;
            this.heapifyDown(rightIdx);
        }
        else if (leftVal <  this.arr[idx]){
            this.arr[leftIdx] = this.arr[idx];
            this.arr[idx] = leftVal;
            this.heapifyDown(leftIdx);
        }
    }

    private getParent(idx: number){
        return Math.floor((idx - 1)/2);
    }

    private getLeft(idx: number){
        return idx * 2 + 1;
    }

    private getRight(idx: number){
        return idx * 2 + 2;
    }
}
