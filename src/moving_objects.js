// Base class for anything that moves.


function MovingObject(options) {
    this.pos = options["pos"]
    this.vel = options["vel"]
    this.radius = options["radius"]
    this.color = options["color"]
    this.game = options["game"]
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
    let dx = this.vel[0];
    let dy = this.vel[1];
    let r = this.radius;

    let wrappedPos = this.game.wrap(this.pos[0],this.pos[1],r);

    let x = wrappedPos[0];
    let y = wrappedPos[1];
    this.pos = [x + dx , y + dy]; 
}

MovingObject.prototype.isCollidedWith= function(otherObject) {
    const pos1 = this.pos;
    const pos2 = otherObject.pos;
    const distance = this.distanceBetweenTwoPos(pos1,pos2);
    /* collision occurs if the distance between their center points
     is less than the sum of their radii*/

     return distance < (this.radius + otherObject.radius);

};

MovingObject.prototype.distanceBetweenTwoPos = function(pos1,pos2) {
   let diffX = pos1[0] - pos2[0];
   let diffY = pos1[1] - pos2[1];

    return Math.sqrt(Math.pow(diffX,2) + Math.pow(diffY,2));
};

MovingObject.prototype.collideWith = function(otherObject) {
   
};

  module.exports = MovingObject;
