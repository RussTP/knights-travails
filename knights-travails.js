function getValidMoves(position){
const [x, y] = position;
const moves = [
    [x+2, y+1], [x+2, y-1],
    [x-2, y+1], [x-2, y-1],
    [x+1, y+2], [x+1, y-2],
    [x-1, y+2], [x-1, y-2] 
];

return moves.filter(([newX, newY]) => {
   return  newX >= 0 && newX < 8 && newY >= 0 && newY < 8 
    }); 
}

function knightMoves(start, end) {
let queue =  [start];
let visited = new Set();
let parent = {};


while (queue.length > 0) {
 let current = queue.shift();
 if (current[0] === end[0] && current[1] === end[1]) {
    let path = [];
    let step = current;

    while (step !== undefined) {
        path.push(step);
        step = parent[step.toString()];
    }
        path.reverse();

        let pathString = path.map(pos => `[${pos}]`).join ("\n");
        return `Your Knight made it in ${path.length - 1} moves. The Knight's required path:\n${pathString}`;
        }

        visited.add(current.toString());
        let moves = getValidMoves(current);

        for (let i = 0; i < moves.length; i++) {
            let move = moves[i];
            if (!visited.has(move.toString())) {
            queue.push(move);
            parent[move.toString()] = current;
            }
        }
    }   
}

console.log(knightMoves([0,0], [3,3]));
console.log(knightMoves([3,3], [0,0]));
console.log(knightMoves([0,0], [7,7]));
console.log(knightMoves([7,7], [0,0]));
