/**
 * GameNeat
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

export default class Vector2 {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}

	interpolate (vector, ratio) {
		const { x, y } = this;
		const { x: vectorX, y: vectorY } = vector;

		if (ratio > 1) {
			ratio = 1;
		}

		if (ratio <= 0) {
			ratio = .0000001;
		}

		const isVectorXHigher = vectorX > x;
		const isVectorYHigher = vectorY > y;

		const deltaX = (isVectorXHigher ? vectorX - x : x - vectorX) * ratio;
		const deltaY = (isVectorYHigher ? vectorY - y : y - vectorY) * ratio;

		return new Vector2(
			isVectorXHigher ? x + deltaX : x - deltaX,
			isVectorYHigher ? y + deltaY : y - deltaY
		);
	}
}