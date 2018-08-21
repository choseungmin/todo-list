import React, { Component } from 'react';
import PaletteItem from './PaletteItem';
import './PaletteList.css';

class Palette extends Component {

    /*
    const Color = ({ color, active, onClick }) => {
      // 구현
    }

    const Palette = ({colors, selected, onSelect}) => {
      // 구현
    };
    */
    render() {
        const { colors, onColor } = this.props;

        const paletteItems = colors.map(
            ({ color, checked },index) => (
                <PaletteItem
                    color={color}
                    checked={checked}
                    id = {index}
                    key={index}
                    onColor={onColor}
                />
            )
        );

        return (
            <div className="palette">
                {paletteItems}
            </div>
        );
    };


};

export default Palette;