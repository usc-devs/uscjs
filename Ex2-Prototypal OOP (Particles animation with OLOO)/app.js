let App = (function () {
  let canvas = document.querySelector('.particles');
  let ctx = canvas.getContext('2d');
  let numberOfParticles = 105;
  let particlesRGB = [115, 70, 40];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particlesArray = [];

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

  // create all particles
  function init() {
    let size, x, y, directionX, directionY, color, newParticle;
    particlesArray = [];

    for (let i = 0; i < numberOfParticles; i++) {
      size = generateRandomNumber(1, 7);
      x = generateRandomNumber(size * 2, window.innerWidth);
      y = generateRandomNumber(size * 2, window.innerHeight);
      directionX = generateRandomNumber(-2.5, 4.5);
      directionY = generateRandomNumber(-2.5, 4.5);
      color = `rgb(${particlesRGB.join(',')})`;

      newParticle = Object.create(particle);
      newParticle.init(x, y, directionX, directionY, size, color);
      particlesArray.push(newParticle);
    }
  }

  // clear the canvas and animate all the particles
  function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particlesArray.forEach(particle => {
      particle.move();
    });

    requestAnimationFrame(animate);
  }

  init();
  requestAnimationFrame(animate);

  function generateRandomNumber(min, max) {
    return (Math.random() * (max - min + 1)) + min;
  }
})();