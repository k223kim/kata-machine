export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const q: number[] = [];
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    q.push(source);
    while(q.length){
        const curr = q.shift() as number;
        seen[curr] = true;
        for (let i = 0; i < graph[curr].length; ++i){
            if (graph[curr][i] === 0 || seen[i]){
                continue;
            }
            q.push(i);
            prev[i] = curr;
        }
    }
    if (prev[needle] === -1){
        return null;
    }
    const path: number[] = [];
    let tmp = needle;
    while(prev[tmp] !== -1){
        path.push(tmp);
        tmp = prev[tmp];
    }
    path.push(source);
    return path.reverse();
}
