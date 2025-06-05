import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('Counter component', () => {
    // Очищаємо моки після кожного тесту, якщо є
    beforeEach(() => {
        vi.useFakeTimers(); // Мокуємо таймери
    });

    afterEach(() => {
        vi.useRealTimers(); // Повертаємо реальні таймери
    });

    it('displays initial count of 0', () => {
        render(<Counter />);
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });

    it('increments the count when the button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByRole('button', { name: /Increment/i });

        fireEvent.click(incrementButton); // Імітуємо клік

        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });

    it('updates last updated time after increment', () => {
        render(<Counter />);
        const incrementButton = screen.getByRole('button', { name: /Increment/i });

        const mockDate = new Date(2025, 0, 1, 10, 0, 0); // 1 січня 2025, 10:00:00
        vi.setSystemTime(mockDate); // Встановлюємо "фейковий" час

        fireEvent.click(incrementButton);

        // Перевіряємо, що текст "Last updated:" присутній та відповідає очікуваному часу
        expect(screen.getByText(`Last updated: ${mockDate.toLocaleTimeString()}`)).toBeInTheDocument();
    });
});