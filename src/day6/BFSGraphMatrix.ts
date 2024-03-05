export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const q: number[] = [source];
    const prev: number[] = new Array(graph.length).fill(-1);
    const seen: boolean[] = new Array(graph.length).fill(false);
    while(q.length){
        const curr = q.shift() as number;
        seen[curr] = true;
        if (curr === needle){
            const path: number[] = [];
            let tmp = curr;
            do{
                path.push(tmp);
                tmp = prev[tmp];
            }while(tmp != -1)
            return path.reverse();
        }
        for (let i = 0; i < graph[curr].length; ++i){
            if (graph[curr][i] === 0){
                continue;
            }
            if (seen[i]){
                continue;
            }
            seen[i] = true;
            q.push(i);
            prev[i] = curr;
        }
    }
    return null;
}
