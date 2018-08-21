import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    // input(form)의 텍스트 수정시(state 변화시) todoItemList는 변함이 없으면 리랜더링 안되도록 하기
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    };
};

export default TodoItemList;