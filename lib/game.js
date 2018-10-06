import Monkey from './monkey_obj.js';
import Pipe from './pipes.js';
import Background from './background.js';

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.frameNo = 0;
    this.count = 0;
    this.flag = false;
    this.score = 0;
    this.dy = 1;
    this.rightPressed = false;

    this.monkey = new Monkey({
      x_pos: 50,
      y_pos: 120,
      width: 50,
      height: 50,
      src: "./assets/images/monkeyRun.png",
      ctx: this.ctx
    });

    this.background = new Background({
      x_pos: 0,
      y_pos: 0,
      width: 700,
      height: 450,
      src: "./assets/images/backgroundForest.jpg",
      ctx: this.ctx
    });

    this.pipes = [];
    this.intervalId = window.setInterval(this.updateGame.bind(this), 10);
  }

  bindKeyHandlers(){
    key('o', ()=>{
      this.rightPressed = true;
    });

    key('p', ()=>{
      this.rightPressed = false;
    });
  }


  drawScore() {
    this.ctx.font = "18px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Score: " + this.score, 10, 30);
  }

  updateGame() {
    this.bindKeyHandlers();
    this.monkey.image.src = "./assets/images/monkeyRun.png",
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.frameNo += 1;
    this.background.move();
    this.background.update(this.ctx);
    this.renderPipes();
    this.isGameover();
    this.move_monkey();
    this.move_pipes();
    this.monkey.update(this.ctx);
    this.updateScore();
  }

  everyInterval(n) {
    if (this.frameNo % n === 0){
      return true;
    } else {
      return false;
    }
  }

  isGameover() {
    for (let i = 0; i < this.pipes.length; i++){
      if (this.monkey.collisionwith(this.pipes[i])) {
        this.ctx.font="30px Verdana";
        this.ctx.fillStyle='black';
        this.ctx.fillText("You crashed! Final score: "+ this.score, 150, 250);
        clearInterval(this.intervalId);
        return;
      }
    }
  }

  move_monkey() {
    if(this.rightPressed) {
      this.monkey.y_pos -= this.dy;
    }
    else if (!this.rightPressed) {
      this.monkey.image.src = "./assets/images/monkeyJump.png",
      this.monkey.y_pos += this.dy;
    }
  }

  move_pipes() {
    for (let i = 0; i < this.pipes.length; i++){
      this.pipes[i].x_pos += -1;
      this.pipes[i].update(this.ctx);
    }
  }

  updateScore() {
    this.drawScore();
    if (this.pipes[(this.count)].x_pos >= 49 && this.pipes[(this.count)].x_pos <= 50 ) {
      if(this.flag === true){
        this.score += 1;
        this.flag = false;
      } else {
      this.flag = true;
      }
      this.count += 2;
    }
  }

  renderPipe(x_pos, y_pos, width, height, ctx,src){
    this.pipes.push(new Pipe({
      x_pos: x_pos,
      y_pos: y_pos,
      width: width,
      height: height,
      src: src,
      ctx: ctx
    }));
  }

  renderPipes() {
    if (this.frameNo == 1 || this.everyInterval(150)) {
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random()*(maxHeight-minHeight + 1) + minHeight);
      let minGap = 120;
      let maxGap = 280;
      let gap = Math.floor(Math.random()*minGap + minGap);
      this.renderPipe(this.canvas.width, 0, 40, height, this.ctx, "./assets/images/pipe2.png" );
      this.renderPipe(this.canvas.width-5, height, 50, 10, this.ctx, "./assets/images/pipe1.png" );
      this.renderPipe(this.canvas.width, 150 + gap,40, this.canvas.height-150-gap, this.ctx, "./assets/images/pipe2.png");
      this.renderPipe(this.canvas.width-5, 150 + gap,50, 10, this.ctx, "./assets/images/pipe1.png");
    }
  }
}

export default Game;
