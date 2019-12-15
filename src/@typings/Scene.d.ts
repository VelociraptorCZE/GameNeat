/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default interface Scene {
    setCanvas (element: string | Element): CanvasRenderingContext2D
    setBackground (options: BackgroundOptions): void
    startRender (): void
    stopRender (): void
    setOnRenderCallback (callback: Function): void
}

interface BackgroundOptions {
    backgroundUrl?: string
    backgroundColor?: string
    verticalSpeed?: number
    horizontalSpeed?: number
}