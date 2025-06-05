import React, { useState } from 'react'

const InputForm = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Submitted value: ${value}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: `10px 0` }}>
            <input type="text" value={value} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputForm;