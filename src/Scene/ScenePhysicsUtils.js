/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export function moveWithGameObject (gameObject) {
    const { horizontalSpeed, verticalSpeed } = gameObject;
    gameObject.x += horizontalSpeed || 0;
    gameObject.y += verticalSpeed || 0;
}

export function detectObjectCollisions (gameObject) {
    
}