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

