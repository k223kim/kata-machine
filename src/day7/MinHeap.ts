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
        const head = this.arr[0];
        this.length--;
        if (this.length === 0){
            this.arr = [];
            return head;
        }
        this.arr[0] = this.arr[this.length];
        this.heapifyDown(0);
        return head
    }
    private heapifyUp(idx: number): void{
        if (idx === 0){
            return;
        }
        const p = this.getParent(idx);
        if (this.arr[p] > this.arr[idx]){
            const tmp = this.arr[p];
            this.arr[p] = this.arr[idx];
            this.arr[idx] = tmp;
            this.heapifyUp(p);
        }
    }

    private heapifyDown(idx: number): void{
        if (idx === this.length){
            return;
        }
        const leftIdx = this.getLeft(idx);
        if (leftIdx >= this.length){
            return;
        }
        const leftVal = this.arr[leftIdx];
        const rightIdx = this.getRight(idx);
        const rightVal = this.arr[rightIdx];
        const curr = this.arr[idx];
        if (leftVal > rightVal && rightVal < curr){
            this.arr[rightIdx] = curr;
            this.arr[idx] = rightVal;
            this.heapifyDown(rightIdx);
        }
        else if (leftVal < curr){
            this.arr[leftIdx] = curr;
            this.arr[idx] = leftVal;
            this.heapifyDown(leftIdx);
        }
    }

    private getParent(idx: number): number{
        return Math.floor((idx - 1)/2);
    }

    private getLeft(idx: number): number{
        return idx * 2 + 1;
    }

    private getRight(idx: number): number{
        return idx * 2 + 2;
    }
}

