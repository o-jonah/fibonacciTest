const fibonacci = require('../fibonacci'); 

describe('Fibonacci Tests', () => {
    test('Fibonacci of 0 should be 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('Fibonacci of 1 should be 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('Fibonacci of 5 should be 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('Fibonacci of 10 should be 55', () => {
        expect(fibonacci(10)).toBe(55);
    });
});
