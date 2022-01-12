
var buttons = document.querySelectorAll("button");

for(button of buttons) {
  button.addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch(key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

//Minified
// var buttons=document.querySelectorAll("button");for(button of buttons)button.addEventListener("click",function(){var n=this.innerHTML;makeSound(n),buttonAnimation(n)});function makeSound(n){switch(n){case"w":new Audio("sounds/crash.mp3").play();break;case"a":new Audio("sounds/kick-bass.mp3").play();break;case"s":new Audio("sounds/snare.mp3").play();break;case"d":new Audio("sounds/tom-1.mp3").play();break;case"j":new Audio("sounds/tom-2.mp3").play();break;case"k":new Audio("sounds/tom-3.mp3").play();break;case"l":new Audio("sounds/tom-4.mp3").play()}}function buttonAnimation(n){var e=document.querySelector("."+n);e.classList.add("pressed"),setTimeout(function(){e.classList.remove("pressed")},100)}document.addEventListener("keydown",function(n){makeSound(n.key),buttonAnimation(n.key)});
