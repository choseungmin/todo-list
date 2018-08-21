import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    //각 Item 컨트롤 때에도(클릭하여 완료/미완료 로 변환시) 해당되지 않는 item 은 리랜더링 되지않도록 설정
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        //리랜더링 된 id 값 출력 (shouldComponentUpdate 가 제대로 작동 하는지 확인)
        console.log(id);

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    };
};

export default TodoItem;