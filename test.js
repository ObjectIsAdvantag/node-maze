
// Build structure
var structure = []
structure[0] = ['|', '-', '-', '-', '-', '-', '|']
structure[1] = ['|', 'M', 'C', '_', '_', '_', '|']
structure[2] = ['|', '_', '_', 'X', 'D', '_', '|']
structure[3] = ['|', '_', 'X', '?', 'X', '_', '|']
structure[4] = ['|', '_', '_', '_', '_', 'X', '|']
structure[5] = ['|', '-', '-', '-', '-', '-', '|']

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


// Create Maze
console.info("Starting a new Maze")
const Maze = require('./maze')
var game = new Maze(structure, walls, phrases, scores, '?')
game.pickInitialPosition('_')
game.updateScore(1000)

// Show map
console.log("Map:\n" + game.buildMap());

// Try directions
var move = game.up();
console.log(JSON.stringify(move));

move = game.left();
console.log(JSON.stringify(move));

move = game.down();
console.log(JSON.stringify(move));

move = game.right();
console.log(JSON.stringify(move));

console.log(`final score: ${game.score}`)
