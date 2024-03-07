export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const q = [source];
    const prev = new Array(graph.length).fill(-1);
    const seen = new Array(graph.length).fill(false);
    seen[source] = true;
    while (q.length){
        const curr = q.shift() as number;
        if (curr === needle){
            break;
        }
        for (let i = 0; i < graph[curr].length; ++i){
            if (graph[curr][i] === 0 || seen[i] === true){
                continue;
            }
            q.push(i);
            seen[i] = true;
            prev[i] = curr;
        }
    }

    const path: number[] = [];
    let tmp = needle;
    while (prev[tmp] !== -1){
        path.push(tmp);
        tmp = prev[tmp];
    }
    if (path.length !== 0){
        return [source].concat(path.reverse());
    }
    return null;
}
