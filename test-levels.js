//
// Maze artefacts
//

// Build structures
var structures = []

var structure = []
structure[0] = ['|', '-', '-', '-', '-', '-', '|']
structure[1] = ['|', 'M', 'C', '_', '_', '_', '|']
structure[2] = ['|', '_', '_', 'X', 'D', '_', '|']
structure[3] = ['|', '_', 'X', '?', 'X', '_', '|']
structure[4] = ['|', '_', '_', '_', '_', 'X', '|']
structure[5] = ['|', '-', '-', '-', '-', '-', '|']
structures[0] = structure

structure = []
structure[0] = ['|', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '|']
structure[1] = ['|', '_', '_', '_', 'D', 'X', '_', '_', '_', 'M', '_', 'X', '_', '_', 'X', '_', '|']
structure[2] = ['|', 'C', 'X', '_', '_', 'X', '_', 'X', '_', '_', '_', '_', '_', 'X', 'X', 'C', '|']
structure[3] = ['|', '_', '_', 'X', '_', '_', '_', 'D', 'X', 'C', '_', 'X', '_', '_', '_', '_', '|']
structure[4] = ['|', 'D', '_', '?', 'X', '_', '_', '_', '_', 'X', '_', 'X', '_', '_', 'X', '_', '|']
structure[5] = ['|', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '|']
structures[1] = structure

structure = []
structure[0] = ['|', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '|']
structure[1] = ['|', 'C', '_', '_', 'D', '_', 'M', '_', 'X', '_', '_', '_', 'C', 'D', '_', 'C', '_', '_', '_', 'X', '_', '_', '_', '_', '_', '_', 'X', 'C', '_', 'D', '_', '_', 'X', '|']
structure[2] = ['|', '_', '_', 'X', 'X', '_', '_', '_', 'X', 'C', 'M', '_', 'X', '_', '_', '_', 'M', 'D', '_', '_', 'X', '_', '_', 'X', 'D', '_', '_', 'X', '_', '_', '_', 'X', 'C', '|']
structure[3] = ['|', '_', 'X', 'C', '_', 'X', 'X', '_', '_', '_', 'X', 'X', '_', '_', 'D', 'X', 'X', '_', '_', 'X', '_', 'M', 'X', 'C', '_', '_', 'M', '_', '_', 'X', '_', '_', '_', '|']
structure[4] = ['|', '_', '_', 'D', '_', '_', '?', 'X', '_', 'X', 'C', '_', '_', 'X', 'X', 'X', 'D', '_', '_', '_', 'C', '_', '_', '_', 'X', '_', '_', '_', 'C', 'X', '_', 'D', 'M', '|']
structure[5] = ['|', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '|']
structures[2] = structure

var walls = ['|', '-', 'X']

var phrases = {}
phrases['|'] = "cannot get there, this a maze border you just hitted"
phrases['-'] = "cannot get there, this a maze border you just hitted"
phrases['|'] = "cannot get there, this a maze border you just hitted"
phrases['X'] = "ouch, you bumped a wall"
phrases['_'] = "nothing here, let's continue exploring."
phrases['C'] = "hello kitty, you look hungry. Are you lost too? Jump in."
phrases['D'] = "WOW, an agressive dog is lying here. You've been bitten!"
phrases['M'] = "Too late, the ugly monster saw you. RUN!!!"
phrases['?'] = "CONGRATS, you found the treasure!!!"

var scores = {}
scores['|'] = -200
scores['-'] = -200
scores['|'] = -200
scores['X'] = -100
scores['_'] = 50
scores['C'] = 200
scores['D'] = -200
scores['M'] = -500
scores['?'] = 5000

var levels = []
levels[0] = 'Rookie'
levels[1] = 'Seasoned'
levels[2] = 'Expert'
var difficulty = 0

//
// Start game
//

// Create Maze
console.info("Starting a new Maze")
const Maze = require('./maze')
var game = new Maze(structures[difficulty], walls, phrases, scores, '?')
game.pickInitialPosition('_')
game.updateScore(1000)

// Try directions
var move = game.up();
console.log(JSON.stringify(move));

move = game.left();
console.log(JSON.stringify(move));

move = game.down();
console.log(JSON.stringify(move));

move = game.right();
console.log(JSON.stringify(move));
