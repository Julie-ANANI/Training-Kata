import { fixTheMeerkat } from "./bug-meerkats";

describe('bug-meerkats', () => {

    test('should return head in first', () => {
        // Act
        const input = ['tail', 'body', 'head' ];
        const expected = 'head';

        // Arrange
        const result = fixTheMeerkat(input);

        // Assert
        expect(result[0]).toBe(expected);
    });

    test('should return head always first idx is el equal to head', () => {
        // Act
        const input = ['body', 'head', 'tail'];
        const expected = 'body';

        // Arrange
        const result = fixTheMeerkat(input);

        // Assert
        expect(result[1]).toBe(expected);
    });

    test('should return body always second idx is el equal to body', () => {
        // Act
        const input = ['tail', 'body', 'head'];
        const expected =  'tail';

        // Arrange
        const result = fixTheMeerkat(input);

        // Assert
        expect(result[2]).toBe(expected);
    });

    test('should return tail always second idx is el equal to tail', () => {
        // Act
        const input = ['body', 'tail', 'head'];
        const expected = 'tail';

        // Arrange
        const result = fixTheMeerkat(input);

        // Assert
        expect(result[2]).toBe(expected);
    });

});