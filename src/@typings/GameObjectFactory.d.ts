/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import GameObject from "./GameObject";

export default interface GameObjectFactory {
    createObject (gameObjectId: any, overrideObject?: boolean): GameObject
}