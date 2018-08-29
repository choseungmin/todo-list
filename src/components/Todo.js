import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({index, text}) => {
    return (
        <div className="Todo">
            {text}
        </div>
    )
};

Todo.proptypes = {
    index: PropTypes.number,
    todo: PropTypes.string
};

Todo.defaultProps = {
    index: 0,
    text: 'test'
};

export default Todo;