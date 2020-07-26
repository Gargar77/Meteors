const Game = require("./game");


function GameView(game,ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    let game = this.game;
    let ctx = this.ctx
    console.log(ctx);
    console.log(game);
 setInterval(function() {
    game.draw(ctx);
    game.moveObjects();
    console.log(`${game.asteroids[0].pos}`);
 },20);

}

module.exports = GameView;
