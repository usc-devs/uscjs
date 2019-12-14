let App = (function () {
  let canvas = document.querySelector('.particles');
  let ctx = canvas.getContext('2d');
  let numberOfParticles = 105;
  let particlesRGB = [115, 70, 40];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // master object. responsible for drawing to the canvas
  let canvasDrawer = {
    drawCircle: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    },
    isInHorizontalBound: function () {
      return (this.x > canvas.width || this.x < 0);
    },
    isInVerticalBound: function () {
      return (this.y > canvas.height || this.y < 0);
    }
  };

  // the particle object. with a delegation link to the canvasDrawer
  let particle = {
    __proto__: canvasDrawer,
    init: function (x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    },

    move: function () {
      if (this.isInHorizontalBound()) {
        this.directionX = -this.directionX;
      }
      if (this.isInVerticalBound()) {
        this.directionY = -this.directionY;
      }

      this.x += this.directionX;
      this.y += this.directionY;

      this.drawCircle();
    }
  };
})();