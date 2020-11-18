/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

const COLLISION_COORDINATE_NAMES = [
    { axis: "x", side: "width" },
    { axis: "y", side: "height" }
];

export function moveWithGameObject (gameObject) {
    const { horizontalSpeed, verticalSpeed } = gameObject;
    gameObject.x += horizontalSpeed || 0;
    gameObject.y += verticalSpeed || 0;
}

export function detectObjectCollisions (instances, gameObject) {
    gameObject.collisionList = instances.filter(
        instance => instance !== gameObject && checkCollisionsWithOtherObject({ gameObject, instance })
    );

    if (gameObject.collisionList.length) {
        gameObject.onCollision(gameObject);
    }
}

function checkCollisionsWithOtherObject ({ gameObject, instance }) {
    return COLLISION_COORDINATE_NAMES.map(({ axis, side }) => (
        gameObject[axis] >= instance[axis] - gameObject.colliderSize[side]
        && (
            gameObject[axis] <= instance[axis] + gameObject.colliderSize[side]
            || instance[axis] + instance.colliderSize[side] >= gameObject[axis]
        )
    )).every(result => result);
}