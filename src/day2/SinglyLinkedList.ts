type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        node.next = this.head;
        this.head = node;
        if (!node.next){
            this.tail = node;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        let tmp = this.head;
        let prev = undefined;
        for (let val = 0; val < idx && tmp; ++val){
            prev = tmp;
            tmp = tmp.next;
        }
        if (tmp){
            this.length++;
            const node = {value: item} as Node<T>;
            if (this.length === 1){
                this.head = this.tail = node;
                return;
            }
            if (prev){
                prev.next = node;
            }
            else{
                this.head = node;
            }
            node.next = tmp;
        }
    }
    append(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.tail){
            this.head = this.tail = node;
        }
        else{
            const curr_tail = this.tail;
            curr_tail.next = node;
            this.tail = node;
        }
    }
    remove(item: T): T | undefined {
        let tmp = this.head;
        let prev = undefined;
        for (let i = 0; i < this.length && tmp; ++i){
            if (tmp.value === item){
                break;
            }
            prev = tmp;
            tmp = tmp.next;
        }
        if (tmp){
            if (prev){
                prev.next = tmp.next;
                if (!tmp.next){
                    this.tail = prev;
                }
            }
            else{
                this.head = tmp.next;
            }
            this.length--;
            return tmp.value;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let tmp = this.head;
        for (let i = 0; i < idx && tmp; ++i){
            tmp = tmp.next;
        }
        return tmp?.value;
    }
    removeAt(idx: number): T | undefined {
        let tmp = this.head;
        let prev = undefined;
        for (let i = 0; i < idx && tmp; ++i){
            prev = tmp;
            tmp = tmp.next;
        }
        if (tmp){
            if (prev){
                prev.next = tmp.next;
            }
            else{
                this.head = tmp.next;
            }
            if (!tmp.next){
                this.tail = prev
            }
            this.length--;
            return tmp.value;
        }
        return undefined;
    }
}
