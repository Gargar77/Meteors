const Util = require("./utils");
const Asteroid = require("./asteroid");
const Ship = require("./ship");

function Game() {
    this.asteroids = [];
    this.ship = null;
};
/* these constants are directly placed on the constructor function,
Because we want to make a clear distinction between the constants with the instace attributes
*/
Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 15;

Game.prototype.allObjects = function() {
    return [].concat(this.ship,this.asteroids);
}

Game.prototype.addShip = function() {
    let randPos = this.randomPos();
    this.ship = new Ship({pos: randPos, game: this});
}

Game.prototype.addAsteroids = function() {
    let numAsteroids = Game.NUM_ASTEROIDS;
    while (numAsteroids > 0) {
      let randPos = this.randomPos();
      let asteroid = new Asteroid({pos: randPos,game: this});
      this.asteroids.push(asteroid);
      numAsteroids--;
    }
};

Game.prototype.randomPos = function() {
    let randX = Math.floor(Math.random() * Game.DIM_X);
    let randY = Math.floor(Math.random() * Game.DIM_Y);
    return [randX,randY];
};

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);
    this.allObjects().forEach(function(object) {
        object.draw(ctx);
    })
};

Game.prototype.addObjects = function() {
    this.addAsteroids();
    this.addShip();
}

Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function(object) {
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
    let i = 0;
    const objects = this.allObjects();
    while (i < objects.length) {
        let currentObject = objects[i];
        objects.forEach((object)=> {
            
            if(
                (currentObject.isCollidedWith(object)) &&
                (currentObject !== object)
            ) {
                if (currentObject instanceof Ship || object instanceof Ship){
                    }
                object.collideWith(currentObject);
                return true;
            }
        });
        i++;
    }
};

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