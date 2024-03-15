import { sumOfMultiple3or5 } from "./sum_of_multiple3or5";

describe('multiples_of_3_or_5', () => {

    test('should return 0 if the input is negatif', () => {
        // Act
        const inputNumber = -2
        const expected = 0

        // Arrange
        const result = sumOfMultiple3or5(inputNumber)

        // Assert
        expect(result).toBe(expected)
    });

    test('should return sum of 23 for sum multiple < 10', () => {
        // Act
        const inputNumber = 10
        const expected = 23;

        // Arrange
        const result = sumOfMultiple3or5(inputNumber)

        // Assert
        expect(result).toBe(expected)
    });

});