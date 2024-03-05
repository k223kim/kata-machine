function compareTree(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean{
    if (a === null && b === null){
        return true;
    }
    else if (a === null || b === null){
        return false;
    }
    else if (a.value != b.value){
        return false;
    }
    return compareTree(a.left, b.left) && compareTree(a.right, b.right);
}
export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    return compareTree(a, b);
}
