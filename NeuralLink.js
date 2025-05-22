export class NeuralLink {
  constructor(player, dino) {
    this.player = player;
    this.dino = dino;
    this.active = 'player'; // or 'dino'
  }

  toggle() {
    this.active = this.active === 'player' ? 'dino' : 'player';
    console.log('Switched to:', this.active);
  }
}
