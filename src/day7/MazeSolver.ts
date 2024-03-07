const dir = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
]
function walk(maze: string[], wall: string, curr: Point, end: Point, path: Point[], seen: boolean[][]): boolean{
    if (curr.x < 0 || curr.y < 0
        || curr.x >= maze[0].length || curr.y >= maze.length){
        return false;
    }
    if (seen[curr.y][curr.x]){
        return false;
    }
    if (maze[curr.y][curr.x]===wall){
        return false;
    }
    if (curr.x === end.x && curr.y === end.y){
        path.push(curr);
        return true;
    }
    seen[curr.y][curr.x] = true;
    path.push(curr);
    for (let i = 0; i < dir.length; ++i){
        if (walk(maze, wall,
                 {x: curr.x + dir[i][0], y: curr.y + dir[i][1]},
                end, path, seen)){
            return true;
        }
    }
    path.pop();
    return false;
}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];
    for (let i = 0; i < maze.length; ++i){
        seen.push(new Array(maze[i].length).fill(false));
    }
    walk(maze, wall, start, end, path, seen);
    return path;
}
