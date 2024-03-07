function hasUnvisited(seen: boolean[], dists: number[]): boolean{
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number{
    let d = Infinity;
    let idx = -1;
    for (let i = 0; i < seen.length; ++i){
        if (seen[i]){
            continue;
        }
        if (dists[i] < d){
            d = dists[i];
            idx = i;
        }
    }
    return idx;
}

export function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[]{

    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(seen, dists)){
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;
        for (let i = 0; i < arr[curr].length; ++i){
            if (seen[arr[curr][i].to]){
                continue;
            }
            const currDist = dists[curr] + arr[curr][i].weight
            if (currDist < dists[arr[curr][i].to]){
                dists[arr[curr][i].to] = currDist;
                prev[arr[curr][i].to] = curr;
            }
        }
    }

    const path: number[] = [];
    let tmp = sink;
    while(prev[tmp] !== -1){
        path.push(tmp);
        tmp = prev[tmp];
    }
    if (path.length >0){
        path.push(source);
    }
    return path.reverse();
}
