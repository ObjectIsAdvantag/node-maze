
var maze = [0, 1, 2, 3, 4, 5, 6]

maze[0] = ['X', 'X', 'X', 'X', 'X', 'X', 'X']
maze[1] = ['X', ' ', ' ', ' ', ' ', ' ', 'X']
maze[2] = ['X', 'X', ' ', ' ', ' ', 'X', 'X']
maze[3] = ['X', ' ', ' ', 'X', ' ', ' ', 'X']
maze[4] = ['X', ' ', 'X', '?', 'X', ' ', 'X']
maze[5] = ['X', ' ', ' ', ' ', ' ', 'X', 'X']
maze[6] = ['X', 'X', 'X', 'X', 'X', 'X', 'X']


function up(pos, maze) {
    console.log('trying up')
    return move(pos, maze, -1, 0)
}

function down(pos, maze) {
    console.log('trying down')
    return move(pos, maze, 1, 0)
}

function left(pos, maze) {
    console.log('trying left')
    return move(pos, maze, 0, -1)
}

function right(pos, maze) {
    console.log('moving right')
    return move(pos, maze, 0, 1)
}


function move(pos, maze, x, y) {
    let newX = pos[0] + x
    let newY = pos[1] + y

    let meet = maze[newX][newY]
    switch (meet) {
        case 'X':
            console.log('bump')
            console.log(`still at: ${pos}`)
            return pos;
        case ' ':
            console.log('moving...')
            var newPos = [newX, newY]
            console.log(`now at: ${newPos}`)
            return newPos
        default:
            console.log(`met '${meet}'`)
            var newPos = [newX, newY]
            console.log(`now at: ${newPos}`)
            return newPos
    }
}

var pos = [1, 5]
console.log(`starting from: ${pos}`)
pos = up(pos, maze)

// solution
pos = left(pos, maze) 
pos = left(pos, maze)
pos = left(pos, maze)
pos = down(pos, maze)
pos = down(pos, maze)
pos = left(pos, maze)
pos = down(pos, maze)
pos = down(pos, maze)
pos = right(pos, maze)
pos = right(pos, maze)
pos = up(pos, maze)
