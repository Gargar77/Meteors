// kill spacerocks with this a MovingObject subclass

const MovingObject = require("./moving_objects");
const Util = require("./utils");

function Bullet(options) {
    options.radius = 3;
    options.color = 'red';

    MovingObject.call(this,options);
};

Util.inherits(MovingObject,Bullet);
Bullet.SPEED = 15;
Bullet.iswrappable = false;                 

module.exports = Bullet; 