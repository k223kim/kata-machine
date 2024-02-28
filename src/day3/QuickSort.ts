function partition(arr: number[], low: number, high: number){
    const pivot = arr[high];
    let idx = low - 1;
    for (let i = low; i <= high-1 ; ++i){
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

function qs(arr: number[], low: number, high: number){
    if (low >= high){
        return;
    }
    let pivotIdx = partition(arr, low, high);
    qs(arr, low, pivotIdx-1);
    qs(arr, pivotIdx+1, high);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1);
}
