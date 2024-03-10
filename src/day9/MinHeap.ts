export default class MinHeap {
    public length: number;
    private arr: number[];

    constructor() {
        this.length = 0;
        this.arr = [];
    }

    insert(value: number): void {
        this.arr.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0){
            return -1;
        }
        const head = this.arr[0];
        this.length--;
        this.arr[0] = this.arr[this.length];
        this.heapifyDown(0);
        return head;
    }

    private heapifyUp(idx: number){
        if (idx === 0){
            return;
        }
        const parent = this.getParent(idx);
        const parentVal = this.arr[parent];
        if (this.arr[idx] < parentVal){
            this.arr[parent] = this.arr[idx];
            this.arr[idx] = parentVal;
            this.heapifyUp(parent);
        }
        return;
    }

    private heapifyDown(idx: number){
        if(idx === this.length){
            return;
        }
        const leftIdx = this.getLeft(idx);
        if (leftIdx >= this.length){
            return;
        }
        const leftVal = this.arr[leftIdx];
        const rightIdx = this.getRight(idx);
        const rightVal = this.arr[rightIdx];

        if (rightVal < leftVal && rightVal < this.arr[idx]){
            this.arr[rightIdx] = this.arr[idx];
            this.arr[idx] = rightVal;
            this.heapifyDown(rightIdx);
        }
        else if (leftVal < this.arr[idx]){
            this.arr[leftIdx] = this.arr[idx];
            this.arr[idx] = leftVal;
            this.heapifyDown(leftIdx);
        }
        return;
    }

    private getParent(idx: number){
        return Math.floor((idx-1)/2);
    }

    private getLeft(idx: number){
        return idx * 2 + 1;
    }

    private getRight(idx: number){
        return idx * 2 + 2;
    }
}
