import React, { Component } from 'react';
import './PaletteList.css'

class PaletteItem extends Component {

    render() {
        const { color, id, checked, onColor } = this.props;

        return (
            <div className={"color " + (checked === true?"active":"false")}
                 style={{background: color}}
                 onClick={() => onColor(color)}
                >

            </div>
        )
    }
}

export default PaletteItem;