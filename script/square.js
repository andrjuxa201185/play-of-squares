class Square {
    constructor () {
      this.positionX = 0;
      this.positionY = 0;
      this.speedY = 1;
      this.colorSquare = "red";
    }

    setParam(speedY = 1){
      this.speedY = Math.random() * speedY;
      this.positionY = 0;
      this.positionX = Math.random() * (1040 - 30) ;
      this.colorSquare = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }

    drow(ctx){
      ctx.fillStyle = this.colorSquare;
      ctx.fillRect(this.positionX, this.positionY, 30, 30);
    }

    move(){
      this.positionY += this.speedY;  
    }

    checkPosition(elem){
      if(this.positionY >= elem.clientHeight ) {
        this.setParam(this.speedY);
      }     
    }
  }

