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
        this.length++;
        const node = {value: item} as Node<T>;
        if (!this.head){
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length){
            return;
        }
        else if(idx === 0){
            this.prepend(item);
            return;
        }
        else if(idx === this.length){
            this.append(item);
            return;
        }
        this.length++;
        const node = {value: item} as Node<T>;
        let tmp = this.head;
        let prev = undefined;
        for (let i = 0; i < idx && tmp; ++i){
            prev = tmp;
            tmp = tmp.next;
        }
        node.next = tmp;
        if (prev){
            prev.next = node;
        }
    }
    append(item: T): void {
        this.length++;
        const node = {value: item} as Node<T>;
        if (!this.tail){
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
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
            this.length--;
            if (prev){
                prev.next = tmp.next;
            }
            else{
                this.head = tmp.next;
            }
            if (!tmp.next){
                this.tail = prev;
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
        let prev = undefined;
        for (let i = 0; i < idx && tmp; ++i){
            prev = tmp;
            tmp = tmp.next;
        }
        if(tmp){
            this.length--;
            if (prev){
                prev.next = tmp.next;
            }
            else{
                this.head = tmp.next;
            }
            if (!tmp.next){
                this.tail = prev;
            }
            return tmp.value;
        }
        return undefined;
    }
}
