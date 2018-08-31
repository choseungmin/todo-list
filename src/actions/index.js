import * as types from './ActionTypes';

export const change = (input) => ({
    type: types.CHANGE,
    input: input
});

export const create = (input, color) => ({
    type: types.CREATE,
    input: input,
    color: color
});

export const remove = (index) => ({
    type: types.REMOVE,
    index: index
});

export const toggle = (index, todos) => ({
    type: types.TOGGLE,
    index: index
});

export const setColor = (index) => ({
    type: types.SET_COLOR,
    index
});