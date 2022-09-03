var matrix = [];

for (let row = 0; row < 8; row++) {
  matrix[row] = [];
  for (let col = 0; col < 8; col++) {
    matrix[row][col] = row + "-" + col;
  }
}

function validate(expression, num)
{
  return (expression < 0 || expression > 7 ? num : expression);
}

function getValue(val) {
  let value = val.split("-");
  let row = parseInt(value[0]);
  let col = parseInt(value[1]);

  let middle = matrix[row][col];

  let right = matrix[row][validate(col+1, col)];
  let left = matrix[row][validate(col-1, col)];
  let top = matrix[validate(row-1, row)][col];
  let bottom = matrix[validate(row+1, row)][col];
  
  let topright = matrix[validate(row-1, row)][validate(col+1, col)];
  let topleft = matrix[validate(row-1, row)][validate(col-1, col)];
  let bottomleft = matrix[validate(row+1, row)][validate(col-1, col)];
  let bottomright = matrix[validate(row+1, row)][validate(col+1, col)];

  console.log("middle       : " + middle);
  console.log("right        : " + right);
  console.log("left         : " + left);
  console.log("top          : " + top);
  console.log("bottom       : " + bottom);
  console.log("topright     : " + topright);
  console.log("topleft      : " + topleft);
  console.log("bottomright  : " + bottomright);
  console.log("bottomleft   : " + bottomleft);
}

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    process.stdout.write(`${matrix[row][col]} `);
  }
  console.log();
}

getValue("3-4");
