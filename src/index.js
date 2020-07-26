const MovingObject = require("./moving_objects.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('game-canvas');
    var ctx = canvas.getContext('2d');



    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
      });
    
      mo.draw(ctx);
});

