import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import { describe, it, expect } from 'vitest';

describe('Greeting component', () => {
    it('renders the correct name', () => {
        render(<Greeting name="World" />);
        // Використовуємо getByRole для пошуку елемента з певною роллю (наприклад, заголовок)
        expect(screen.getByRole('heading', { level: 2, name: /Hello, World!/i })).toBeInTheDocument();
        // Або getByText для пошуку тексту
        expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
    });

    it('renders the message when provided', () => {
        render(<Greeting name="Alice" message="Nice to meet you!" />);
        expect(screen.getByText(/Nice to meet you!/i)).toBeInTheDocument();
    });

    it('does not render the message when not provided', () => {
        render(<Greeting name="Bob" />);
        expect(screen.queryByText(/Nice to meet you!/i)).not.toBeInTheDocument(); // queryByText повертає null, якщо елемент не знайдено
    });
});