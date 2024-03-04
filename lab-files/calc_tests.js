const { subtract, divide } = require('./calculator.js');

describe('Calculator', () => {
    describe('subtract', () => {
        test('should correctly subtract two positive numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('should correctly subtract two negative numbers', () => {
            expect(subtract(-5, -3)).toBe(-2);
        });

        test('should correctly subtract a positive number and a negative number', () => {
            expect(subtract(5, -3)).toBe(8);
        });
    });

    describe('divide', () => {
        test('should correctly divide two positive numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('should return error when dividing by zero', () => {
            expect(divide(10, 0)).toBe("Error: Division by zero is not allowed");
        });

        test('should correctly divide two negative numbers', () => {
            expect(divide(-10, -2)).toBe(5);
        });

        test('should correctly divide a positive number and a negative number', () => {
            expect(divide(10, -2)).toBe(-5);
        });
    });
});