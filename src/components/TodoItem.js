import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    };
    
    render() { 

        const { text, checked, id, onToggle, onRemove, color } = this.props;

        console.log(id);

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); //onToggle 실행 안되도록
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`} style={{color:color}}>
                    <div>{text}</div>
                </div>
                { checked && (<div className="chec-mark">✓</div>) }
            </div>
        );
    };
};

export default TodoItem;