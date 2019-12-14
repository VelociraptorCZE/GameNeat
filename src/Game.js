/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import GrumpyDI from "grumpydi";
import Scene from "./Scene/Scene";
import GameObjectFactory from "./Object/GameObjectFactory";
import GameObjectList from "./Object/GameObjectList";
import GameObjectInstanceFactory from "./Object/GameObjectInstanceFactory";
import Draw from "./UI/Draw";
import Random from "./Math/Random";

export default () => GrumpyDI({
    draw: Draw,
    gameObjectFactory: GameObjectFactory,
    gameObjectList: GameObjectList,
    gameObjectInstanceFactory: GameObjectInstanceFactory,
    random: Random,
    scene: Scene
}).container;