export default function linear_search(haystack: number[], needle: number): boolean {
    for (let value of haystack){
        if (value === needle){
            return true;
        }
    }
    return false;
}
