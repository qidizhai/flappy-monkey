class Pipe {
  constructor(options){
    this.image = new Image();
    this.image2 = new Image();
    this.image.src = options.src;
    this.image.src2 = options.src2;
    this.height = options.height;
    this.width = options.width;
    this.x_pos = options.x_pos;
    this.y_pos = options.y_pos;
    this.ctx = options.ctx;
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    };
    this.image2.onload = () => {
      this.ctx.drawImage(this.image2, this.x_pos-5, this.height, 50, 10);
    };
  }

  update(ctx) {
    ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    ctx.drawImage(this.image2, this.x_pos-5, this.height, 50, 10);
  }
}

export default Pipe;
