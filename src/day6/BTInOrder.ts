function search(head: BinaryNode<number> | null, path:number[]){
    if (!head){
        return path;
    }
    search(head.left, path);
    path.push(head.value);
    search(head.right, path);
    return path;
}
export default function in_order_search(head: BinaryNode<number>): number[] {
    return search(head, []);
}
