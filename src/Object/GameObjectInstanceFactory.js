/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

import GameObject from "./GameObject";

export default class GameObjectInstanceFactory {
    onInit ({ gameObjectList, gameObjectInstanceList, scene }) {
        this.gameObjectList = gameObjectList;
        this.instances = gameObjectInstanceList;
        this.scene = scene;
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
        const { canvas } = this.scene.canvasContext;

        const instance = Object.create(gameObject);
        instance.collisionList = [];

        if (typeof instance.mouseMoveEvent === "function") {
            canvas.addEventListener("mousemove", event => instance.mouseMoveEvent({ instance, event }));
        }

        return instance;
    }
}