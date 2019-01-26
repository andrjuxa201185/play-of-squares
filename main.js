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
      this.speed = 1;
      this.colorSquare = "red";
    }
    setParam(speed = 3){
      this.speed = Math.random() * speed + 0.5;
      this.positionY = 0;
      this.positionX = Math.random() * (640 - 20) ;
      this.colorSquare = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
    drowSquares(ctx){
      ctx.fillStyle = this.colorSquare;
      ctx.fillRect(this.positionX, this.positionY, 20, 20);
    }
    moveSquare(){
      this.positionY += this.speed; 
    }
    checkPositionOfSquare(elem){
      let canvasHeight = elem.clientHeight;
      if(this.positionY >= canvasHeight) {
        this.setParam();
      }
    }
  }


  function animate() {  
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
    for (let i = 0; i < countOfSquare; i++) {
      square[i].drowSquares(ctx);
      square[i].moveSquare();
      square[i].checkPositionOfSquare(canvas);
    }
    raf = requestAnimationFrame(animate);
  }

  canvas.addEventListener("mousedown", function (e) {
    let x = e.offsetX==undefined?e.layerX:e.offsetX;
    let y = e.offsetY==undefined?e.layerY:e.offsetY;
    for (let i = 0; i < countOfSquare; i++) {
      if (x > square[i].positionX && x < (square[i].positionX + 20) && y > square[i].positionY && y < (square[i].positionY + 20)) {
        square[i].setParam();
        score += 1;
        spanScore.innerText = score;
      }
    }
  });

  startBtn.addEventListener("click", function(){
    if (isAnimated) return;
    for (let i = 0; i < countOfSquare; i++) {
      square[i] = square[i] || new Square();
      square[i].setParam(speed);
    }
    score = 0;
    spanScore.innerText = score;
    animate();
    isAnimated = true;
  });

  stopBtn.addEventListener("click", function(){
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
    isAnimated = false;
  });

  applyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    countOfSquare = document.forms[0].number.value || 3;
    switch (document.forms[0].speed.value) {
      case "hard":
        speed = 6;
        break;
      case "medium":
        speed = 4;
        break;
      case "easy":
        speed = 2;
        break;
    }
  });
  
});