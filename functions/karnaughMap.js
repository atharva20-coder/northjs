function solveKMap(map, variables) {
  // Validate inputs
  if (map.length % 2 !== 0 || map[0].length % 2 !== 0) {
    throw new Error("Invalid map dimensions.");
  }
  if (
    variables.length !== map.length / 2 &&
    variables.length !== map[0].length / 2
  ) {
    throw new Error("Number of variables does not match map size.");
  }

  // Define the bit patterns for each cell of the map
  const patterns = [];
  for (let i = 0; i < map.length; i++) {
    const row = [];
    for (let j = 0; j < map[0].length; j++) {
      const m = Math.max(map.length, map[0].length) / 2;
      row.push(parseInt((i / m).toString(2) + (j / m).toString(2), 2));
    }
    patterns.push(row);
  }

  // Find all the groups of adjacent 1's in the map
  const groups = [];
  for (let i = 0; i < map.length - 1; i++) {
    for (let j = 0; j < map[0].length - 1; j++) {
      if (
        map[i][j] === 1 &&
        map[i + 1][j] === 1 &&
        map[i][j + 1] === 1 &&
        map[i + 1][j + 1] === 1
      ) {
        const pattern = patterns[i][j];
        let group = groups.find((g) => g.pattern === pattern);
        if (!group) {
          group = { pattern: pattern, cells: [] };
          groups.push(group);
        }
        group.cells.push([i, j]);
      }
    }
  }

  // Sort the groups by the number of cells in each group
  groups.sort((a, b) => a.cells.length - b.cells.length);

  // Generate the output expression
  let expression = "";
  groups.forEach((group) => {
    const variablesInGroup = variables.filter(
      (variable, i) => ((group.pattern >> i) & 1) === 1
    );
    if (variablesInGroup.length > 0) {
      expression += variablesInGroup.join("") + " + ";
    }
  });

  // Remove the trailing '+'
  expression = expression.slice(0, -2);

  return expression;
}

module.exports = solveKMap;
