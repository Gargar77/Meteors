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
      let randPos = Util.randomPos(Game.DIM_X,Game.DIM_Y);
      let asteroid = new Asteroid({pos: randPos,game: this});
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
};

Game.prototype.wrap = function(x,y,r) {
    let pos = [x,y];
    
    if (pos[0] > Game.DIM_X + r) {
        x = 0;
    } else if (pos[0] < 0 - r) {
        x = Game.DIM_X;
    } else if (pos[1] > Game.DIM_Y + r) {
        y = 0;
    }else if (pos[1] < 0 - r) {
        y = Game.DIM_Y;
    };       

    return [x,y];
}

Game.prototype.checkCollisions = function() {
    let asteroidSet = this.asteroids;
    let collision;
    let i = 0;
    while (i < asteroidSet.length) {
        let currentAsteroid = asteroidSet[i];
        asteroidSet.forEach((asteroid)=> {
            if(
                (currentAsteroid.isCollidedWith(asteroid)) &&
                (currentAsteroid !== asteroid)
            ) {
                currentAsteroid.collideWith(asteroid);
                collision = true;
                return;
            }
        });
        i++;
    }

    if (collision) {
        // alert("collision!");
        return true;
    } 
    
    return false;
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
    index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index,1);
    return true;
};




module.exports =  Game;