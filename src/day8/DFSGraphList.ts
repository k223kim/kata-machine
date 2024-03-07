function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean{
    if (seen[curr]){
        return false;
    }
    if (curr === needle){
        path.push(curr);
        return true;
    }
    seen[curr] = true;
    path.push(curr);
    for (let i = 0; i < graph[curr].length; ++i){
        if (walk(graph, graph[curr][i].to, needle, seen, path)){
            return true;
        }
    }
    path.pop();
    return false;
}
export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];
    if (walk(graph, source, needle, seen, path)){
        return path;
    }
    return null;
}
