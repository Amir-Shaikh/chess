var matrix = [];
var blackTeamAllignment = [
  { id:"0-0", piece:"black-rook", team:"black" },
  { id:"0-1", piece:"black-horse", team:"black" },
  { id:"0-2", piece:"black-bishop", team:"black" },
  { id:"0-3", piece:"black-queen", team:"black" },
  { id:"0-4", piece:"black-king", team:"black" },
  { id:"0-5", piece:"black-bishop", team:"black" },
  { id:"0-6", piece:"black-horse", team:"black" },
  { id:"0-7", piece:"black-rook", team:"black" },
  { id:"1-0", piece:"black-pawn", team:"black" },
  { id:"1-1", piece:"black-pawn", team:"black" },
  { id:"1-2", piece:"black-pawn", team:"black" },
  { id:"1-3", piece:"black-pawn", team:"black" },
  { id:"1-4", piece:"black-pawn", team:"black" },
  { id:"1-5", piece:"black-pawn", team:"black" },
  { id:"1-6", piece:"black-pawn", team:"black" },
  { id:"1-7", piece:"black-pawn", team:"black" }
];

var WhiteTeamAllignment = [
  { id:"6-0", piece:"white-pawn", team:"white" },
  { id:"6-1", piece:"white-pawn", team:"white" },
  { id:"6-2", piece:"white-pawn", team:"white" },
  { id:"6-3", piece:"white-pawn", team:"white" },
  { id:"6-4", piece:"white-pawn", team:"white" },
  { id:"6-5", piece:"white-pawn", team:"white" },
  { id:"6-6", piece:"white-pawn", team:"white" },
  { id:"6-7", piece:"white-pawn", team:"white" },
  { id:"7-0", piece:"white-rook", team:"white" },
  { id:"7-1", piece:"white-horse", team:"white" },
  { id:"7-2", piece:"white-bishop", team:"white" },
  { id:"7-3", piece:"white-queen", team:"white" },
  { id:"7-4", piece:"white-king", team:"white" },
  { id:"7-5", piece:"white-bishop", team:"white" },
  { id:"7-6", piece:"white-horse", team:"white" },
  { id:"7-7", piece:"white-rook", team:"white" }
  
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

function AllignPieces() {

    blackTeamAllignment.forEach(element => {
      document.getElementById(element.id).classList.add(element.piece);
      document.getElementById(element.id).setAttribute("data-piece",element.piece);
      document.getElementById(element.id).setAttribute("data-team",element.team);
    });

    WhiteTeamAllignment.forEach(element => {
      document.getElementById(element.id).classList.add(element.piece);
      document.getElementById(element.id).setAttribute("data-piece",element.piece);
      document.getElementById(element.id).setAttribute("data-team",element.team);
    });
}

