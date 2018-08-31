import React from 'react';
import './TodoListTemplate.css';

import PaletteListContainer from '../containers/PaletteListContainer';
import TodoItemListContainer from '../containers/TodoItemListContainer';
import FormContainer from '../containers/FormContainer';

const TodoListTemplate = () => {

    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="palette-wrapper">
                <PaletteListContainer/>
            </section>
            <section className="form-wrapper">
                <FormContainer/>
            </section>
            <section className="todos-wrapper">
                <TodoItemListContainer/>
            </section>
        </main>
    );
};

export default TodoListTemplate;