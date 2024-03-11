export default class ArrayList<T> {
    public length: number;
    private arr: (T|undefined)[];
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.arr = new Array(this.capacity).fill(undefined);
        this.length = 0;
    }

    private increaseCapacity(){
        this.capacity = this.capacity * 2;
        const newArr = new Array(this.capacity);
        for (let i = 0; i < this.length; ++i){
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    private unshift(idx: number){
        for (let i = this.length; i > idx; --i){
            this.arr[i] = this.arr[i-1];
        }
    }

    prepend(item: T): void {
        if (this.length === this.capacity){
            this.increaseCapacity();
        }
        this.unshift(0);
        this.arr[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity){
            this.increaseCapacity();
        }
        this.unshift(idx);
        this.arr[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length === this.capacity){
            this.increaseCapacity();
        }
        this.arr[this.length] = item;
        this.length++;
    }

    private shift(idx: number){
        for (let i = idx; i < this.length; ++i){
            this.arr[i] = this.arr[i+1];
        }
    }

    remove(item: T): T | undefined {
        let idx = -1;
        for (let i = 0; i < this.length; ++i){
            if (this.arr[i] === item){
                idx = i;
                break;
            }
        }
        if (idx >= 0){
            return this.removeAt(idx);
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length){
            return undefined;
        }
        return this.arr[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length){
            return undefined;
        }
        const out = this.arr[idx];
        this.shift(idx);
        this.length--;
        return out;
    }
}
