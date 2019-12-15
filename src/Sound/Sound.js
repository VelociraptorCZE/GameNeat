/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default class Sound {
    constructor () {
        this.sounds = {};
    }

    addSound (soundId, soundUrl) {
        this.sounds[soundId] = new Audio(soundUrl);
    }

    playSound (soundId) {
        this.sounds[soundId].play();
    }

    stopSound (soundId) {
        const sound = this.sounds[soundId];
        sound.currentTime = 0;
        sound.pause();
    }

    stopAllSounds () {
        Object.keys(this.sounds).forEach(this.stopSound.bind(this));
    }
}