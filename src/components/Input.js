import React from 'react';
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue }) => {
    return (
        <>
            <h1>Add color using name or hex</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Add color name</label>
                <input
                    autoFocus
                    type="text"
                    placeholder="Add color using name or hex"
                    required
                    value={colorValue}
                    onChange={(e) => {
                        setColorValue(e.target.value);
                        setHexValue(colorNames(e.target.value));
                    }} />
            </form>
        </>
    )
}

export default Input