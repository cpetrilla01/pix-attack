import constants from './constants.js';
import MovingObject from './MovingObject.js';

export default class Enemy extends MovingObject {
	constructor(gameRoot) {
		let randomXPosition = Math.random() * (constants.GAME.WIDTH  - constants.ENEMY.WIDTH);

		super(gameRoot, 'enemy', randomXPosition, 0, constants.ENEMY.HEIGHT, constants.ENEMY.WIDTH, constants.ENEMY.COLOR, constants.ENEMY.STEP);
	}

	update() {
		if (this.y >= constants.GAME.HEIGHT) {
			// game over
			this.destroy();
		} else {
			this.y += this.step;
			super.update();
		}
	}
};