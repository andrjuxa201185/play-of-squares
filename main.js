document.addEventListener("DOMContentLoaded", function () {

  let raf; //requestAnimationFrame
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const spanScore = document.querySelector("#score");
  const startBtn = document.querySelector("#start");
  const stopBtn = document.querySelector("#stop");
  const applyBtn = document.querySelector("#apply");
  let countOfSquare = 10;
  let speed = 3;
  let square = [];
  let score = 0;
  let isAnimated = false;

  class Square {
    constructor () {
      this.positionX = 0;
      this.positionY = 0;
      this.speed = 3;
      this.colorSquare = "red";
    }
    setParam(speed = 3){
      this.speed = Math.random() * speed + 0.5;
      this.positionY = 0;
      this.positionX = Math.random() * (640 - 20) ;
      this.colorSquare = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
    drow(ctx){
      ctx.fillStyle = this.colorSquare;
      ctx.fillRect(this.positionX, this.positionY, 20, 20);
    }
    move(){
      this.positionY += this.speed; 
    }
    checkPosition(elem){
      let canvasHeight = elem.clientHeight;
      if(this.positionY >= canvasHeight) {
        this.setParam(this.speed);
      }
    }
  }

  const startAnimation = () => {
    if (isAnimated) return;
    for (let i = 0; i < countOfSquare; i++) {
      setTimeout(() => {
        square[i] = new Square();
        square[i].setParam(speed);
      }, Math.random() * 5000);
    }
    score = 0;
    spanScore.innerText = score;
    animate();
    isAnimated = true;
    stopBtn.style.backgroundColor = "green";
    stopBtn.disabled = false;
    startBtn.style.backgroundColor = "red";
    startBtn.disabled = true;
  };

  const stopAnimation = () => {
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
    isAnimated = false;
    for (let i = 0; i < countOfSquare; i++) {
      square[i] = undefined;
    }
    stopBtn.style.backgroundColor = "red";
    startBtn.style.backgroundColor = "green";
    stopBtn.disabled = true;
    startBtn.disabled = false;
  };

  function animate() {  
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
    for (let i = 0; i < countOfSquare; i++) {
      if (square[i]) {
        square[i].drow(ctx);
        square[i].move();
        square[i].checkPosition(canvas);
      }
    }
    raf = requestAnimationFrame(animate);
  }

  canvas.addEventListener("mousedown", function (e) { // not "click"!!!
    if (!isAnimated) return;
    let x = e.offsetX==undefined?e.layerX:e.offsetX;
    let y = e.offsetY==undefined?e.layerY:e.offsetY;
    for (let i = 0; i < countOfSquare; i++) {
      if (square[i]){
        if (x > square[i].positionX && x < (square[i].positionX + 20) && y > square[i].positionY && y < (square[i].positionY + 20)) {
          square[i].setParam(speed);
          score += 1;
          spanScore.innerText = score;
        }
      }
    }
  });

  startBtn.addEventListener("click", startAnimation);

  stopBtn.addEventListener("click", stopAnimation);

  applyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    stopAnimation();
    countOfSquare = document.forms[0].number.value || 10;
    if (countOfSquare > 1000){
      countOfSquare = 1000;
    }
    switch (document.forms[0].speed.value) {
      case "hard":
        speed = 8;
        break;
      case "medium":
        speed = 4;
        break;
      case "easy":
        speed = 1;
        break;
      default:
      speed = 1;
      break;
    }
  });
});