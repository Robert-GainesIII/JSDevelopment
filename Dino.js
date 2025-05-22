export class Dino {
  constructor() {
    this.x = 200;
    this.y = 100;
    this.stamina = 100;
  }

  update() {
    // Update dino logic here (movement, attacks, etc.)
  }

  draw(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, 30, 20);
  }
}
