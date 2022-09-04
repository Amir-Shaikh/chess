var matrix = [];
var blackTeamAllignment = [
                            { id:"0-0", piece:"black-rook" },
                            { id:"0-1", piece:"black-horse" },
                            { id:"0-2", piece:"black-bishop" },
                            { id:"0-3", piece:"black-queen" },
                            { id:"0-4", piece:"black-king" },
                            { id:"0-5", piece:"black-bishop" },
                            { id:"0-6", piece:"black-horse" },
                            { id:"0-7", piece:"black-rook" },
                            { id:"1-0", piece:"black-pawn" },
                            { id:"1-1", piece:"black-pawn" },
                            { id:"1-2", piece:"black-pawn" },
                            { id:"1-3", piece:"black-pawn" },
                            { id:"1-4", piece:"black-pawn" },
                            { id:"1-5", piece:"black-pawn" },
                            { id:"1-6", piece:"black-pawn" },
                            { id:"1-7", piece:"black-pawn" }
                          ];

var WhiteTeamAllignment = [
                            { id:"6-0", piece:"white-pawn" },
                            { id:"6-1", piece:"white-pawn" },
                            { id:"6-2", piece:"white-pawn" },
                            { id:"6-3", piece:"white-pawn" },
                            { id:"6-4", piece:"white-pawn" },
                            { id:"6-5", piece:"white-pawn" },
                            { id:"6-6", piece:"white-pawn" },
                            { id:"6-7", piece:"white-pawn" },
                            { id:"7-0", piece:"white-rook" },
                            { id:"7-1", piece:"white-horse" },
                            { id:"7-2", piece:"white-bishop" },
                            { id:"7-3", piece:"white-queen" },
                            { id:"7-4", piece:"white-king" },
                            { id:"7-5", piece:"white-bishop" },
                            { id:"7-6", piece:"white-horse" },
                            { id:"7-7", piece:"white-rook" }
                            
                          ];

function Init(){

  for (let row = 0; row < 8; row++) {
    matrix[row] = [];
    for (let col = 0; col < 8; col++) {
      matrix[row][col] = row + "-" + col;
    }
  }
  
  var cells = document.querySelectorAll("td");

  for (var cell of cells) {
    cell.addEventListener('click', BlockSelected);
  }
  
}

Init();

function AllignPieces() {

    blackTeamAllignment.forEach(element => {
      document.getElementById(element.id).classList.add(element.piece);
      document.getElementById(element.id).setAttribute("data-piece",element.piece);
    });

    WhiteTeamAllignment.forEach(element => {
      document.getElementById(element.id).classList.add(element.piece);
      document.getElementById(element.id).setAttribute("data-piece",element.piece);
    });
}
AllignPieces();


const SelectedBlockCount = 0;
var PreviousBlock = undefined;
var SelectedBlock = undefined;

function BlockSelected() {

  var dataId = this.getAttribute('data-id');
  var piece = this.getAttribute('data-piece');
  var blockColor = this.className.split(" ")[0];
  
  var cells = document.querySelectorAll("td");

  for (var cell of cells) {
    cell.classList.remove("block-selected");
  }
  
  this.SelectedBlockCount = this.SelectedBlockCount + 1;
  this.SelectedBlock = { dataId, piece, blockColor };

  if(this.SelectedBlockCount == 2){
    this.PreviousBlock = this.SelectedBlock;
  }
  
  this.classList.add("block-selected");
  
  console.clear();
  console.log(this.SelectedBlock);

}

function HighlightSelectedBlock(block) {

  this.blockSelected = true;
  block.classList.add("block-selected");
}

function IsValid(value)
{
  return (value < 0 || value > 7 ? false : true);
}

function Up(num) {
  let value = num - 1;
  return (IsValid(value) ? value : num);
}

function Down(num) {
  let value = num + 1;
  return (IsValid(value) ? value : num);
}

function Left(num) {
  let value = num - 1;
  return (IsValid(value) ? value : num);
}

function Right(num) {
  let value = num + 1;
  return (IsValid(value) ? value : num);
}

function getValue(val) {
  let value = val.split("-");
  let row = parseInt(value[0]);
  let col = parseInt(value[1]);

  let middle = matrix[row][col];

  let right = matrix[row][Right(col)];
  let left = matrix[row][Left(col)];
  let top = matrix[Up(row)][col];
  let bottom = matrix[Down(row)][col];
  
  let topright = matrix[Up(row)][Right(col)];
  let topleft = matrix[Up(row)][Left(col)];
  let bottomleft = matrix[Down(row)][Left(col)];
  let bottomright = matrix[Down(row)][Right(col)];

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
