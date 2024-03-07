export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const q: number[] = [];
    const prev: number[] = new Array(graph.length).fill(-1);
    const seen: boolean[] = new Array(graph.length).fill(false);

    q.push(source);
    while(q.length){
        const curr = q.shift() as number;
        seen[curr] = true;
        if (curr === needle){
            break;
        }
        for (let i = 0; i < graph[curr].length; ++i){
            if (graph[curr][i] !== 0 && !seen[i]){
                prev[i] = curr;
                q.push(i);
            }
        }
    }

    if (prev[needle] === -1){
        return null;
    }
    const path: number[] = [];
    let tmp = needle;
    while (prev[tmp] !== -1){
        path.push(tmp);
        tmp = prev[tmp];
    }
    path.push(source);
    return path.reverse();
}
