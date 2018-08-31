import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ todoState, onChange, onCreate, onKeyPress }) => {

    const { input, colors } = todoState;
    const color = colors.find(({ checked }) => checked === true).color;

    return (
        <div className="form" >
            <input
                value={ input }
                onChange={ (e) => onChange(e) }
                onKeyPress={ (e) => onKeyPress(e.key, input, color) }
                style={ {color: color} }
            />
            <div
                className="create-button"
                onClick={ () => onCreate(input, color) }
            >
                추가
            </div>
        </div>
    );
};

Form.propTypes = {
    todoState: PropTypes.object,
    onChange: PropTypes.func,
    onCreate: PropTypes.func,
    onKeyPress: PropTypes.func
};

Form.defaultProps = {
    todoState: {},
    onChange: () => console.warn('onChange not defined'),
    onCreate: () => console.warn('onCreate not defiend'),
    onKeyPress: () => console.warn('onKeyPress not defined')
};

export default Form;