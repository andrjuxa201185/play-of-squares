class Play {
    constructor (canvas, Figure) {
        this.figure = Figure;
        this.square = [];
        this.raf;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.countOfSquare = 100;
        this.speed = 4;
        this.score = 0;
        this.isAnimated = false;
        this.timeOut = [];
    }

    animate () {
        this.isAnimated = true;
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight); 
        for (let i = 0; i < this.countOfSquare; i++) {
            if (this.square[i]) {
                if(this.square[i-1]){
                    this.square[i].drow(this.ctx, this.square[i-1].positionX, this.square[i-1].positionY);
                } 
                if(this.square[i-2]){
                    this.square[i].drow(this.ctx, this.square[i-2].positionX, this.square[i-2].positionY);
                } 
                if(this.square[i-3]){
                    this.square[i].drow(this.ctx, this.square[i-3].positionX, this.square[i-3].positionY);
                } 
                else {
                    this.square[i].drow(this.ctx, this.square[i].positionX, this.square[i].positionY);
                }

                this.square[i].move();
                this.square[i].checkPosition(this.canvas);
            }
        } 
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }

    start () {
        if (this.isAnimated) return;
        for (let i = 0; i < this.countOfSquare; i++) {
            this.timeOut[i] = setTimeout(() => {
                this.square[i] = new this.figure();
                this.square[i].setParam(this.speed);
            }, Math.random() * 8000);
        }
        this.animate();
    }

    stop () {
        cancelAnimationFrame(this.raf);
        this.isAnimated = false;
        for (let i = 0; i < this.countOfSquare; i++) {
            clearTimeout(this.timeOut[i]);
            this.square[i] = undefined;
        }
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight); 
        this.score = 0;
    }

    isCatch(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        for (let i = 0; i < this.countOfSquare; i++) {
            if (this.square[i]){
                if (x > this.square[i].positionX && x < (this.square[i].positionX + 20) && y > this.square[i].positionY && y < (this.square[i].positionY + 20)) {
                    this.square[i].setParam(this.speed);
                    return true;
                }
            }
        }
        return false;
    }
   
}