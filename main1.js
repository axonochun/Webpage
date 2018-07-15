var arr = [];

arr[0]= new Image();
arr[0].src = "images/front/01.jpeg";

arr[1]= new Image();
arr[1].src = "images/front/02.jpeg";

arr[2]= new Image();
arr[2].src = "images/front/03.jpeg";

var i=0;

function slide(){
 document.getElementById("change-image").src= arr[i].src;
 i++;
 if(i==arr.length){
  i=0;
 }
 setTimeout(function(){ slide(); },3000);
}
