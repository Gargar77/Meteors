const Util = require("./utils");
const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Bullet = require("./bullet");

function Game() {
    this.asteroids = [];
    this.ship = null;
    this.bullets = [];
};
/* these constants are directly placed on the constructor function,
Because we want to make a clear distinction between the constants with the instace attributes
*/
Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 5;
Game.MAX_SHIP_POWER = 5;

Game.prototype.allObjects = function() {
    return [].concat(this.ship,this.asteroids,this.bullets);
}

Game.prototype.outOfBounds = function(object) {
    if( 
        (object.pos[0] > Game.DIM_X || object.pos[0] < 0) ||
        (object.pos[1] > Game.DIM_Y || object.pos[1] < 0)
        ) return true;

    return false;
};

Game.prototype.ensureMaxVelocity = function(max) {
    let velX = this.ship.vel[0];
    let velY = this.ship.vel[1];

    if(velX > max) {
        velX = max;
    }

    if(velX < -max) {
        velX = -max;
    }

    if(velY > max) {
        velY = max;
    }

    if(velY < -max) {
        velY = -max;
    }
    
    this.ship.vel = [velX,velY];
    return true;
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
    this.ensureMaxVelocity(Game.MAX_SHIP_POWER);
    this.checkCollisions();
    console.log(this.bullets)
};

Game.prototype.remove = function(object) {
    if (object instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(object), 1);
      } else if (object instanceof Asteroid) {
        this.asteroids.splice(this.asteroids.indexOf(object), 1);
      } else if (object instanceof Ship) {
        this.ships.splice(this.ships.indexOf(object), 1);
      } else {
        throw new Error("unknown type of object");
      }
};




module.exports =  Game;