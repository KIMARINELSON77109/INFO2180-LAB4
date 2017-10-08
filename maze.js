
 //This flag is set to to false  to indicate that class is not assigned to element as yet
let checkElementForClass = false;

 window.onload = function()
 {
   var boundary1 = document.getElementById('boundary1');

   boundary1.onmouseover=function(){
     if(!checkElementForClass){
       //This flag is set to true to indicate that class "youlose" is assigned to element
       checkElementForClass = true;
   		   boundary1.className += " youlose";
   	   }
    }
 }
