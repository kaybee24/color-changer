import React from 'react'

const Square = ({ colorValue }) => {
    return (
        <section
            className="square"
            style={{ backgroundColor: colorValue }}
        >
            <p>{colorValue}</p>
        </section >
    )
}

Square.defaultProps = { colorValue: "empty color value" }

export default Square