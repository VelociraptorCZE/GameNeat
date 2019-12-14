/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import { generateId } from "./DrawUtils";

export default class Draw {
    constructor () {
        this.settings = {
            strokeColor: "#000",
            fillColor: "#000",
            fontSize: 16,
            font: "Segoe UI"
        };

        this.textList = {};
        this.rectList = {};

        this.generateTextId = generateId("textList").bind(this);
        this.generateRectId = generateId("rectList").bind(this);
    }

    onInit ({ scene, random }) {
        this.scene = scene;
        this.random = random;
    }

    drawText ({ content, x, y, fill, data = {}, strokeColor, fillColor, textId }) {
        return this.textList[textId || this.generateTextId(textId)] = { content, x, y, fill, data, strokeColor, fillColor };
    }

    drawRectangle ({ x1, x2, y1, y2, fill, strokeColor, fillColor, rectId }) {
        return this.rectList[rectId || this.generateRectId(rectId)] = { x1, x2, y1, y2, fill, strokeColor, fillColor };
    }

    clearText (textId) {
        return delete this.textList[textId];
    }

    setFontSize (fontSize) {
        this.settings.fontSize = fontSize;
    }

    setStrokeColor (color) {
        this.settings.strokeColor = color;
    }

    setFillColor (color) {
        this.settings.fillColor = color;
    }

    setStrokeAndFillColor (color) {
        this.setStrokeColor(color);
        this.setFillColor(color);
    }

    setFont (fontFamily) {
        this.settings.font = fontFamily;
    }
}