/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import GameObject from "./GameObject";

export default interface GameObjectInstanceFactory {
    createInstance (gameObjectId: any): GameObject | undefined
    removeInstance (instance: GameObject): void
}