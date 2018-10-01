class Monkey {
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
  }

  collisionwith(otherobj) {
    var crash = true;
    if ((this.x_pos + this.width < otherobj.x_pos) ||
       (this.x_pos > otherobj.x_pos + otherobj.width) ||
       (this.y_pos + this.height < otherobj.y_pos) ||
       (this.y_pos > otherobj.y_pos + otherobj.height)) {
         crash = false;
      }
    if (this.y_pos === 0 || this.y_pos === 400) {
      crash = true;
    }
    return crash;
  }
}

export default Monkey;
