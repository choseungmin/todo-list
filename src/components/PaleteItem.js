import React, { Component } from 'react';

class PaleteItem extends Component {



    render() {

        const { color, checked } = this.props;

        console.log(checked)
        return (
            <div

                className={checked===true?"color active":"color false"}
                style={{backgroundColor: color}}
            />
        )
    }
};

export default PaleteItem;