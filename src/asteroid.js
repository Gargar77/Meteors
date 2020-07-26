// spacerock. it inherits from MovingObject
const Util = require("./utils.js");
const MovingObject = require("./moving_objects");

const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 10,
    SPEED: 3
};

function Asteroid(options) {
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    options.radius = DEFAULTS.RADIUS;
    /* using call on the MovingObject module will allow us
    to save the module to this object!
    indirectly inheriting the constructor attributes
    think of call as using super in Ruby */
    MovingObject.call(this,options);

    // this will not save any prototype functions however,
    // we will need to do prototypal inheritance to link these two object's prototypes
};

Util.inherits(MovingObject,Asteroid);

module.exports = Asteroid;


