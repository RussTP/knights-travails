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

function knightMoves( start, end) {
let queue =  [start];
let visited = new Set();


while (queue.length > 0) {
 let current = queue.shift();
 if (current[0] === end[0] && current[1] === end[1]) {
    return `Knight travails from [${start}] to [${end}]`;
        }

        visited.add(current.toString());
        let moves = getValidMoves(current);

        for (let i = 0; i < moves.length; i++) {
            let move = moves[i];
            if (!visited.has(move.toString())) {
            queue.push(move);
            }
        }
    }   
}

console.log(knightMoves([0,0], [1,2]));
