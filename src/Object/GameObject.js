/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export default class GameObject {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.keyEvents = [];
        this.objectSize = {};
        this.keyUpEventPressedKeys = new Set;
        this.keyEventPressedKeys = new Set;
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
        this.objectSize.width = width;
        this.objectSize.height = height;
    }

    setSprite (imageUrl, { widthMultiplier = 1, heightMultiplier = 1 } = {}) {
        const sprite = new Image;
        sprite.src = imageUrl;
        sprite.onload = () => this.setObjectSize(
            sprite.naturalWidth * widthMultiplier,
            sprite.naturalHeight * heightMultiplier
        );

        return this.sprite = sprite;
    }

    onCollision () {}

    _onKeyEvent (keyEvent, key, callback) {
        document.body.addEventListener(keyEvent, e => {
            if (e.key === key) {
                callback(e);
            }
        });
    }

    onMouseMove (callback) {
        this.mouseMoveEvent = callback;
    }

    isCollidingWith (instance) {
        return this.collisionList.some(
            collisionInstance => collisionInstance === instance || collisionInstance.id === instance
        );
    }

    get isColliding () {
        return this.collisionList.length > 0;
    }

    _isFree (callback) {
        const { collisionList } = this;

        return collisionList.filter(callback).length > 0 || collisionList.length === 0;
    }

    get isFreeXOnLeft () {
        return this._isFree(collisionInstance => this.x < collisionInstance.x);
    }

    get isFreeXOnRight () {
        return this._isFree(collisionInstance => this.x > collisionInstance.x);
    }

    get isFreeYOnTop () {
        return this._isFree(collisionInstance => this.y < collisionInstance.y);
    }

    get isFreeYOnBottom () {
        return this._isFree(collisionInstance => this.y > collisionInstance.y);
    }

    onKey (key, callback) {
        const { keyEvents } = this;

        keyEvents.push({ key, callback });
        this._onKeyEvent("keydown", key, () => this.keyEventPressedKeys.add(key));
        this._onKeyEvent("keyup", key, () => this.keyEventPressedKeys.delete(key));
    }

    onKeyUp (key, callback) {
        const { keyEvents } = this;

        keyEvents.push({ key, callback, isKeyUp: true });
        this._onKeyEvent("keyup", key, () => this.keyUpEventPressedKeys.add(key));
    }
}