import React, { useState, useEffect } from 'react';

function Input(props) {
    const [value, setValue] = useState("");

    return (
        <div className="input item-center">
            <input className="input-input" {...props} />
        </div>
    )
}

export default Input
