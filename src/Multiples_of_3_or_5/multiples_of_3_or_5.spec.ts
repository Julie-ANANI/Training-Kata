import { multiples_of_3_or_5 } from "./multiples_of_3_or_5";

describe('multiples_of_3_or_5', () => {

    test('should return the multiple 3 if the input is multiple of 3', () => {
        // Act
        const inputNumber = 3
        const expected = 3

        // Arrange
        const result = multiples_of_3_or_5(inputNumber)

        // Assert
        expect(result).toBe(expected)
    });
});