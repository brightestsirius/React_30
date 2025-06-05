// 🟢 Примітивні типи
let username: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// Масиви
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Bob", "Charlie"];

// any (уникайте за можливості): Тип, що вимикає перевірку типів.
let data: any = "some value";
data = 123;

// unknown (безпечніша альтернатива any): Потрібно перевіряти тип перед використанням.
let unknownValue: unknown = "hello";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

// void: Для функцій, які нічого не повертають.
function logMessage(message: string): void {
    console.log(message);
}

// 🟢 Функції:
function add(a: number, b: number): number {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
};