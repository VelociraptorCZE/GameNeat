/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export function handleGameObjectKeyEvents (gameObject) {
    const { keyEvents, keyEventPressedKeys, keyUpEventPressedKeys } = gameObject;

    keyEvents.forEach(({ key, callback, isKeyUp }) => {
        if (keyEventPressedKeys.has(key) || (isKeyUp && keyUpEventPressedKeys.has(key))) {
            callback(gameObject);
            keyUpEventPressedKeys.delete(key);
        }
    });
}
