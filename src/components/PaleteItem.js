import React from 'react';
import PropTypes from 'prop-types';

const PaleteItem = ({index, color, checked, onSetColor}) => {

    return (
        <div
            className={checked===true?"color active":"color false"}
            style={{backgroundColor: color}}
            onClick={() => onSetColor(index)}
        />
    );
};

PaleteItem.propTypes = {
    color: PropTypes.string,
    checked: PropTypes.bool,
    onSetColor: PropTypes.func
};

PaleteItem.defaultProps = {
    color: '#343a40',
    checked: false,
    onSetColor: () => console.warn('onSetColor not defined')
};

export default PaleteItem;