/**
 * GameNeat
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

import GameObject from "./GameObject";

export default interface GameObjectInstanceList {
    destroy (instance: GameObject): void
    count (gameObjectId: any): number
}