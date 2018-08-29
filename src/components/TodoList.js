import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    const todoList = todos.map(
        (todo, i) => (
            <Todo
                key={i}
                {...todo}
            />
        )
    );

    return (
        <div className="todoList">
            { todoList }
        </div>
    )
};

TodoList.defaultProps = {
    todos: [
        {text: 'hello'},
        {text: 'world'}
    ]
};

export default TodoList;