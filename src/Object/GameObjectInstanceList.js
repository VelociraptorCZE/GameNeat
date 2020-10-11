/**
 * GameNeat
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

import GameObject from "./GameObject";

export default class GameObjectInstanceList extends Array {
	constructor () {
		super();
		this.shift();
	}

	destroy (instance) {
		const instanceIndex = this.indexOf(instance);

		if (instanceIndex === -1) {
			return false;
		}

		this.splice(instanceIndex, 1);
		return true;
	}

	count (gameObject) {
		const gameObjectId = gameObject instanceof GameObject ? gameObject.id : gameObject;

		return this.reduce((previousCount, instance) => previousCount + (instance.id === gameObjectId), 0);
	}

	findInstancesBy (gameObject) {
		const gameObjectId = gameObject instanceof GameObject ? gameObject.id : gameObject;

		return this.filter(instance => instance.id === gameObjectId);
	}
}