
Init();
AllignPieces();

var NextPos = [];
var Selectedpiece = undefined;

function PieceSelected() {
  var dataId = this.getAttribute('data-id');
  if (this.Selectedpiece != null){
    if (this.NextPos.includes(dataId)){
      ToggleHighlight(this);
    }
  }
  else{
    
    this.Selectedpiece = GetBlockData(dataId);
    
    if (this.Selectedpiece == undefined || this.Selectedpiece == null) return;
    
    ToggleHighlight(this);
    this.NextPos = GetNextPos(this.Selectedpiece);
  }
}

function ClearSelection() {
  var cells = document.querySelectorAll("td");
  for (var cell of cells) {
    cell.classList.remove("block-selected");
    cell.classList.remove("block-selected-green");
  }
}

function ToggleHighlight(block) {
  block.classList.toggle("block-selected");
}


function ToggleHighlightNextMove(block) {
  block.classList.toggle("block-selected-green");
}

function GetNextPos(block){
    let nextPos = [];
    switch (block.piece) {
      case "white-pawn":
      case "black-pawn":
        nextPos = MovePawn(block);
        break;
    
      default:
        break;
    }

  return nextpos;
}

function MovePawn(block) {
  let pos = Getpostion(block.dataId);

  let nextPos = [];
  let counterPos = [];

  if(block.team == "white"){

    nextPos.push((pos.row - 1)+'-'+pos.col);
    if(pos.row == 6){
      nextPos.push((pos.row - 2)+'-'+pos.col);
    }
    if(pos.row > 0 && pos.col < 7){
      let moveToRightPos = (pos.row - 1)+'-'+(pos.col + 1);
      counterPos.push(moveToRightPos);
    }

    if(pos.row > 0 && pos.col > 0){
      let moveToLeftPos = (pos.row - 1)+'-'+(pos.col - 1);
      counterPos.push(moveToLeftPos);
    }

  }
  else {
    nextPos.push((pos.row + 1)+'-'+pos.col);
    if(pos.row == 1){
      nextPos.push((pos.row + 2)+'-'+pos.col);
    }

    if(pos.row < 7 && pos.col < 7){
      let moveToRightPos = (pos.row + 1)+'-'+(pos.col + 1);
      counterPos.push(moveToRightPos);
    }

    if(pos.row < 7 && pos.col > 0){
      let moveToLeftPos = (pos.row + 1)+'-'+(pos.col - 1);
      counterPos.push(moveToLeftPos);
    }
  }

  invalidNextPos = [];
  nextPos.forEach(pos => {
    let nextblock = GetBlockData(pos);
    if (nextblock != undefined && nextblock != null){
      invalidNextPos.push(pos);
    }
  });

  invalidNextPos.forEach(pos => { nextPos.pop(pos) });


  invalidCounterPos = [];
  counterPos.forEach(pos => {
    let counterPos = GetBlockData(pos);
    if ((counterPos == undefined || counterPos == null) || block?.team == counterPos?.team){
      invalidCounterPos.push(pos);
    }
  });

  invalidCounterPos.forEach(pos => { counterPos.pop(pos) });
  
  counterPos.forEach(pos => { nextPos.push(pos) });

  //console.log(nextPos);
  nextPos.forEach(pos => {
    let block = document.getElementById(pos);
    ToggleHighlightNextMove(block);
  });

}

function Getpostion(string) {
  let values = string.split("-");
  return { row: parseInt(values[0]), col: parseInt(values[1]) };
}

function GetBlockData(id){
  let block = document.getElementById(id);

  var dataId = block.getAttribute('data-id');
  var piece = block.getAttribute('data-piece');
  var team = block.getAttribute('data-team');
  var blockColor = block.getAttribute('data-blockcolor');
  
  if (piece == '' || piece == null || piece == undefined) return null;

  return { dataId, piece, blockColor, team };
}

