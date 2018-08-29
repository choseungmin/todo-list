import * as types from './ActionTypes';

export const create = ({ text }) => {
    type: types.CREATE,
    text
};

export const remove = ({ index }) => {
    type: types.REMOVE,
    index
};