const Game = require("./game");


function GameView(game,ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    let game = this.game;
    let ctx = this.ctx
 setInterval(function() {
    game.draw(ctx);
    game.step();
 },20);

}


module.exports = GameView;
