/**
 * GameNeat
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export const GAME_CANVAS_NOT_FOUND = "Canvas hasn't been found. Check if parameter is a Element or valid selector.";
export const GAME_OBJECT_ALREADY_EXISTS = `Game object with this id already exists.
If you want to create a new one with same id, pass true as a second parameter.`;
export const PARAMETER_NOT_A_FUNCTION = "Parameter to {fnName} must a function, however type {type} was passed.";

export const generateErrorMessage = (errorMessage, parameters) => {
	Object.keys(parameters).forEach(parameter => {
		errorMessage = errorMessage.split(`{${parameter}}`).join(parameters[parameter]);
	});

	return errorMessage;
};