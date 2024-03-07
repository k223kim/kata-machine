function walk(graph: WeightedAdjacencyList, curr: number, needle: number, path: number[], seen: boolean[]): boolean{
    if (curr === needle){
        path.push(curr);
        return true;
    }
    if (seen[curr]){
        return false;
    }
    seen[curr] = true;
    path.push(curr);
    for (let i = 0; i < graph[curr].length; ++i){
        const tmp = graph[curr][i].to;
        if (walk(graph,
                 tmp,
                needle,
                path,
                seen)){
            return true;
        }
    }
    path.pop();
    return false;
}
export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const path: number[] = [];
    const seen: boolean[] = new Array(graph.length).fill(false);
    if (walk(graph, source, needle, path, seen)){
        return path;
    }
    return null;
}
