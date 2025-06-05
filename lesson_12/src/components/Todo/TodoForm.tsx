import React, { useState } from 'react';
import type { NewTodo } from '../../api/types';

interface TodoFormProps {
    onAdd: (newTodo: NewTodo) => void;
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
    const [title, setTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd({ title, completed: false });
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;