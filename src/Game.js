/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

import GrumpyDI from "grumpydi";
import Scene from "./Scene/Scene";
import GameObjectFactory from "./Object/GameObjectFactory";
import GameObjectList from "./Object/GameObjectList";
import GameObjectInstanceFactory from "./Object/GameObjectInstanceFactory";
import GameObjectInstanceList from "./Object/GameObjectInstanceList";
import Draw from "./UI/Draw";
import Random from "./Math/Random";
import Sound from "./Sound/Sound";

export default () => GrumpyDI({
    draw: Draw,
    gameObjectFactory: GameObjectFactory,
    gameObjectList: GameObjectList,
    gameObjectInstanceList: GameObjectInstanceList,
    gameObjectInstanceFactory: GameObjectInstanceFactory,
    random: Random,
    scene: Scene,
    sound: Sound
}).container;