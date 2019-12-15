/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default interface GameObject {
    setPosition (x: number, y: number): void
    setRelativePosition (x: number, y: number): void
    setObjectSize (width: number, height: number)
    setSprite (imageUrl: string, spriteWidthOptions: SpriteImageWidthOptions): HTMLImageElement
    setVerticalSpeed (speed: number): void
    setHorizontalSpeed (speed: number): void
    setSpeed (speed: number): void
    isFreeXOnLeft (x): boolean
    isFreeXOnRight (x): boolean
    isFreeYOnBottom (y): boolean
    isFreeYOnTop (y): boolean
    readonly isColliding: boolean
    isCollidingWith (instance: GameObject | string): boolean
    onCollision (): void
    onKey (key: string, callback: Function): void
    onKeyDown (key: string, callback: Function): void
    onKeyUp (key: string, callback: Function): void
}

interface SpriteImageWidthOptions {
    widthMultiplier?: number
    heightMultiplier?: number
}