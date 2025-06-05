import React from 'react'

interface GreetingProps {
    name: string;
    message?: string; // Опціональний пропс
}

// Використовуємо інлайн-типізацію пропсів
const Greeting = ({ name, message }: GreetingProps) => {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Greeting;