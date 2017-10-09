
//Globally defined variables
var boundaries; var end; var checkIfboundaryTouched = false;

window.onload = function()
{
  boundaries = document.querySelectorAll('.boundary');
  end = document.getElementById('end');
  end.onmouseover = win;
  for (var i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].onmouseover = boundaryTouched;
    }
}

/*This fuction Checks if the class youlose has already been applied to the
boundaries and if not apply it, this is to prevent it from being applied
everytime the mouse over function event is ran*/
function boundaryTouched()
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
function win(){
  if(!checkIfboundaryTouched){
    alert("YOU WIN!!!");
  }
}
