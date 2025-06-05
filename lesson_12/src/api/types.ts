export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: string;
}

// Тип для створення нового Todo (без ID та createdAt)
export type NewTodo = Omit<Todo, 'id' | 'createdAt'>;

// Тип для оновлення Todo (може оновлювати лише деякі поля)
export type UpdateTodo = Partial<NewTodo>; // Partial робить всі властивості опціональними