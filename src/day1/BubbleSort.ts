export default function bubble_sort(arr: number[]): void {
    for (let j = 0; j < arr.length; ++j){
        for (let i = 0; i < arr.length-1-j; ++i){
            if (arr[i] >= arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                //arr[i], arr[i+1] = arr[i+1], arr[i];
            }
        }
    }
}
// in a singular iteration
// the largest item is in the last spot
