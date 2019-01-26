document.addEventListener("DOMContentLoaded", function () {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const spanScore = document.querySelector("#score");
  const startBtn = document.querySelector("#start");
  const stopBtn = document.querySelector("#stop");

  const countOfSquare = 17;

  // let positionY = [];
  // let positionX = [];
  // let speed = [];
  // let colorSquare = [];

  let square = [];

  let score = 0;
  let raf; //requestAnimationFrame
  let isAnimated = false;

  class Square {
    constructor (positionX=0,positionY=0,speed=1,colorSquare="red") {
      this.positionX = positionX;
      this.positionY = positionY;
      this.speed = speed;
      this.colorSquare = colorSquare;
    }
    setParam(){
      this.speed = Math.random() * 5;
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

  // const setParam = (square) => {
  //     speed[square] = Math.random() * 5;
  //     positionY[square] = 0;
  //     positionX[square] = Math.random() * (640 - 20) ;
  //     colorSquare[square] = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  // };

  // const drowSquares = () => {
  //   for (let i = 0; i < countOfSquare; i++) {
  //     ctx.fillStyle = colorSquare[i];
  //     ctx.fillRect(positionX[i] , positionY[i], 20, 20);
  //   }
  // }; 

  // const moveSquare = () => {
  //   for (let i = 0; i < countOfSquare; i++) {
  //     positionY[i] += speed[i];  
  //   }
  // };
  
  // const checkPositionOfSquare = () => {
  //   let canvasHeight = canvas.clientHeight;
  //   for (let i = 0; i < countOfSquare; i++) {
  //     if(positionY[i] >= canvasHeight) {
  //       setParam(i);
  //     }
  //   }
  // };

  function animate() {  
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
    // drowSquares();
    // moveSquare();
    // checkPositionOfSquare();
    for (let i = 0; i < colorSquare; i++) {
      square[i] = new Square();
      square[i].setParam();
    }


    raf = requestAnimationFrame(animate);
  }


  canvas.addEventListener("mousedown", function (e) {
    let x = e.offsetX==undefined?e.layerX:e.offsetX;
    let y = e.offsetY==undefined?e.layerY:e.offsetY;
    for (let i = 0; i < countOfSquare; i++) {
      if (x > positionX[i] && x < (positionX[i] + 20) && y > positionY[i] && y < (positionY[i] + 20)) {
        setParam(i);
        score += 1;
        spanScore.innerText = score;
      }
  } 
  });

  startBtn.addEventListener("click", function(){
    if (isAnimated) return;
    score = 0;
    spanScore.innerText = score;
    for (let i = 0; i < countOfSquare; i++) {
      setParam(i);
    }
    animate();
    isAnimated = true;
  });

  stopBtn.addEventListener("click", function(){
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
    isAnimated = false;
  });
});