import React from 'react';
import PaletteItem from './PaleteItem'
import './PaletteList.css';



const PaletteList = ({ todoState, onSetColor }) => {

    const { colors } = todoState;

    const paletteList = colors.map(
        (item, i) => (
            <PaletteItem
                key={i}
                index={i}
                {...item}
                onSetColor={onSetColor}
            />
        )
    )

     return (
         <div className="paletteList" style={{backgroundColor: '#f1f3f5'}}>
             { paletteList }
         </div>
     )
};

export default PaletteList;