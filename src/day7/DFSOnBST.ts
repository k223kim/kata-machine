function walk(head: BinaryNode<number> | null, needle: number): boolean{
    if (!head){
        return false;
    }
    if (head.value === needle){
        return true;
    }
    else if (head.value < needle){
        return walk(head.right, needle);
    }
    else{
        return walk(head.left, needle);
    }
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle);
}
