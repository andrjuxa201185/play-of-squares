class Square {
    constructor () {
      this.positionX = 0;
      this.positionY = 0;
      this.speedY = 3;
      this.speedX = 3;
      this.colorSquare = "red";
    }
    setParam(speedY = 3, speedX = 1){
      this.speedY = Math.random() * speedY + 0.5;
      this.speedX = Math.random() * speedX;
      this.positionY = 0;
      this.positionX = Math.random() * (640 - 20) ;
      this.colorSquare = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
    drow(ctx, x, y){
      ctx.fillStyle = "grey";
      ctx.beginPath();
      ctx.moveTo(x + 10, y + 10);
      ctx.lineTo(this.positionX+10, this.positionY+10);
      ctx.lineTo(this.positionX+11, this.positionY+11);
      ctx.lineTo(x + 11, y + 11);
      ctx.fill();

      ctx.fillStyle = this.colorSquare;
      ctx.fillRect(this.positionX, this.positionY, 20, 20);
    }
    move(){
      this.positionY += this.speedY; 
      this.positionX += this.speedX; 
    }
    checkPosition(elem){
      let canvasHeight = elem.clientHeight;
      let canvasWidth = elem.clientWidth;

      if(this.positionY >= canvasHeight || this.positionY < 0) {
        // this.setParam(this.speed);
        this.speedY = -this.speedY;
      }
      if(this.positionX >= canvasWidth || this.positionX < 0) {
        this.speedX = -this.speedX;
      }
      
    }
  }

