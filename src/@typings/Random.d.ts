/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default interface Random {
    nextFloat (min?: number, max?: number): number
    next (min?: number, max?: number): number
}
