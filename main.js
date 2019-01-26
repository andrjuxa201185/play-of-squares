document.addEventListener("DOMContentLoaded", function () {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const countOfSquare = 17;
  let positionY = [];
  let positionX = [];
  let speed = [];
  let colorSquare = [];
  let score = 0;
  const spanScore = document.querySelector("#score");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#stop");



  const setParam = (square) => {
      speed[square] = Math.random() * 5;
      positionY[square] = 0;
      positionX[square] = Math.random() * (640 - 20) ;
      colorSquare[square] = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  };

  const drowSquares = () => {
    for (let i = 0; i < countOfSquare; i++) {
      ctx.fillStyle = colorSquare[i];
      ctx.fillRect(positionX[i] , positionY[i], 20, 20)
    }
  }; 

  const moveSquare = () => {
    for (let i = 0; i < countOfSquare; i++) {
      positionY[i] += speed[i];  
    }
  };
  
  const checkPositionOfSquare = () => {
    let canvasHeight = canvas.clientHeight;
    for (let i = 0; i < countOfSquare; i++) {
      if(positionY[i] >= canvasHeight) {
        setParam(i);
      }
    }
  };

  for (let i = 0; i < countOfSquare; i++) {
    setTimeout(function(){setParam(i);}, 100 * i);
  }



  function animate() {  
    // if (true) return;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
    drowSquares();
    moveSquare();
    checkPositionOfSquare();
    requestAnimationFrame(animate);
  }

  canvas.addEventListener("click", function (e) {
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


  animate();
});