function search(head: BinaryNode<number>|null, path: number[]){
    if (!head){
        return;
    }
    path.push(head.value);
    search(head.left, path);
    search(head.right, path);
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    search(head, path);
    return path;
}
