//
// Maze library
//

var debug = require('debug')('maze');
var fine = require('debug')('maze:fine');


var maze = [0, 1, 2, 3, 4, 5, 6]

maze[0] = ['X', 'X', 'X', 'X', 'X', 'X', 'X']
maze[1] = ['X', ' ', ' ', ' ', ' ', ' ', 'X']
maze[2] = ['X', 'X', ' ', ' ', ' ', 'X', 'X']
maze[3] = ['X', ' ', 'C', 'X', ' ', ' ', 'X']
maze[4] = ['X', 'D', 'X', '?', 'X', ' ', 'X']
maze[5] = ['X', ' ', ' ', ' ', ' ', 'X', 'X']
maze[6] = ['X', 'X', 'X', 'X', 'X', 'X', 'X']

var phrases = {}
phrases['X'] = "ouch, you bumped a wall"
phrases[' '] = "sorry, nothing here"
phrases['C'] = "hello kitty"
phrases['D'] = "wow, an agressive dog is lying here"
phrases['?'] = "congrats you found the treasure"

function up(pos) {
    fine('trying up')
    return move(pos, -1, 0)
}

function down(pos) {
    fine('trying down')
    return move(pos, 1, 0)
}

function left(pos) {
    fine('trying left')
    return move(pos, 0, -1)
}

function right(pos) {
    fine('moving right')
    return move(pos, 0, 1)
}


function move(pos, x, y) {
    let newX = pos[0] + x
    let newY = pos[1] + y

    let thing = maze[newX][newY]

    var story = phrases[thing]
    debug('> ' + story)

    switch (thing) {
        case 'X':
            fine(`still at: ${pos}`)
            return pos;
        default:
            var newPos = [newX, newY]
            fine(`now at: ${newPos}`)
            return newPos
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
            if ((x==pos[0]) && y==pos[1]) {
                char = 'Y'
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
var pos = [1, 5]
console.log(`starting from: ${pos}`)
show(pos)

// bumping a wall
pos = up(pos)

// solution
pos = left(pos) 
pos = left(pos)
pos = left(pos)
pos = down(pos)
pos = down(pos)
pos = left(pos)
pos = down(pos)
pos = down(pos)
pos = right(pos)
pos = right(pos)
pos = up(pos)
console.log(look(pos))
