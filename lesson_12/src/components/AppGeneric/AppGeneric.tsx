import React, { useState } from 'react';

// Компонент, який може відображати значення будь-якого типу
interface DisplayValueProps<T> {
    data: T;
    formatter: (value: T) => string;
}

const DisplayValue = <T,>({ data, formatter }: DisplayValueProps<T>) => {
    return <div>Displayed Value: {formatter(data)}</div>;
};

// Використання
const AppGeneric = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("Jane");

    return (
        <div>
            <DisplayValue data={count} formatter={(num) => `Count is: ${num}`} />
            <DisplayValue data={name} formatter={(str) => `Name is: ${str.toUpperCase()}`} />
        </div>
    );
};