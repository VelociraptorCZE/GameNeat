/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export function handleGameObjectKeyEvents ({ keyEvents, pressedKeys }) {
    keyEvents.forEach(({ key, callback }) => {
        if (pressedKeys.has(key)) {
            callback();
        }
    });
}
