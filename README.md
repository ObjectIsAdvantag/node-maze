# Simple library to move around a maze

Companion of a bot sample

## Navigating the maze

```javascript
// init
const maze = require('./maze')
var pos = maze.pickInitialPosition()
console.log(`starting from: ${pos}`)
maze.show(pos)

// bumping a wall
console.log('moving up')
var move = maze.up(pos)
if (move.success) {
    console.log("did went up :-)")
}
else {
    console.log("stuck!")
}

// solution
move = maze.left(move.pos)
move = maze.left(move.pos)
move = maze.left(move.pos)
move = maze.down(move.pos)
move = maze.down(move.pos)
move = maze.left(move.pos)
move = maze.down(move.pos)
move = maze.down(move.pos)
move = maze.right(move.pos)
move = maze.right(move.pos)
move = maze.up(move.pos)
```
