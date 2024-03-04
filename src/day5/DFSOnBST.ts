function walk(curr: BinaryNode<number> | null, needle: number): boolean{
    if (!curr){
        return false;
    }
    if (curr.value === needle){
        return true;
    }
    else if (curr.value < needle){
        return walk(curr.right, needle);
    }
    else{
        return walk(curr.left, needle);
    }
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle);
}
