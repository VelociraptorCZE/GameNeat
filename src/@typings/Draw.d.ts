/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default interface Draw {
    drawText (options: DrawTextOptions): object
    drawRectangle (options: DrawRectangleOptions): object
    clearText (textId: any): boolean
    setFontSize (fontSize: number): void
    setStrokeColor (color: string): void
    setStrokeAndFillColor (color: string): void
    setFillColor (color: string): void
    setFont (fontFamily: string): void
}

interface DrawTextOptions {
    content: string
    x: number
    y: number
    strokeColor?: string
    fillColor?: string
    fill?: boolean
    data?: object
    textId?: any
}

interface DrawRectangleOptions {
    x1: number
    x2: number
    y1: number
    y2: number
    strokeColor?: string
    fillColor?: string
    fill?: boolean
    rectId?: any
}