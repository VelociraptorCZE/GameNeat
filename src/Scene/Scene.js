/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

import { GAME_CANVAS_NOT_FOUND } from "../Exception/ErrorMessages";
import {
    clearCanvas,
    drawTexts,
    drawAndHandleObjectEvents,
    setCanvasRenderProps,
    backgroundAnimation,
    drawRectangles
} from "./SceneOnRenderUtils";

export default class Scene {
    constructor () {
        this.setOnRenderCallback();
        this.isRendering = false;
    }

    onInit ({ gameObjectInstanceFactory, draw }) {
        this.gameObjectInstanceFactory = gameObjectInstanceFactory;
        this.draw = draw;
    }

    setCanvas (element) {
        const canvas = element instanceof HTMLCanvasElement ? element : document.querySelector(element);

        if (!canvas) {
            throw TypeError(GAME_CANVAS_NOT_FOUND);
        }

        return this.canvasContext = canvas.getContext("2d");
    }

    setBackground ({ backgroundUrl, backgroundColor, verticalSpeed = 0, horizontalSpeed = 0 }) {
        const { canvas } = this.canvasContext;

        if (backgroundUrl) {
            canvas.style.backgroundImage = `url("${backgroundUrl}")`;
            canvas.style.backgroundSize = "contain";
        }

        if (backgroundColor) {
            canvas.style.backgroundColor = backgroundColor;
        }

        this.bgVerticalSpeed = verticalSpeed;
        this.bgHorizontalSpeed = horizontalSpeed;
    }

    startRender () {
        this.isRendering = true;
        this.onRender();
    }

    stopRender () {
        this.isRendering = false;
    }

    setOnRenderCallback (callback = () => {}) {
        this._onRenderCallback = callback;
    }

    onRender () {
        if (!this.isRendering) {
            return;
        }

        requestAnimationFrame(() => {
            clearCanvas.call(this);
            setCanvasRenderProps.call(this);
            drawTexts.call(this);
            drawRectangles.call(this);
            drawAndHandleObjectEvents.call(this);
            backgroundAnimation.call(this);
            this._onRenderCallback();
            this.onRender();
        });
    }
}