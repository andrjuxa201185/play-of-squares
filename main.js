
const countOfSquare = 3;
let positionX = [];
let speed = [];
let positionY = [];

for (let i = 0; i < countOfSquare; i++) {
  speed[i] = 2 * i;
  positionX[i] = speed[i];
  positionY[i] = canvas.clientWidth / i + 1;
  
}


function animate() {  
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth); 

  // drowSquares(countOfSquare)
  ctx.fillRect(positionY * 1, positionX, 20, 20);


  // moveSquare()                                                                   )
  positionX += speed;


  if(positionX >= canvas.clientHeight) {
    positionX = 0;
    for (let i = 0; i < countOfSquare; i++) {
      speed[i] = 2 * i;
      positionX[i] = speed[i];
      positionY[i] = canvas.clientWidth / i + 1;
      
    }
  }


  requestAnimationFrame(animate);
}


function drowSquares(countOfSquares, positionsX) {
  for (let i = 0; i < countOfSquares; i++) {
    ctx.fillRect(positionY[i] , positionsX[i], 20, 20);
  }
}


document.body.onload = animate;
