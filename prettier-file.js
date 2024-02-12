snail = function(array) {
  let result = [];
  while (array.length) {
    // Get the first row and add it to the result
    result.push(...array.shift());
    
    // Get the last element from each remaining row and add them to the result
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    
    // Get the last row in reverse order and add it to the result
    if (array.length) {
      result.push(...array.pop().reverse());
    }
    
    // Get the first element from each remaining row in reverse order and add them to the result
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  
  return result;
}