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
