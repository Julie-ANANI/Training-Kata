import { multiples_of_3_or_5 } from "./multiples_of_3_or_5";

describe('multiples_of_3_or_5', () => {

    test('should return the number if the input is multiple of 3', () => {
        // Act
        const inputNumber = 9;
        const expected = inputNumber;

        // Arrange
        const result = multiples_of_3_or_5([inputNumber])

        // Assert
        expect(result).toBe(expected)
    });

    test('should return the number if the input is multiple of 5', () => {
        // Act
        const inputNumber = 10;
        const expected = inputNumber;

        // Arrange
        const result = multiples_of_3_or_5([inputNumber])

        // Assert
        expect(result).toBe(expected)
    });

    test('should return the number one if multiple of 3 and 5', () => {
        // Act
        const inputNumber = 15
        const expected = inputNumber;

        // Arrange
        const result = multiples_of_3_or_5([inputNumber])

        // Assert
        expect(result).toBe(expected)
    });

    test('should return 0 if the input is negatif', () => {
        // Act
        const inputNumber = -2
        const expected = 0

        // Arrange
        const result = multiples_of_3_or_5([inputNumber])

        // Assert
        expect(result).toBe(expected)
    });

    test('should return sum all number of list is multiple of 3', () => {
        // Act
        const inputNumber = [3,1,9,6,4];
        const expected = 18;

        // Arrange
        const result = multiples_of_3_or_5(inputNumber)

        // Assert
        expect(result).toBe(expected)
    });

});