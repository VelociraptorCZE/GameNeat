/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default interface GameObject {
    setPosition (x: number, y: number): void
    setRelativePosition (x: number, y: number): void
    setObjectSize (width: number, height: number)
    setSprite (imageUrl: string): HTMLImageElement
    setVerticalSpeed (speed: number): void,
    setHorizontalSpeed (speed: number): void,
    setSpeed (speed: number): void,
    onCollision (): void,
    onKeyDown (key: string, callback: Function): void
    onKeyUp (key: string, callback: Function): void
}