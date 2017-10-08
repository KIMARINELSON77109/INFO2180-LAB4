
//initialized as false since boundary is not touched yet
var checkIfboundaryTouched = false;

window.onload = function()
{
  var boundaries = document.querySelectorAll('.boundary');
  for (var i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].onmouseover = boundaryTouched;
    }
}

/*This fuction Checks if the class youlose has already been applied to the boundaries
and if not apply it, this is to prevent it from being applied everytime the mouse over
function event is ran*/

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
