function partition(low: number, high: number, arr: number[]): number{
    const pivot = arr[high];
    let idx = low - 1;
    for(let i = low; i < high; ++i){
        if (arr[i] <= pivot){
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
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
    const pivotIdx = partition(low, high, arr);
    qs(low, pivotIdx-1, arr);
    qs(pivotIdx+1, high, arr);
    return;
}

export default function quick_sort(arr: number[]): void {
    qs(0, arr.length-1, arr);
}
