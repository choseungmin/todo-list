import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({ todoState, onToggle, onRemove }) => {

    const { todos } = todoState;

    const todoList = todos.map(

        (item, i) => (
            <TodoItem
                key={i}
                index={i}
                onToggle={onToggle}
                onRemove={onRemove}
                {...item}
            />
        )
    );

    return (
        <div className="todoList">
            {todoList}
        </div>
    );
};

export default TodoItemList;