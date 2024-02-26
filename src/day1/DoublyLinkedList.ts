type Node<T>={
    value: T,
    next?: Node<T>,
    prev?: Node<T>
}
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.head){
            this.head = this.tail = node;
        }
        else{
            const tmp = this.head;
            node.next = tmp;
            tmp.prev = node;
            this.head = node;
        }
    }
    insertAt(item: T, idx: number): void {
        let tmp = this.head;
        for(let i = 0; i < idx && tmp; ++i){
            tmp = tmp.next;
        }
        if (tmp){
            this.length++;
            const node = {value: item} as Node<T>;
            node.next = tmp.next;
            tmp.next = node;
            node.prev = tmp;
        }
    }
    append(item: T): void {
        let tmp = this.tail;
        const node = {value: item} as Node<T>;
        this.length++;
        if (!tmp){
            this.head = this.tail = node;
            return;
        }
        tmp.next = node;
        node.prev = tmp;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let tmp = this.head;
        for(let i = 0; i < this.length && tmp; ++i){
            if (tmp.value === item){
                break;
            }
            tmp = tmp.next;
        }
        if (tmp){
            this.length--;
            if (tmp.prev){
                tmp.prev.next = tmp.next;
            }
            else{
                this.head = tmp.next;
            }
            if (tmp.next){
                tmp.next.prev = tmp.prev;
            }
            else{
                this.tail = tmp.prev;
            }
            return tmp.value
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let tmp = this.head;
        for (let i = 0; i < idx && tmp; ++i){
            tmp = tmp.next;
        }
        if (tmp){
            return tmp.value;
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        let tmp = this.head;
        for (let i = 0; i < idx && tmp; ++i){
            tmp = tmp.next;
        }
        if (tmp){
            this.length--;
            if (tmp.next){
                tmp.next.prev = tmp.prev;
            }
            else{
                this.tail = tmp.prev;
            }

            if(tmp.prev){
                tmp.prev.next = tmp.next;
            }
            else{
                this.head = tmp.next;
            }
            return tmp.value;
        }
        return undefined;
    }
}
