import { fixTheMeerkat } from "./bug-meerkats";

describe('bug-meerkats', () => {

    test('should return head in first', () => {
        // Act
        const input = ['tail', 'body', 'head' ];
        const expected = ['head', 'tail', 'body'];

        // Arrange
        const result = fixTheMeerkat(input);

        // Assert
        expect(result).toStrictEqual(expected)
    });

    test('should return head in first idx is el equal to head', () => {
        // Act
        const input = ['body', 'head', 'tail'];
        const expected = ['head', 'body', 'tail'];

        // Arrange
        const result = fixTheMeerkat(input);

        // Assert
        expect(result).toStrictEqual(expected)
    });

});