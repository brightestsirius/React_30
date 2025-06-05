import React, { useState, useEffect } from 'react';
import service from '../../api/mockapi';
import type { Todo, NewTodo, UpdateTodo } from '../../api/types';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        setLoading(true);
        setError(null);
        try {
            // Використання дженеріка для вказівки типу повернення
            const data = await service.get<Todo[]>('todos');
            // Сортуємо за датою створення, щоб новіші були зверху
            const sortedData = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setTodos(sortedData);
        } catch (err) {
            setError('Failed to fetch todos.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const addTodo = async (newTodo: NewTodo) => {
        try {
            const addedTodo = await service.post<Todo, NewTodo>('todos', newTodo);
            setTodos((prevTodos) => [addedTodo, ...prevTodos]);
        } catch (err) {
            setError('Failed to add todo.');
            console.error(err);
        }
    };

    const toggleTodo = async (id: string, completed: boolean) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        if (!todoToUpdate) return;

        const updatedFields: UpdateTodo = { completed }; // Використовуємо UpdateTodo

        try {
            const updatedTodo = await service.put<Todo, UpdateTodo>('todos', id, updatedFields);
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
            );
        } catch (err) {
            setError('Failed to update todo.');
            console.error(err);
        }
    };

    const deleteTodo = async (id: string) => {
        try {
            await service.delete<Todo>('todos', id); // Передаємо Todo, оскільки mockapi повертає видалений об'єкт
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (err) {
            setError('Failed to delete todo.');
            console.error(err);
        }
    };

    if (loading) {
        return <div>Loading todos...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>My TypeScript Todo App</h1>
            <TodoForm onAdd={addTodo} />
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
            {todos.length === 0 && !loading && <p>No todos yet. Add some!</p>}
        </div>
    );
}
