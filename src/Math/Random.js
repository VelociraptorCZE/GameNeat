/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export default class Random {
    nextFloat (min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        return min + (Math.random() * (max - min));
    }

    next (min, max) {
        return Math.round(this.nextFloat(min, max));
    }
}