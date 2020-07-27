const MovingObject = require("./moving_objects.js");
const Game = require("./game");
const GameView = require("./game_view");
const Ship = require("./ship.js");


window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('game-canvas');
    canvas.height = 500;
    canvas.width = 500;

    var ctx = canvas.getContext('2d');
Game.DIM_X = 500;
Game.DIM_Y = 500;

const game = new Game();

game.addObjects();

const gameView = new GameView(game,ctx);
console.log(game);
gameView.start();

});

