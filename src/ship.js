// the player! a MovingObject subclass

const MovingObject = require("./moving_objects");
const Util = require("./utils");
const Bullet = require("./bullet");


function Ship(options) {   
    options.vel = [0,0];
    options.radius = Ship.RADIUS;
    options.color = Ship.COLOR;
    this.image = document.getElementById('spaceship');
    this.isWrappable = true;
    MovingObject.call(this,options);
}


Ship.RADIUS = 10;
Ship.COLOR = "blue";
Util.inherits(MovingObject,Ship);
// methods
Ship.prototype.relocate = function() {
    let randPos = this.game.randomPos();
    this.pos = randPos;
};

Ship.prototype.draw = function(ctx) {
    let posX = this.pos[0];
    let posY = this.pos[1];
    
    ctx.drawImage(this.image,posX - 40 ,posY - 45,80,80);
}

Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function() {
    const norm = Util.norm(this.vel);

    if (norm === 0) {
        // can't fire unless moving
        return;
    }

    const relVelocity = Util.scale(
        Util.dir(this.vel),
        Bullet.SPEED
    );

    console.log(relVelocity)

    const bulletVel = [
        relVelocity[0] + this.vel[0], relVelocity[1] + this.vel[1]
    ];

    const bullet = new Bullet({
        pos: this.pos,
        vel:bulletVel,
        color: this.color,
        game: this.game
    });

    this.game.bullets.push(bullet);

};

module.exports = Ship;