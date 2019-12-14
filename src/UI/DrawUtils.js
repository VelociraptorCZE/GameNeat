/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export const generateId = listId => function (id) {
    let generatedNumbers = 0;

    const MAX_NUMBER = 99999;
    const list = this[listId];

    while (id === void 0 || (list.hasOwnProperty(id) && generatedNumbers < MAX_NUMBER)) {
        id = this.random.next(1, MAX_NUMBER);
        ++generatedNumbers;
    }

    return id;
};
