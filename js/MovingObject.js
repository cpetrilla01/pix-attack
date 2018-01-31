import constants from './constants.js';

export default class MovingObject {
	constructor(id, x, y, h, w, color, step) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
		this.color = color;
		this.step = step;

		this.render();
	}

	render() {
		let svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		svgNode.setAttribute('x', this.x);
		svgNode.setAttribute('y', this.y);
		svgNode.setAttribute('width', this.w);
		svgNode.setAttribute('height', this.h);
		svgNode.setAttribute('fill', this.color);
		svgNode.setAttribute('id', this.id);

		constants.ROOT_ELEMENT.appendChild(svgNode);

		this.domElement = document.getElementById(this.id);
	}

	update() {
		this.domElement.setAttribute('x', this.x);
		this.domElement.setAttribute('y', this.y);
		this.doUpdate = false;
	}

	destroy() {
		constants.ROOT_ELEMENT.removeChild(this.domElement);
		this.doDestroy = true;
		this.doUpdate = false;
	}
};