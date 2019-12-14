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
            const instance = this.cloneObject(gameObject);
            instances.push(instance);
            return instance;
        }
    }

    cloneObject (gameObject) {
        const instance = Object.assign(new GameObject, gameObject);
        instance.collisionList = {};
        instance.pressedKeys = new Set;
        instance.keyEvents = [];
        return instance;
    }
}