import constants from './constants.js';
import MovingObject from './MovingObject.js';

export default class Enemy extends MovingObject {
	constructor() {
		let randomXPosition = Math.random() * (constants.GAME.WIDTH  - constants.ENEMY.WIDTH);

		super(randomXPosition, 0, constants.ENEMY.HEIGHT, constants.ENEMY.WIDTH, constants.ENEMY.COLOR, constants.ENEMY.STEP);

		this.startMoving();
	}

	startMoving() {
		setInterval(() => {
			this.y += this.step;
			this.doUpdate = true;

			if (this.y > constants.GAME.HEIGHT)
			{
				// game over
				// this.destroy();
			}
		}, constants.ENEMY.SPEED);
	}
};