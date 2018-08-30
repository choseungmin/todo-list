import * as types from './ActionTypes';

export const change = (input) => ({
    type: types.CHANGE,
    input: input
});

export const create = (input, todos, color) => ({
    type: types.CREATE,
    input: input,
    todoState: todos,
    color: color
});

export const remove = (id, todos) => ({
    type: types.REMOVE,
    id: id,
    todoState: todos
});

export const toggle = (id, todos) => ({
    type: types.TOGGLE,
    id: id,
    todoState: todos
});

export const setColor = (index) => ({
    type: types.SET_COLOR,
    index
})