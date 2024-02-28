function partition(arr: number[], low: number, high: number){
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
    return idx
}
function qs(arr: number[], low: number, high: number){
    if (low >= high){
        return;
    }
    const pivot_idx = partition(arr, low, high);
    qs(arr, low, pivot_idx-1)
    qs(arr, pivot_idx+1, high)
    return;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1)
}
