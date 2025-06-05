import React, { ReactNode } from 'react'

interface CardProps {
    title: string;
    children: ReactNode; // children може бути будь-яким елементом React
}

const Card = ({ title, children }: CardProps) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0', width: 'fit-content' }}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default Card;