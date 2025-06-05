import React from 'react';
import type { Todo } from '../../api/types';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
    const handleToggle = () => {
        onToggle(todo.id, !todo.completed);
    };

    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            {todo.title}
            <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
        </li>
    );
};

export default TodoItem;