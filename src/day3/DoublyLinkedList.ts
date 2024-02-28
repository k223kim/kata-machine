type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
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
            return;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length){
            return;
        }
        else if (idx === 0){
            this.prepend(item);
            return;
        }
        else if (idx === this.length){
            this.append(item);
            return;
        }
        const node = {value: item} as Node<T>;
        let tmp = this.head;
        for (let i = 0; i < idx && tmp; ++i){
            tmp = tmp.next;
        }
        if (tmp){
            this.length++;
            if (tmp.prev){
                tmp.prev.next = node;
            }
            node.prev = tmp.prev;
            node.next = tmp;
            tmp.prev = node;
        }
    }
    append(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.tail){
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let tmp = this.head;
        for (let i = 0; i < this.length && tmp; ++i){
            if (item === tmp.value){
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
        if (idx >= this.length){
            return undefined;
        }
        let tmp = this.head;
        for (let i = 0; i < idx && tmp; ++i){
            tmp = tmp.next;
        }
        return tmp?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx >= this.length){
            return undefined;
        }
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
