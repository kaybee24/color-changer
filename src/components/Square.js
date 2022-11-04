import React from 'react';

const Square = ({ colorValue, hexValue }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorValue
            }}
        >
            <p>{colorValue}</p>
            <p>{hexValue}</p>
        </section >
    )
}

Square.defaultProps = { colorValue: "empty color value" }

export default Square