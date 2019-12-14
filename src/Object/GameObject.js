/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default class GameObject {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.setObjectSize();
    }

    setPosition (x, y) {
        this.x = x;
        this.y = y;
    }

    setRelativePosition (x, y) {
        this.setPosition(this.x + x, this.y + y);
    }

    setVerticalSpeed (speed) {
        this.verticalSpeed = speed;
    }

    setHorizontalSpeed (speed) {
        this.horizontalSpeed = speed;
    }

    setSpeed (speed) {
        this.setVerticalSpeed(speed);
        this.setHorizontalSpeed(speed);
    }

    setObjectSize (width = 0, height = 0) {
        this.width = width;
        this.height = height;
    }

    setSprite (imageUrl) {
        const sprite = new Image;
        sprite.src = imageUrl;
        sprite.onload = () => this.setObjectSize(sprite.naturalWidth, sprite.naturalHeight);
        return this.sprite = sprite;
    }

    onCollision () {}

    onKeyEvent (keyEvent, key, callback) {
        document.body.addEventListener(keyEvent, e => {
            if (e.key === key) callback(e);
        });
    }

    onKey (key, callback) {
        const { keyEvents, pressedKeys } = this;

        keyEvents.push({ key, callback });
        this.onKeyEvent("keydown", key, () => pressedKeys.add(key));
        this.onKeyEvent("keyup", key, () => pressedKeys.delete(key));
    }

    onKeyDown (key, callback) {
        this.onKeyEvent("keydown", key, callback);
    }

    onKeyUp (key, callback) {
        this.onKeyEvent("keyup", key, callback);
    }
}