// Base class for anything that moves.

function MovingObject(options) {
    this.pos = options["pos"]
    this.vel = options["vel"]
    this.radius = options["radius"]
    this.color = options["color"]
}

MovingObject.prototype.draw = function(ctx) {
    let posX = this.pos[0];
    let posY = this.pos[1];
    ctx.beginPath();
    ctx.arc(posX,posY,this.radius,0,Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function() {
    this.pos += this.vel;
}


  module.exports = MovingObject;
