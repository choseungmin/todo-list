import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ text, checked, index, onToggle, onRemove, color }) => {

    return (
        <div className="todo-item" onClick={() => onToggle(index)}>
            <div className="remove" onClick={(e) => {
                e.stopPropagation(); //onToggle 실행 안되도록
                onRemove(index)}
            }>&times;</div>
            <div className={`todo-text ${checked && 'checked'}`} style={{color:color}}>
                <div>{text}</div>
            </div>
            { checked && (<div className="chec-mark">✓</div>) }
        </div>
    )
};

TodoItem.propTypes = {
    text: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.number,
    onToggle: PropTypes.func,
    onRemove: PropTypes.func,
    color: PropTypes.string
};

TodoItem.defaultProps = {
    text: 'aaa',
    checked: false,
    id: 0,
    onToggle: () => console.warn('onToggle not defined'),
    onRemove: () => console.warn('onRemove not defined'),
    color: 'red'

};

export default TodoItem;