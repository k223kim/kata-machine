export default class ArrayList<T> {
    public length: number; //this is equivalent to tail
    // idx 0 is equivalent to head
    private capacity: number;
    private array : Array<T | undefined>;


    constructor(capacity: number) {
        this.capacity = capacity;
        this.length = 0;
        this.array = Array<T>(this.capacity);
    }

    growCapacity(): void {
        this.capacity = this.capacity * 2;
        const array = Array<T | undefined>(this.capacity);
        for (let i = 0; i < this.array.length; ++i){
            array[i] = this.array[i];
        }
        this.array = array;
    }

    prepend(item: T): void {
        if (this.length === this.capacity){
            this.growCapacity();
        }
        for(let i = this.length-1; i >= 0; --i){
            this.array[i+1] = this.array[i];
        }
        this.array[0] = item;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.capacity){
            return;
        }
        for(let i = this.length-1; i >= idx; --i){
            this.array[i+1] = this.array[i];
        }
        this.array[idx] = item;
        this.length++;
    }
    append(item: T): void {
        if (this.length === this.capacity){
            this.growCapacity();
        }
        this.array[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        let removeIdx = -1;
        for (let i = 0; i < this.length; ++i){
            if (this.array[i] === item){
                removeIdx = i;
            }
        }
        if (removeIdx >= 0){
            const ret = this.array[removeIdx];
            for (let i = removeIdx; i < this.length; ++i){
                this.array[i] = this.array[i+1];
            }
            this.length--;
            return ret;
        }
        else{
            return undefined;
        }
    }
    get(idx: number): T | undefined {
        if (idx >= this.length){
            return undefined;
        }
        return this.array[idx];
    }
    removeAt(idx: number): T | undefined {
        if (idx >= this.length){
            return undefined;
        }
        const curr_val = this.array[idx];
        for (let i = idx; i < this.length; ++i){
            this.array[i] = this.array[i+1];
        }
        this.length--;
        return curr_val;
    }
}
