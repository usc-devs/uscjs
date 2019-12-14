let App = (function() {
  let canvas = document.querySelector('.particles');
  let ctx = canvas.getContext('2d');
  let numberOfParticles = 105;
  let particlesRGB = [115, 70, 40];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let canvasDrawer = {
    drawCircle: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    },
    isInHorizontalBound: function() {
      return (this.x > canvas.width || this.x < 0);
    },
    isInVerticalBound: function() {
      return (this.y > canvas.height || this.y < 0);
    }
  };
})();