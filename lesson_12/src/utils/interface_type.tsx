// 🟢 Об'єктні типи (інтерфейси та псевдоніми типів):
// Відмінності між interface та type (коротко):
// interface може бути реалізований класами, type – ні.
// interface може бути розширений (розширює себе) та об'єднаний (declaration merging), type – ні.
// type може описувати об'єднання або перетини типів.

// interface: Описує структуру об'єкта. Часто використовується для об'єктів та класів.
interface User {
    id: number;
    name: string;
    email?: string; // Опціональне поле
    readonly age: number; // Тільки для читання
}

const user1: User = { id: 1, name: "David", age: 25 };
// user1.age = 26; // Помилка, age є readonly

// type: Може створювати псевдоніми для будь-яких типів (примітивів, об'єктів, об'єднань).
type UserID = string | number; // Об'єднання типів (union type)
let userId: UserID = "abc-123";
userId = 123;

type Point = {
    x: number;
    y: number;
};

const origin: Point = { x: 0, y: 0 };