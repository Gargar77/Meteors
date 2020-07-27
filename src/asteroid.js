// spacerock. it inherits from MovingObject
const Util = require("./utils.js");
const MovingObject = require("./moving_objects");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 20,
    SPEED: 2
};

function Asteroid(options) {
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    options.radius = DEFAULTS.RADIUS;
    this.isWrappable = true;
    this.image = document.getElementById('asteroid');
    /* using call on the MovingObject module will allow us
    to save the module to this object!
    indirectly inheriting the constructor attributes
    think of call as using super in Ruby */
    MovingObject.call(this,options);

    // this will not save any prototype functions however,
    // we will need to do prototypal inheritance to link these two object's prototypes
};
Util.inherits(MovingObject,Asteroid);

Asteroid.prototype.draw = function(ctx) {
    let posX = this.pos[0];
    let posY = this.pos[1];
    ctx.drawImage(this.image,posX - 35 ,posY - 38,80,80);
}

Asteroid.prototype.collideWith = function collideWith(otherObject) {
    if(otherObject instanceof Ship) {
        otherObject.relocate();
        return true;
    } else if (otherObject instanceof Bullet) {
        this.game.remove(this);
    }
};



module.exports = Asteroid;


