type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
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
        const node = {value : item} as Node<T>;
        this.length++;
        if (!this.head){
            this.head = this.tail = node;
            return;
        }
        const curr_head = this.head;
        curr_head.prev = node;
        node.next = curr_head;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        const node = {value : item} as Node<T>;
        let tmp = this.head;
        for(let i = 0; i < idx && tmp; ++i){
            tmp = tmp.next;
        }
        if (tmp){
            this.length++;
            node.next = tmp;
            if (tmp.prev){
                tmp.prev.next = node;
                node.prev = tmp.prev;
            }
            else{
                this.head = node;
            }
            tmp.prev = node;
        }
    }

    append(item: T): void {
        const node = {value : item} as Node<T>;
        this.length++;
        if (!this.tail){
            this.head = this.tail = node;
            return;
        }
        let curr_tail = this.tail;
        curr_tail.next = node;
        node.prev = curr_tail;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let tmp = this.head;
        for (let i = 0; i < this.length && tmp; ++i){
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
            return tmp.value;
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
            return tmp.value;
        }
        return undefined;
    }
}
