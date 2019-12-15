/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default interface Sound {
    addSound (soundId: any, soundUrl: string): void
    playSound (soundId: any): void
    stopSound (soundId: any): void
    stopAllSounds (): void
}