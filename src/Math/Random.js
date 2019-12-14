/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default class Random {
    nextFloat (min = Integer.MIN_SAFE_INTEGER, max = Integer.MAX_SAFE_INTEGER) {
        return min + (Math.random() * (max - min));
    }

    next (min, max) {
        return Math.round(this.nextFloat(min, max));
    }
}