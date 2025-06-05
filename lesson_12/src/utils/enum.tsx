// 🟢 Enum – набір іменованих констант. 
// Дозволяє визначити набір пов'язаних значень, які роблять код більш читабельним 
// та менш схильним до помилок, ніж використання "магічних рядків" або чисел.

// Типи enum:
// 1. Числові (Numeric Enums): За замовчуванням значення починаються з 0.

enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

let playerDirection: Direction = Direction.Up;
console.log(playerDirection); // 0
console.log(Direction[0]);   // "Up"

// 2. Рядкові (String Enums): Кожне значення має бути ініціалізовано рядковим літералом.
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let selectedColor: Color = Color.Red;
console.log(selectedColor); // "RED"

// 3. Приклад у React – AppEnum.tsx