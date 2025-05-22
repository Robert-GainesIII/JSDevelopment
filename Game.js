import { Player } from './Player.js';
import { Dino } from './Dino.js';
import { NeuralLink } from './NeuralLink.js';

export function initGame() {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const player = new Player();
  const dino = new Dino();
  const neuralLink = new NeuralLink(player, dino);

  // Handle switching with keyboard input (e.g., press "E")
  window.addEventListener('keydown', (e) => {
    if (e.key === 'e') {
      neuralLink.toggle();
    }
  });

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (neuralLink.active === 'player') {
      player.update();
      player.draw(ctx);
    } else {
      dino.update();
      dino.draw(ctx);
    }

    requestAnimationFrame(gameLoop);
  }

  gameLoop();
}
