import React from 'react'

const Input = ({ colorValue, setColorValue }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add color name</label>
            <input
                autoFocus
                type="text"
                placeholder="Add color name (e.g. crimson, darkcyan, orange, …)"
                required
                value={colorValue}
                onChange={(e) => setColorValue(e.target.value)} />
        </form>
    )
}

export default Input