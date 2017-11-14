//
// Maze library
//

var debug = require('debug')('maze');
var fine = require('debug')('maze:fine');


var maze = [0, 1, 2, 3, 4, 5, 6]

maze[0] = ['X', 'X', 'X', 'X', 'X', 'X', 'X']
maze[1] = ['X', ' ', ' ', ' ', ' ', ' ', 'X']
maze[2] = ['X', 'X', ' ', ' ', ' ', 'X', 'X']
maze[3] = ['X', ' ', 'c', 'X', ' ', ' ', 'X']
maze[4] = ['X', 'd', 'X', '?', 'X', ' ', 'X']
maze[5] = ['X', ' ', ' ', ' ', ' ', 'X', 'X']
maze[6] = ['X', 'X', 'X', 'X', 'X', 'X', 'X']

var phrases = {}
phrases['X'] = "ouch, you bumped a wall"
phrases[' '] = "sorry, nothing here"
phrases['c'] = "hello kitty"
phrases['d'] = "wow, an agressive dog is lying here"
phrases['?'] = "congrats you found the treasure"

function tryMove(pos, direction) {
    debug(`trying ${direction}`)
    switch (direction) {
        case 'up':
            return _move(pos, -1, 0);
        case 'down':
            return _move(pos, 1, 0)
        case 'left':
            return _move(pos, 0, -1)
        case 'right':
            return _move(pos, 0, 1)
        default:
            throw new Error("unknown direction");
    }
}

function up(pos) {
    return tryMove(pos, 'up');
}

function down(pos) {
    return tryMove(pos, 'down');
}

function left(pos) {
    return tryMove(pos, 'left');
}

function right(pos) {
    return tryMove(pos, 'right');
}

function _move(pos, x, y) {
    let newX = pos[0] + x
    let newY = pos[1] + y

    let thing = maze[newX][newY]

    var story = phrases[thing]
    debug('> ' + story)

    switch (thing) {
        case 'X':
            fine(`still at: ${pos}`)
            return {
                'success': false,
                'thing': look(pos),
                'pos': pos
            };
        default:
            var newPos = [newX, newY]
            fine(`now at: ${newPos}`)
            return {
                'success': true,
                'thing': look(newPos),
                'pos': newPos
            };
    }
}

function look(pos) {
    var x = pos[0]
    var y = pos[1]
    var thing = maze[x][y]
    return phrases[thing];
}

function show(pos) {
    var poster = ""
    for (y = 0; y < maze.length; y++) {
        var line = ""
        for (x = 0; x < maze[0].length; x++) {
            var char = maze[y][x]
            if ((y == pos[0]) && x == pos[1]) {
                char = 'o'
            }
            line += char
        }
        poster += line + "\n"
    }
    debug("poster:\n" + poster)
    return poster
}

function pickInitialPosition() {
    // TODO: make this random
    return [1, 5];
}


//
// TEST MAZE
// 
var pos = pickInitialPosition()
console.log(`starting from: ${pos}`)
show(pos)

// bumping a wall
console.log('moving up')
var move = up(pos)
if (move.success) {
    console.log("did went up :-)")
}
else {
    console.log("stuck!")
}


// solution
move = left(move.pos)
move = left(move.pos)
move = left(move.pos)
move = down(move.pos)
move = down(move.pos)
move = left(move.pos)
move = down(move.pos)
move = down(move.pos)
move = right(move.pos)
move = right(move.pos)
move = up(move.pos)
