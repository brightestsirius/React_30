// 🟢 Утилітні типи (Utility Types): Pick, Omit
// TypeScript надає вбудовані утилітні типи для перетворення існуючих типів.

// 1. Pick<Type, Keys>: Створює новий тип з Type, вибираючи лише вказані властивості (Keys).
interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

// Створюємо тип для відображення картки продукту, потрібні лише id, name, price
type ProductCardProps = Pick<Product, 'id' | 'name' | 'price'>;

const displayProduct: ProductCardProps = {
    id: "p123",
    name: "Laptop",
    price: 1200
};
// const displayProductError: ProductCardProps = { id: "p123", name: "Laptop", description: "..." }; // Помилка!

// 2. Omit<Type, Keys>: Створює новий тип з Type, виключаючи вказані властивості (Keys).

interface UserDetails {
    id: string;
    username: string;
    email: string;
    passwordHash: string; // Це поле ми не хочемо показувати клієнту
    createdAt: Date;
}

// Створюємо тип для API-відповіді, де не буде passwordHash
type PublicUserDetails = Omit<UserDetails, 'passwordHash'>;

const publicUser: PublicUserDetails = {
    id: "u456",
    username: "john_doe",
    email: "john@example.com",
    createdAt: new Date()
};
// const publicUserError: PublicUserDetails = { ...publicUser, passwordHash: "abc" }; // Помилка!