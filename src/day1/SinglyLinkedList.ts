type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;


    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        if (!this.tail){
            this.tail = this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        let tmp = this.head;
        let node = {value: item} as Node<T>;
        let prev = undefined;
        for (let i = 0; i < idx-1 && tmp; ++i){
            prev = tmp;
            tmp = tmp.next;
        }
        if (tmp){
            this.length++;
            if (this.length === 1){
                this.head = this.tail = tmp;
            }
            let tmpnext = tmp.next;
            tmp.next = node;
            node.next = tmpnext;
        }
    }
    append(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if(!this.tail){
            this.tail = this.head = node;
            return;
        }
        const curr_tail = this.tail;
        curr_tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let tmp = this.head;
        let prev = undefined;
        for(let i = 0; i < this.length && tmp; ++i){
            if (tmp.value === item){
                break;
            }
            prev = tmp;
            tmp = tmp.next;
        }
        if(tmp){
            this.length--;
            if(prev){
                prev.next = tmp.next;
                if (!tmp.next){
                    this.tail = prev;
                }
            }
            else{
                this.head = tmp.next ? tmp.next : undefined;
            }
            return tmp.value;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let tmp = this.head;
        for (let i = 0 ; i < idx && tmp; i++){
            tmp = tmp.next;
        }
        return tmp ? tmp.value : undefined;
    }
    removeAt(idx: number): T | undefined {
        let tmp = this.head;
        let prev = undefined;
        for(let i = 0; i < idx && tmp; ++i){
            prev = tmp;
            tmp = tmp.next;
        }
        if(tmp){
            const ret = tmp.value;
            this.length--;
            if(prev){
                prev.next = tmp.next;
                if (!tmp.next){
                    this.tail = prev;
                }
            }
            else{
                this.head = tmp.next ? tmp.next : undefined;
            }
            return ret;
        }
        return undefined;
    }
}
