
//Globally defined variables
var boundaries; var end; var start; var checkIfboundaryTouched = false;

window.onload = function()
{
  boundaries = document.querySelectorAll('.boundary');
  end = document.getElementById('end');
  end.onmouseover = testWin;
  start = document.getElementById('start');
  start.onclick = restart;
  for (var i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].onmouseover = boundaryTouched;
    }
}

/*This function Checks if the class youlose has already been applied to the
boundaries and if not apply it, this is to prevent it from being applied
everytime the mouse over function event is ran*/
let boundaryTouched = () =>
{
  if(!checkIfboundaryTouched){
    checkIfboundaryTouched = true;
  var boundaries = document.querySelectorAll('.boundary')
  for (var i = 0; i < boundaries.length - 1; i++) {
      boundaries[i].className += " youlose";
      }
   }
}
//This function checks if any boundary is touched and it not, alerts "You win"
let  testWin =() =>
{
  if(!checkIfboundaryTouched){
    alert("YOU WIN!!!");
  }
}

/*This function sets the flag "checkIfboundaryTouched" back to false to indicate
that no boundary as been touched and the loop sets the div classes back to
boundary*/
let restart = () =>
{
  checkIfboundaryTouched = false;
  for (var i = 0; i < boundaries.length - 1; i++) {
      boundaries[i].className = "boundary";
    }
}
