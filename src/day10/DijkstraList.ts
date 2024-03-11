function hasUnvisited(seen: boolean[], dists: number[]){
    return seen.some((x, y) => !x && y < Infinity);
}

function getLowestDist(seen: boolean[], dists: number[]){
    let idx = -1;
    let minVal = Infinity;
    for (let i = 0; i < seen.length; ++i){
        if (seen[i]){
            continue;
        }
        if (dists[i] < minVal){
            minVal = dists[i];
            idx = i;
        }
    }
    return idx;
}
export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);
    dists[source] = 0;
    while (hasUnvisited(seen, dists)){
        const curr = getLowestDist(seen, dists);
        seen[curr] = true;
        for (let i = 0; i < arr[curr].length; ++i){
            const connectedNode = arr[curr][i].to;
            const currDist = dists[curr] + arr[curr][i].weight;
            if (currDist < dists[connectedNode]){
                dists[connectedNode] = currDist;
                prev[connectedNode] = curr;
            }
        }
    }
    if (prev[sink] === -1){
        return [];
    }
    let tmp = sink;
    const path: number[] = [];
    while (prev[tmp] !== -1){
        path.push(tmp);
        tmp = prev[tmp];
    }
    path.push(source);
    return path.reverse();
}
