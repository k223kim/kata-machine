const dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
]
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]){
    if (curr.x < 0 || curr.x >= maze[0].length
        || curr.y < 0 || curr.y >= maze.length){
            return false;
    }
    if (maze[curr.y][curr.x] === wall){
        return false;
    }
    if (curr.x === end.x && curr.y === end.y){
        path.push(curr);
        return true;
    }
    if (seen[curr.y][curr.x] === true){
        return false;
    }
    path.push(curr);
    seen[curr.y][curr.x] = true;

    for (let i = 0; i < dir.length; ++i){
        if (walk(maze, wall, {x: curr.x + dir[i][0], y: curr.y + dir[i][1]}, end, seen, path)){
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
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}
