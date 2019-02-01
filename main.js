window.addEventListener("load", function () {
  const canvas = document.getElementById('canvas');
  const startBtn = document.querySelector("#start");
  const stopBtn = document.querySelector("#stop");
  const spanScore = document.querySelector("#score");

  let play = new Play(canvas, Square);
  
  canvas.addEventListener("mousedown", (e) => {
    if (play.isCatch(e)) {
      play.score += 1;
      spanScore.innerHTML = play.score;
    }
  });

  startBtn.addEventListener("click", play.start.bind(play));
  
  stopBtn.addEventListener("click", play.stop.bind(play));
  stopBtn.addEventListener("click", () => {spanScore.innerHTML = 0; });


});









// document.addEventListener("DOMContentLoaded", function () {
//   let raf; //requestAnimationFrame
//   const canvas = document.getElementById('canvas');
//   const ctx = canvas.getContext('2d');
//   const spanScore = document.querySelector("#score");
//   const startBtn = document.querySelector("#start");
//   const stopBtn = document.querySelector("#stop");
//   const applyBtn = document.querySelector("#apply");
//   let countOfSquare = 10;
//   let speed = 3;
//   let square = [];
//   let score = 0;
//   let isAnimated = false;

  

//   const startAnimation = () => {
//     if (isAnimated) return;
//     for (let i = 0; i < countOfSquare; i++) {
//       setTimeout(() => {
//         square[i] = new Square();
//         square[i].setParam(speed);
//       }, Math.random() * 5000);
//     }
//     score = 0;
//     spanScore.innerText = score;
//     animate();
//     isAnimated = true;
//     stopBtn.style.backgroundColor = "green";
//     stopBtn.disabled = false;
//     startBtn.style.backgroundColor = "red";
//     startBtn.disabled = true;
//   };

//   const stopAnimation = () => {
//     cancelAnimationFrame(raf);
//     ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
//     isAnimated = false;
//     for (let i = 0; i < countOfSquare; i++) {
//       square[i] = undefined;
//     }
//     stopBtn.style.backgroundColor = "red";
//     startBtn.style.backgroundColor = "green";
//     stopBtn.disabled = true;
//     startBtn.disabled = false;
//   };

//   function animate() {  
//     ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
//     for (let i = 0; i < countOfSquare; i++) {
//       if (square[i]) {
//         square[i].drow(ctx);
//         square[i].move();
//         square[i].checkPosition(canvas);
//       }
//     } 
//     raf = requestAnimationFrame(animate);
//   }

//   canvas.addEventListener("mousedown", function (e) { // not "click"!!!
//     if (!isAnimated) return;
//     let x = e.offsetX==undefined?e.layerX:e.offsetX;
//     let y = e.offsetY==undefined?e.layerY:e.offsetY;
//     for (let i = 0; i < countOfSquare; i++) {
//       if (square[i]){
//         if (x > square[i].positionX && x < (square[i].positionX + 20) && y > square[i].positionY && y < (square[i].positionY + 20)) {
//           square[i].setParam(speed);
//           score += 1;
//           spanScore.innerText = score;
//         }
//       }
//     }
//   });

//   startBtn.addEventListener("click", startAnimation);
//   stopBtn.addEventListener("click", stopAnimation);
//   applyBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     stopAnimation();
//     countOfSquare = document.forms[0].number.value || 10;
//     if (countOfSquare > 1000){
//       countOfSquare = 1000;
//     }
//     switch (document.forms[0].speed.value) {
//       case "hard":
//         speed = 8;
//         break;
//       case "medium":
//         speed = 4;
//         break;
//       case "easy":
//         speed = 1;
//         break;
//       default:
//       speed = 1;
//       break;
//     }
//   });
// });