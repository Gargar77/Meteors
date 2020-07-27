// Utility code, especially vector math stuff.

const Util = {
    inherits: function(parent,child) {
        let Surrogate = function() {};
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();
        child.prototype.constructor = child;
    },

    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
      },
      // Scale the length of a vector by the given amount.
      scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
      },

      norm(vec) {
        return Util.dist([0, 0], vec);
      },

      // Normalize the length of the vector to 1, maintaining direction.
    dir(vec) {
      const norm = Util.norm(vec);
      return Util.scale(vec, 1 / norm);
    },

    dist(pos1,pos2) {
      return Math.sqrt(
        Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
      );
    }


};


module.exports = Util;