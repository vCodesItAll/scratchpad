describe('Sudoku', function() {
  it ('should be valid', function() {
    Test.assertEquals(goodSudoku1.isValid(), true);
    Test.assertEquals(goodSudoku2.isValid(), true);
  });

  it ('should be invalid', function() {
    Test.assertEquals(badSudoku1.isValid(), false);
    Test.assertEquals(badSudoku2.isValid(), false);
  });
});