/*const { solveKMap } = require("../functions/karnaughMap");

describe('solveKMap', () => {
  test('should solve a 2x2 Karnaugh map with 2 variables', () => {
    const map = [
      [0, 1],
      [1, 0],
    ];
    const variables = ['A', 'B'];
    const result = solveKMap(map, variables);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(2);
    expect(result).toContain('A\'B');
    expect(result).toContain('AB');
  });

  test('should solve a 4x4 Karnaugh map with 4 variables', () => {
    const map = [
      [1, 0, 1, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 1],
      [0, 1, 1, 0],
    ];
    const variables = ['A', 'B', 'C', 'D'];
    const result = solveKMap(map, variables);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(4);
    expect(result).toContain('!A!B!C!D');
    expect(result).toContain('A!BCD');
    expect(result).toContain('AB!CD');
    expect(result).toContain('ABC!D');
  });
});
*/
