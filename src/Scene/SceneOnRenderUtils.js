/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import { detectObjectCollisions, moveWithGameObject } from "./ScenePhysicsUtils";
import { handleGameObjectKeyEvents } from "./SceneControlUtils";

export function clearCanvas () {
    const { canvasContext } = this;
    canvasContext.clearRect(0, 0, canvasContext.canvas.clientWidth, canvasContext.canvas.clientHeight);
}

export function setCanvasRenderProps () {
    const { canvasContext, draw: { settings: { font, fontSize, strokeColor, fillColor } } } = this;

    canvasContext.font = `${fontSize}px ${font}, sans-serif`;
    canvasContext.fillStyle = fillColor;
    canvasContext.strokeStyle = strokeColor;
}

export function drawTexts () {
    const { canvasContext } = this;

    Object.values(this.draw.textList).forEach(({ content, x, y, fill, data, strokeColor, fillColor }) => {
        Object.entries(data).forEach(([ varName, varContent ]) => {
            content = content.split(`{${varName}}`).join(varContent);
        });

        setStrokeAndFillColor({ strokeColor, fillColor, canvasContext });

        if (fill) {
            canvasContext.fillText(content, x, y);
        }

        canvasContext.strokeText(content, x, y);
        canvasContext.restore();
    });
}

export function drawRectangles () {
    const { canvasContext } = this;

    Object.values(this.draw.rectList).forEach(({ x1, x2, y1, y2, fill, strokeColor, fillColor }) => {
        setStrokeAndFillColor({ strokeColor, fillColor, canvasContext });

        if (fill) {
            canvasContext.fillRect(x1, y1, x2, y2);
        }

        canvasContext.strokeRect(x1, y1, x2, y2);
        canvasContext.restore();
    });
}

export function drawAndHandleObjectEvents () {
    const { instances } = this.gameObjectInstanceFactory;

    Object.values(instances).forEach(gameObject => {
        const { x, y, sprite } = gameObject;
        handleGameObjectKeyEvents(gameObject);
        moveWithGameObject(gameObject);
        detectObjectCollisions(instances, gameObject);
        this.canvasContext.drawImage(sprite, x, y);
    });
}

export function backgroundAnimation () {
    const { canvas } = this.canvasContext;
    let { backgroundPositionY, backgroundPositionX } = canvas.style;

    backgroundPositionY = parseInt(backgroundPositionY || 0) + this.bgVerticalSpeed;
    backgroundPositionX = parseInt(backgroundPositionX || 0) + this.bgHorizontalSpeed;

    canvas.style.backgroundPositionY = backgroundPositionY + "px";
    canvas.style.backgroundPositionX = backgroundPositionX + "px";
}

function setStrokeAndFillColor ({ strokeColor, fillColor, canvasContext }) {
    canvasContext.save();

    if (strokeColor) {
        canvasContext.strokeStyle = strokeColor;
    }

    if (fillColor) {
        canvasContext.fillStyle = fillColor;
    }
}