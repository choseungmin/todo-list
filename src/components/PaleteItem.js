import React, { Component } from 'react';

class PaleteItem extends Component {



    render() {

        const { color, checked, onColor } = this.props;

        return (
            <div
                className={checked===true?"color active":"color false"}
                style={{backgroundColor: color}}
                onClick={() => onColor(color)}
            />
        )
    }
};

export default PaleteItem;