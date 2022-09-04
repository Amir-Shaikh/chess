
Init();
AllignPieces();

var NextMoves = [];
var SelectedBlock = undefined;

function BlockSelected() {

  ClearSelection();

  var dataId = this.getAttribute('data-id');
  var piece = this.getAttribute('data-piece');
  var team = this.getAttribute('data-team');
  var blockColor = this.className.split(" ")[0];
  
  if (piece == '' || piece == null || piece == undefined) return;

  this.SelectedBlock = { dataId, piece, blockColor, team };
  HighlightSelectedBlock(this);
  
  AddToSelection(this.SelectedBlock);

  StepsOf(this.SelectedBlock);

  // console.clear();
  // console.log(this.SelectedBlock);
  // console.log(this.NextMoves);

}

function ClearSelection() {
  var cells = document.querySelectorAll("td");

  for (var cell of cells) {
    cell.classList.remove("block-selected");
  }
  
}

function HighlightSelectedBlock(block) {
  block.classList.add("block-selected");
}

function GetLastStoredIem(){
  var existingitems = JSON.parse(sessionStorage.getItem("SelectedItem"));
  if(existingitems == null) return null;
  return existingitems;
}

function AddToSelection(item){
  sessionStorage.setItem("SelectedItem", JSON.stringify(item));
}

function StepsOf(block){
    switch (block.piece) {
      case "white-pawn":
      case "black-pawn":
        MovePawn(block);
        break;
    
      default:
        break;
    }
}

function MovePawn(block) {
  let row = Getpostion(block.dataId, 0);
  let col = Getpostion(block.dataId, 1);

  let next = [];
  let step1, step2, step3;

  if(block.team == "white"){
    step1 = Up(row) + '-' + col;
    step2 = Up(row) + '-' + Left(col);
    step3 = Up(row) + '-' + Right(col); 
  }
  else {
    step1 = Down(row) + '-' + col;
    step2 = Down(row) + '-' + Left(col);
    step3 = Down(row) + '-' + Right(col);
  }

  next = [ step1, step2, step3 ];

  this.NextMoves = [];
  next.forEach(dataid => {
    if(IsValid(dataid)){
      let el = document.getElementById(dataid);
      let piece = el.getAttribute('data-piece');
      let team = el.getAttribute('data-team');

      if ((piece != '' || piece != null || piece != undefined) && (team != block.team)){
       this.NextMoves.push(dataid);
      }
    }
  });

  console.log(this.NextMoves);
}

function Getpostion(string, position) {
  let values = string.split("-");
  return parseInt(values[position]);
}

function IsValid(value)
{
  let validCount = 0;

  let row = Getpostion(value, 0);
  let col = Getpostion(value, 1);

  if(row >= 0 && row <= 7 ){
    validCount++;
  }

  if(col >= 0 && col <= 7 ){
    validCount++;
  }

  return (validCount == 2 ? true : false);
}

function Up(num) {
  return num - 1;
}

function Down(num) {
  return num + 1;
}

function Left(num) {
  return num - 1;
}

function Right(num) {
  return num + 1;
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
