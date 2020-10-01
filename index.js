
// set initial count .
let count = 0 ;

// select values and buttoms
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");

// to see which button is selected ,, we go to its attribute



//selecting all the buttons baari baari  and adding event listeners .
for ( var i=0 ; i<btns.length; i++){
  btns[i].addEventListener("click",function(event){


/*    // this isiliye lgaya kyunki mujhe pata hai yaha button object ki baat ho rhii hai ......BUTTON OBJECT K innerHTML ko target krne k liye .
var buttonChosen = this.innerHTML;
alert(buttonChosen +" is clicked .");      */


var clickedButton = event.currentTarget.classList;

/*
jaanne k liye ki kaun sa button click huaa hai .

alert(clickedButton + " is clicked");
console.log(event.currentTarget.classList);
*/


//agar decrease select huaaa .

if(clickedButton.contains("decrease")){

//decrese me ye vaala audio

  var audio = new Audio("sounds/decrease.mp3");
  audio.play();
  count--;

}
else if(clickedButton.contains("increase")){
  var audio = new Audio("sounds/increase.mp3");
  audio.play();
  count++;
}
else
{
  var audio = new Audio("sounds/reset.mp3");
  audio.play();
  count =0;
}
value.textContent = count ;

if(count>0){
  value.style.color="green";
}
else if(count<0){
  value.style.color="red";
}
else{
  value.style.color="#222";
}


});
}
