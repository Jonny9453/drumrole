//Detecting mouse Click press

var numberOfDrumsButtons= document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumsButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick(){
    // console.log(this);
    // this.style.color="white";
    // alert("I got clicked");
    var buttonInnerHTML =this.innerHTML;
    makeSound(buttonInnerHTML);
    buttinAnimation(buttonInnerHTML);

    
}


//Detecting KeyboardPress
document.addEventListener("keydown",key );

function key(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}




// var audio= new Audio("sounds/tom-1.mp3");
// audio.play();

function makeSound(key){
    switch (key){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();

        case "k":
            var crash =new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            default: console.lof(buttonInnerHTML);

    }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}