document.addEventListener("DOMContentLoaded", function () {

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const countOfSquare = 4;
let positionX = [];
let positionY = [];
let speed = [];

const setParam = () => {
  for (let i = 0; i < countOfSquare; i++) {
    speed[i] = 2 * (i + 1);
    positionX[i] = speed[i] + 50;
    positionY[i] = 640 / (i + 1) ;
  }
};

const drowSquares = () => {
  for (let i = 0; i < countOfSquare; i++) {
    ctx.fillRect(positionY[i] , positionX[i], 20, 20);
  }
}; 

const moveSquare = () => {
  for (let i = 0; i < countOfSquare; i++) {
    positionX[i] += speed[i];  
  }
};

const checkPositionOfSquare = () => {
  let canvasHeight = canvas.clientHeight;
  for (let i = 0; i < countOfSquare; i++) {
    if(positionX[i] >= canvasHeight) {
      positionX[i] = 0;
    }
  }
};

setParam();

function animate() {  
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
  drowSquares();
  moveSquare();
  checkPositionOfSquare();


  requestAnimationFrame(animate);



  
}

animate();

});