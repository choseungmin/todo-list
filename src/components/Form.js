import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, colors}) => {
    const color = colors.find(color => color.checked===true);

    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color: color.color}}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;