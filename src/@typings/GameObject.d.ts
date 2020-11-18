/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default interface GameObject {
    readonly isFreeXOnLeft: boolean
    readonly isFreeXOnRight: boolean
    readonly isFreeYOnBottom: boolean
    readonly isFreeYOnTop: boolean
    readonly isColliding: boolean

    setPosition (x: number, y: number): void
    setRelativePosition (x: number, y: number): void
    setObjectSize (width: number, height: number)
    setSprite (imageUrl: string, spriteOptions?: SpriteOptions): HTMLImageElement
    setVerticalSpeed (speed: number): void
    setHorizontalSpeed (speed: number): void
    setSpeed (speed: number): void
    isCollidingWith (instance: GameObject | string): boolean
    onCollision (instance: GameObject): void
    onRender (instance: GameObject): void
    onClick (callback: Function): void
    onMouseMove (callback: Function): void
    onKey (key: string, callback: Function): void
    onKeyUp (key: string, callback: Function): void
}

interface SpriteOptions {
    widthMultiplier?: number
    heightMultiplier?: number
    colliderWidthMultiplier?: number
    colliderHeightMultiplier?: number
}