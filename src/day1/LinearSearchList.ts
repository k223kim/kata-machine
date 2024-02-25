export default function linear_search(haystack: number[], needle: number): boolean {
    for (let v of haystack){
        if (v === needle){
            return true;
        }
    }
    return false;
}
