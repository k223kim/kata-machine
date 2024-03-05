function search(graph: WeightedAdjacencyList, curr: number, needle: number, path: number[], seen: boolean[]): boolean{
    if (curr === needle){
        return true;
    }
    for (let i = 0; i < graph[curr].length; ++i){
        if (seen[graph[curr][i].to]){
            continue;
        }
        seen[graph[curr][i].to] = true;
        path.push(graph[curr][i].to);
        if (search(graph, graph[curr][i].to, needle, path, seen)){
            return true;
        }
    }
    path.pop();
    return false;
}
export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];
    seen[source] = true;
    path.push(source);
    if (search(graph, source, needle, path, seen)){
        return path;
    }
    return null;
}
