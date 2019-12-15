/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default class GameObject {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.objectSize = {};
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

    setSprite (imageUrl, { widthMultiplier = 1, heightMultiplier = 1 }) {
        const sprite = new Image;
        sprite.src = imageUrl;
        sprite.onload = () => this.setObjectSize(
            sprite.naturalWidth * widthMultiplier,
            sprite.naturalHeight * heightMultiplier
        );

        return this.sprite = sprite;
    }

    onCollision () {}

    onKeyEvent (keyEvent, key, callback) {
        document.body.addEventListener(keyEvent, e => {
            if (e.key === key) callback(e);
        });
    }

    isCollidingWith (instance) {
        return this.collisionList.some(collisionInstance =>
            collisionInstance === instance || collisionInstance.id === instance
        );
    }

    get isColliding () {
        return this.collisionList.length > 0;
    }

    _isFree (callback) {
        const { collisionList } = this;
        return collisionList.filter(callback).length > 0 || collisionList.length === 0;
    }

    isFreeXOnLeft (x) {
        return this._isFree(collisionInstance => this.x + x < collisionInstance.x);
    }

    isFreeXOnRight (x) {
        return this._isFree(collisionInstance => this.x + x > collisionInstance.x);
    }

    isFreeYOnTop (y) {
        return this._isFree(collisionInstance => this.y + y < collisionInstance.y);
    }

    isFreeYOnBottom (y) {
        return this._isFree(collisionInstance => this.y + y > collisionInstance.y);
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