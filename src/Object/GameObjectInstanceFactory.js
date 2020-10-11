/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

import GameObject from "./GameObject";

export default class GameObjectInstanceFactory {
    onInit ({ gameObjectList, gameObjectInstanceList }) {
        this.gameObjectList = gameObjectList;
        this.instances = gameObjectInstanceList;
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

    _cloneObject (gameObject) {
        const instance = Object.assign(new GameObject, gameObject);
        instance.keyEvents = [];
        instance.pressedKeys = new Set;
        instance.collisionList = [];

        return instance;
    }
}