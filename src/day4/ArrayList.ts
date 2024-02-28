export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private arr: Array<T>;

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.arr = new Array<T>(capacity);
    }

    increaseCapacity(): void{
        this.capacity = this.capacity * 2;
        let newArr = new Array<T>(this.capacity);
        for (let i = 0; i < this.length; ++i){
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    prepend(item: T): void {
        if (this.length === this.capacity){
            this.increaseCapacity();
        }
        for (let i = this.length-1; i >= 0; --i){
            this.arr[i+1] = this.arr[i];
        }
        this.arr[0] = item;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0){
            this.prepend(item);
            return;
        }
        else if (idx === this.length){
            this.append(item);
            return;
        }
        if (this.length === this.capacity){
            this.increaseCapacity();
        }
        for (let i = this.length-1; i >= idx; --i){
            this.arr[i+1] = this.arr[i];
        }
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

    remove(item: T): T | undefined {
        let idx = -1;
        for (let i = 0; i < this.length; ++i){
            if (this.arr[i] === item){
                idx = i;
                break;
            }
        }
        if (idx >= 0){
            const ret = this.arr[idx];
            for (let j = idx; j < this.length; ++j){
                this.arr[j] = this.arr[j+1];
            }
            this.length--;
            return ret;
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
        const ret = this.arr[idx];
        for (let j = idx; j < this.length; ++j){
            this.arr[j] = this.arr[j+1];
        }
        this.length--;
        return ret;
    }
}
