// the player! a MovingObject subclass

const MovingObject = require("./moving_objects");
const Util = require("./utils");


function Ship(options) {   
    options.vel = [0,0];
    options.radius = Ship.RADIUS;
    options.color = Ship.COLOR;

    MovingObject.call(this,options);
}

Util.inherits(MovingObject,Ship);

Ship.RADIUS = 10;
Ship.COLOR = "blue";

module.exports = Ship;