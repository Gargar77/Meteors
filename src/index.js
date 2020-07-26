const MovingObject = require("./moving_objects.js");
const Game = require("./game");
const Asteroid = require("./asteroid")

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('game-canvas');
    canvas.height = 500;
    canvas.width = 500;
    
    var ctx = canvas.getContext('2d');

const game = new Game();

game.addAsteroids();
console.log(game.asteroids);
game.draw(ctx);
});

