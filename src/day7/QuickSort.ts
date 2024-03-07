function partition(low: number, high: number, arr: number[]): number{
    const pivot = arr[high];
    let idx = low - 1;
    for (let i = low; i < high; ++i){
        if (arr[i] <= pivot){
            idx++;
            const tmp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = tmp;
        }
    }
    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
function qs(low: number, high: number, arr: number[]): void{
    if (low >= high){
        return;
    }
    const p = partition(low, high, arr);
    qs(low, p-1, arr);
    qs(p+1, high, arr);
    return;
}
export default function quick_sort(arr: number[]): void {
    qs(0, arr.length-1, arr);
}
