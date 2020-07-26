const Util = require("./utils");
const Asteroid = require("./asteroid");

function Game() {
    this.asteroids = [];
}

/* these constants are directly placed on the constructor function,
Because we want to make a clear distinction between the constants with the instace attributes
*/
Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroids = function() {
    let numAsteroids = Game.NUM_ASTEROIDS;
    while (numAsteroids > 0) {
      let randpos = Util.randomPos(Game.DIM_X,Game.DIM_Y);
      let asteroid = new Asteroid({pos: randpos});
      this.asteroids.push(asteroid);
      numAsteroids--;
    };
};

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);
    this.asteroids.forEach(function(object) {
        object.draw(ctx);
    })
};

Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(object) {
        object.move();
    })
}



module.exports =  Game;