function walk(curr1: BinaryNode<number> | null, curr2: BinaryNode<number> | null): boolean{
    if (!curr1 && !curr2){
        return true;
    }
    if (!curr1 || !curr2){
        return false;
    }
    if (curr1.value !== curr2.value){
        return false;
    }
    return walk(curr1.left, curr2.left) && walk(curr1.right, curr2.right);
}

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    return walk(a, b);
}
