
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
    console.log('trying up')
    return move(pos, -1, 0)
}

function down(pos) {
    console.log('trying down')
    return move(pos, 1, 0)
}

function left(pos) {
    console.log('trying left')
    return move(pos, 0, -1)
}

function right(pos) {
    console.log('moving right')
    return move(pos, 0, 1)
}


function move(pos, x, y) {
    let newX = pos[0] + x
    let newY = pos[1] + y

    let thing = maze[newX][newY]

    var story = phrases[thing]
    console.log('> ' + story)

    switch (thing) {
        case 'X':
            console.log(`still at: ${pos}`)
            return pos;
        default:
            var newPos = [newX, newY]
            console.log(`now at: ${newPos}`)
            return newPos
    }
}

function look(pos) {
    var x = pos[0]
    var y = pos[1]
    var thing = maze[x][y]
    return phrases[thing];
}

var pos = [1, 5]
console.log(`starting from: ${pos}`)
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
look(pos)