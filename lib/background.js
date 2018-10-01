class Background {
  constructor(options){
    this.image = new Image();
    this.image.src = options.src;
    this.height = options.height;
    this.width = options.width;
    this.x_pos = options.x_pos;
    this.y_pos = options.y_pos;
    this.ctx = options.ctx;
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    };
  }

  update(ctx) {
    ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    ctx.drawImage(this.image, this.x_pos + this.width, this.y_pos, this.width, this.height);
  }

  move() {
    this.x_pos -= 1;
    if (this.x_pos == -this.width){
      this.x_pos = 0;
    }
  }
}

export default Background;
