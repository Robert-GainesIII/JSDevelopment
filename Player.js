export class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.health = 100;
  }

  update() {
    // Update human logic here (input, animation, etc.)
  }

  draw(ctx) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, 20, 20);
  }
}
