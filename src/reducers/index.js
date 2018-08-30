import * as types from '../actions/ActionTypes';

const initialState = {
    todoState: {
        input: '',
        todos: [
            { id: 0, text: 'aaa', checked: false, color: '#343a40' },
            { id: 1, text: 'bbb', checked: true, color: '#343a40' },
            { id: 2, text: 'ccc', checked: false, color: '#12b886' },
        ],
        colors: [
            {color: '#343a40', checked: true},
            {color: '#f03e3e', checked: false},
            {color: '#12b886', checked: false},
            {color: '#228ae6', checked: false}
        ]
    }
};

let id = 3;

function todo(state = initialState, action) {

    const { todoState } = state;

    switch (action.type) {
        case types.CHANGE:
            return {
                todoState: {
                    input: action.input,
                    todos: [...todoState.todos],
                    colors: [...todoState.colors]
                }
            };
        case types.CREATE:
            return {
                todoState: {
                    input: todoState.input,
                    todos: [
                        ...todoState.todos,
                        {
                            id: id++,
                            text: action.text,
                            checked: false,
                            color: action.text
                        }
                    ],
                    colors: [...todoState.colors]
                }
            };
        case types.REMOVE:
            return {
                todoState: {
                    input: todoState.input,
                    todos: [
                        ...todoState.todos.slice(0, action.index),
                        ...todoState.todos.slice(action.index+1, todoState.todos.length)
                    ],
                    colors: [...todoState.colors]
                }
            };
        case types.TOGGLE:
            return {
                todoState: {
                    input: todoState.input,
                    todos: [
                        todoState.todos.slice(0, action.index),
                        {
                            ...todoState.todos[action.index],
                            checked: !todoState.todos[action.index].checked,
                        },
                        todoState.todos.slice(action.index+1, todoState.todos.length)
                    ],
                    colors: [...todoState.colors]
                }
            };
        case types.SET_COLOR:
            return {
                todoState: {
                    input: todoState.input,
                    todos: todoState.todos,
                    colors: todoState.colors.map(
                        (item, index) => {
                            return {
                                color: item.color,
                                checked: index === action.index
                            }
                        }
                    )
                }
            };
        default:
            return state;
    };
};

export default todo;