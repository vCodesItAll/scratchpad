function Sudoku(board) {
  var sqrt = Math.sqrt(board.length);
  var esum = board.length * (board.length + 1) / 2;

  function checkDigits(selection) {
    return selection.reduce(function(sum, digit) {
      return typeof digit == 'number' ? sum + digit : NaN;
    }, 0) == esum;
  }

  return {
    isValid: function() {
      return board.every(function(row, i) {
        return checkDigits(row) &&
               checkDigits(board.map(function(row) {
                 return row[i];
               })) &&
               checkDigits(board.map(function(_, j) {
                 return board[(i/sqrt|0)*sqrt+(j/sqrt|0)][i%sqrt*sqrt+j%sqrt];
               }));
      });
    }
  };
}