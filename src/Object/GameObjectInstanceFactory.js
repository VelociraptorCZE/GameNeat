/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import GameObject from "./GameObject";

export default class GameObjectInstanceFactory {
    constructor () {
        this.instances = [];
    }

    onInit ({ gameObjectList }) {
        this.gameObjectList = gameObjectList;
    }

    createInstance (gameObjectId) {
        const { gameObjectList, instances } = this;
        const gameObject = gameObjectList[gameObjectId];

        if (gameObject instanceof GameObject) {
            const instance = this._cloneObject(gameObject);
            instances.push(instance);
            return instance;
        }
    }

    removeInstance (instance) {
        const { instances } = this;
        const instanceIndex = instances.indexOf(instance);

        if (instanceIndex !== -1) {
            instances.splice(instanceIndex, 1);
        }
    }

    _cloneObject (gameObject) {
        const instance = Object.assign(new GameObject, gameObject);
        instance.pressedKeys = new Set;
        instance.collisionList = [];
        instance.keyEvents = [];
        return instance;
    }
}