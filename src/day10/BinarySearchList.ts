export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while(low < high){
        const m = Math.floor( low + (high - low)/2);
        const v = haystack[m];
        if (v === needle){
            return true;
        }
        else if (v < needle){
            low = m+1;
        }
        else{
            high = m;
        }
    }
    return false;
}
