
//Globally defined variables
var boundaries; var end; var start; var statuss; var winGame = false;
var checkIfboundaryTouched = false;

window.onload = function()
{
  boundaries = document.querySelectorAll('.boundary');
  end = document.getElementById('end');
  end.onmouseover = testWin;
  start = document.getElementById('start');
  start.onclick = restart;
  statuss = document.getElementById('status');
  for (var i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].onmouseover = boundaryTouched;
    }
  maze = document.getElementById('maze');
  maze.onmouseleave = boundaryTouched;
}

/*This function Checks if the class youlose has already been applied to the
boundaries and if not apply it, this is to prevent it from being applied
everytime the mouse over function event is ran*/
let boundaryTouched = () =>
{
  if (winGame === false)
  {
      if(!checkIfboundaryTouched){
        checkIfboundaryTouched = true;
      var boundaries = document.querySelectorAll('.boundary');
     statuss.innerHTML = 'YOU LOSE!!!! :-( :-( CLICK YOUR MOUSE ON THE "S" TO BEGIN AGAIN';
      for (var i = 0; i < boundaries.length - 1; i++) {
      boundaries[i].className += " youlose";
      }
    }
  }
}
//This function checks if any boundary is touched and it not, indicates that you win."
let  testWin =() =>
{
  if(!checkIfboundaryTouched){
    winGame = true;
    statuss.innerHTML = 'YOU WIN!!!! :-) :-) CLICK YOUR MOUSE ON THE "S" TO BEGIN AGAIN';
  }
}

/*This function sets the flag "checkIfboundaryTouched" back to false to indicate
that no boundary as been touched and the loop sets the div classes back to
boundary*/
let restart = () =>
{
  winGame = false;
  checkIfboundaryTouched = false;
  statuss.innerHTML = 'Move your mouse over the "S" to begin.'
  for (var i = 0; i < boundaries.length - 1; i++) {
      boundaries[i].className = "boundary";
    }
}
