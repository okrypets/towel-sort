
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];
  let result = matrix.reduce((acc, it, index) => {
    if (index % 2 !== 0) {
      let itReverse = it.reverse()
      return [...acc, ...itReverse]
    }
    return [...acc, ...it]
  }, []);
  return result;
}
