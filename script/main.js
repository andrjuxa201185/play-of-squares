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