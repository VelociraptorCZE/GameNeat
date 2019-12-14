/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import GameObject from "./GameObject";
import { GAME_OBJECT_ALREADY_EXISTS } from "../Exception/ErrorMessages";

export default class GameObjectFactory {
    onInit ({ gameObjectList }) {
        this.gameObjectList = gameObjectList;
    }

    createObject (gameObjectId, overrideObject) {
        if (this.gameObjectList.hasOwnProperty(gameObjectId) && !overrideObject) {
            throw Error(GAME_OBJECT_ALREADY_EXISTS);
        }

        const gameObject = new GameObject;
        gameObject.id = gameObjectId;
        return this.gameObjectList[gameObjectId] = gameObject;
    }
}