/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */
import Vector2 from "../Math/Vector2";

export default class GameObject {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.spriteDimensions = {};
        this.keyEvents = [];
        this.mouseEvents = new Map;
        this.keyUpEventPressedKeys = new Set;
        this.keyEventPressedKeys = new Set;
    }

    get isColliding () {
        return this.collisionList.length > 0;
    }

    get isFreeXOnLeft () {
        return this.#isFree(collisionInstance => this.x < collisionInstance.x);
    }

    get isFreeXOnRight () {
        return this.#isFree(collisionInstance => this.x > collisionInstance.x);
    }

    get isFreeYOnTop () {
        return this.#isFree(collisionInstance => this.y < collisionInstance.y);
    }

    get isFreeYOnBottom () {
        return this.#isFree(collisionInstance => this.y > collisionInstance.y);
    }

    getPosition () {
        return new Vector2(this.x, this.y);
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

    setSpriteDimensions (width = 0, height = 0) {
        this.spriteDimensions.width = width;
        this.spriteDimensions.height = height;
    }

    setSprite (imageUrl, { widthMultiplier = 1, heightMultiplier = 1 } = {}) {
        const sprite = new Image;
        sprite.src = imageUrl;
        sprite.onload = () => this.setSpriteDimensions(
            sprite.naturalWidth * widthMultiplier,
            sprite.naturalHeight * heightMultiplier
        );

        return this.sprite = sprite;
    }

    isCollidingWith (instance) {
        return this.collisionList.some(
            collisionInstance => collisionInstance === instance || collisionInstance.id === instance
        );
    }

    onCollision (instance) {}

    onRender (instance) {}

    onMouseMove (callback) {
        this.mouseEvents.set("mousemove", callback);
    }

    onKey (key, callback) {
        const { keyEvents } = this;

        keyEvents.push({ key, callback });
        this.#onKeyEvent("keydown", key, () => this.keyEventPressedKeys.add(key));
        this.#onKeyEvent("keyup", key, () => this.keyEventPressedKeys.delete(key));
    }

    onKeyUp (key, callback) {
        const { keyEvents } = this;

        keyEvents.push({ key, callback, isKeyUp: true });
        this.#onKeyEvent("keyup", key, () => this.keyUpEventPressedKeys.add(key));
    }

    #onKeyEvent (keyEvent, key, callback) {
        document.body.addEventListener(keyEvent, e => {
            if (e.key === key) {
                callback(e);
            }
        });
    }

    #isFree (callback) {
        const { collisionList } = this;

        return collisionList.filter(callback).length > 0 || collisionList.length === 0;
    }
}