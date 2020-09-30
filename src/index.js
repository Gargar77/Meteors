const MovingObject = require("./moving_objects.js");
const Game = require("./game");
const GameView = require("./game_view");
const Ship = require("./ship.js");


window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('game-canvas');
    canvas.height = 600;
    canvas.width = 600;

    var ctx = canvas.getContext('2d');
Game.DIM_X = canvas.width;
Game.DIM_Y = canvas.height;

const game = new Game();

game.addObjects();

const gameView = new GameView(game,ctx);
gameView.start();

});



