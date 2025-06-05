// 🟢 Generics – механізм, що дозволяє створювати компоненти, функції та класи, які працюють з різними типами даних, 
// зберігаючи при цьому безпеку типів. Дозволяють "відкласти" визначення типу до моменту використання.

// 1. Функція, яка повертає перший елемент масиву будь-якого типу
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers); // firstNumber буде типу number

const strings = ["a", "b", "c"];
const firstString = getFirstElement(strings); // firstString буде типу string

// Дженерік з обмеженнями (constraints)
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Тепер ми знаємо, що T має властивість length
    return arg;
}

loggingIdentity({ length: 10, value: 3 });
// loggingIdentity(3); // Помилка: number не має властивості length

// 2. Інтерфейси/Типи:
interface Box<T> {
    value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 123 };

// 3. React-компоненти (приклад з useState): AppGeneric.tsx