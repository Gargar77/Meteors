

function GameView(game,ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.MOVES = {
    up:[0,-1],
    down:[0,1],
    left:[-1,0],
    right:[1,0]
};

GameView.prototype.start = function() {
    this.bindKeyHandlers();
    this.lastTime = 0;

    // start animation
    requestAnimationFrame(this.animate.bind(this));
//     let game = this.game;
//     let ctx = this.ctx
//  setInterval(function() {
//     game.draw(ctx);
//     game.step();
//  },20);
}

GameView.prototype.bindKeyHandlers = function() {
    const ship = this.game.ship;

    Object.keys(GameView.MOVES).forEach(function(m) {
        const move = GameView.MOVES[m];
        key(m,function() {ship.power(move); });
    });

    key('space', function() {ship.fireBullet()});
};

GameView.prototype.animate = function(time) {

    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

  // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));

};

module.exports = GameView;
