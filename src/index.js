
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
  let array = [];

  if(!matrix) {
     return [];
  } 
  else {
    if(matrix.length == 0) {
      return matrix;
    }
    else {
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
          matrix[i].sort((a, b) => b - a);
        }  
      }
      array = matrix.join(',').split(',');
      return array.map(element => Number(element));
    }
  }
}
