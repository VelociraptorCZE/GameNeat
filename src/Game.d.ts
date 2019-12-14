/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import Draw from "./@typings/Draw";
import Scene from "./@typings/Scene";
import GameObjectFactory from "./@typings/GameObjectFactory";
import GameObjectInstanceFactory from "./@typings/GameObjectInstanceFactory";
import Random from "./@typings/Random";

export default interface Game {
    scene: Scene,
    draw: Draw,
    gameObjectFactory: GameObjectFactory,
    gameObjectInstanceFactory: GameObjectInstanceFactory
    random: Random
}
