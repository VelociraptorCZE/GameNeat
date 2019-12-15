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

export function detectObjectCollisions (instances, gameObject) {
    const { objectSize: { width, height } } = gameObject;

    gameObject.collisionList = instances.filter(instance => (
        instance !== gameObject
        && gameObject.x >= instance.x - width && gameObject.x <= instance.x + width
        && gameObject.y >= instance.y - height && gameObject.y <= instance.y + height
    ));

    if (gameObject.collisionList.length) {
        gameObject.onCollision();
    }
}