export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private arr : Array<T | undefined>;

    constructor(capacity: number) {
        this.length = 0;
        this.arr = new Array<T | undefined>(this.capacity);
        this.capacity = capacity;
    }
    expandCapacity(): void{
        this.capacity = this.capacity * 2;
        let tmp = new Array<T | undefined>(this.capacity);
        for (let i = 0; i < this.length; ++i){
            this.arr[i] = tmp[i];
        }
        this.arr = tmp;
    }

    prepend(item: T): void {
        if (this.length === this.capacity){
            this.expandCapacity();
        }
        for (let i = this.length - 1; i >= 0; --i){
            this.arr[i+1] = this.arr[i];
        }
        this.arr[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity){
            this.expandCapacity();
        }
        for (let i = this.length - 1; i >= idx; --i){
            this.arr[i+1] = this.arr[i];
        }
        this.arr[idx] = item;
        this.length++;
    }
    append(item: T): void {
        if (this.length === this.capacity){
            this.expandCapacity();
        }
        this.arr[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        let idx : number = -1;
        for (let i = 0 ; i < this.length; ++i){
            if (this.arr[i] === item){
                idx = i;
            }
        }
        if (idx >= 0){
            const tmp = this.arr[idx];
            for (let j = idx+1; j < this.length; ++j){
                this.arr[j-1] = this.arr[j];
            }
            this.length--;
            return tmp;
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
        const tmp = this.arr[idx];
        for (let i = idx+1; i < this.length; ++i){
            this.arr[i-1] = this.arr[i];
        }
        this.length--;
        return tmp;
    }
}
