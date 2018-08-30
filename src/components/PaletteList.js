import React, { Component } from 'react';
import PaletteItem from './PaleteItem'
import './PaletteList.css';


class PaletteList extends Component {

        render() {

            const { colors, onColor } =  this.props;

            const paletteList = colors.map(
                ( {color, checked}, i) => (
                    <PaletteItem key={i} color={color} checked={checked} onColor={onColor}/>
                )
            )

        return (
            <div className="paletteList" style={{backgroundColor: '#f1f3f5'}}>

                { paletteList }
            </div>
        )
    };
};

export default PaletteList;