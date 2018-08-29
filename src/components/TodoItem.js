import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        console.log(id);

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); //onToggle 실행 안되도록
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                { checked && (<div className="chec-mark">✓</div>) }
            </div>
        );
    };
};

export default TodoItem;