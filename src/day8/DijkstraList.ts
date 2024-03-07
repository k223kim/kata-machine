function hasUnvisited(seen: boolean[], dists: number[]): boolean{
    return seen.some((x, y) => !x && dists[y] < Infinity);
}

function getLowestDist(seen: boolean[], dists: number[]): number{
    let idx = -1;
    let minDist = Infinity;
    for (let i = 0; i < seen.length; ++i){
        if (seen[i]){
            continue;
        }
        if (dists[i] < minDist){
            minDist = dists[i];
            idx = i;
        }
    }
    return idx;
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);
    const seen: boolean[] = new Array(arr.length).fill(false);
    dists[source] = 0;
    while (hasUnvisited(seen, dists)){
        const curr = getLowestDist(seen, dists);
        seen[curr] = true;
        for (let i = 0; i < arr[curr].length; ++i){
            const currDist = dists[curr] + arr[curr][i].weight;
            if (dists[arr[curr][i].to] > currDist){
                dists[arr[curr][i].to] = currDist;
                prev[arr[curr][i].to] = curr;
            }
        }
    }

    if (prev[sink] === -1){
        return [];
    }
    const path: number[] = [];
    let tmp = sink;
    while (prev[tmp] !== -1){
        path.push(tmp);
        tmp = prev[tmp];
    }
    path.push(source);
    return path.reverse();
}
