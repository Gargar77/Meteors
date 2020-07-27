

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

    let game = this.game;
    let ctx = this.ctx
 setInterval(function() {
    game.draw(ctx);
    game.step();
 },20);
}

GameView.prototype.bindKeyHandlers = function() {
    const ship = this.game.ship;

    Object.keys(GameView.MOVES).forEach(function(m) {
        const move = GameView.MOVES[m];
        key(m,function() {ship.power(move); });
    });

    key('space', function() {ship.fireBullet()});
};

module.exports = GameView;
