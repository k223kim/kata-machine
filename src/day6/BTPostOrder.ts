function search(head: BinaryNode<number> | null, path: number[]): void{
    if (!head){
        return;
    }
    search(head.left, path);
    search(head.right, path);
    path.push(head.value);
    return;
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    const path : number[] = [];
    search(head, path);
    return path;
}
