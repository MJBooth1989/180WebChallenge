 var numSquares = 6;
 var colors= [];
 var colorPicked;
 var correct = new Audio('assets/sounds/correct.mp3');
 var incorrect = new Audio('assets/sounds/incorrect.mp3');
 var squares = document.querySelectorAll(".square");
 var displayColor = document.getElementById("colorDisplay");
 var displayMessage = document.querySelector("#correctWrongMessage");
 var h1 = document.querySelector("h1");
 var gameReset = document.querySelector("#resetGame");
 var gameModes = document.querySelectorAll(".gameMode");
 displayColor.textContent= colorPicked;

for (var i = 0; i < gameModes.length; i++){
    gameModes[i].addEventListener("click", function(){
        gameModes[0].classList.remove("selected");
        gameModes[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares= 6;
        generateColors();
    });
    
}

document.addEventListener("DOMContentLoaded", function(){
    
   generateColors(); 
});
 

gameReset.addEventListener("click", function(){
    generateColors();
    h1.style.backgroundColor="steelblue";
})


function generateColors(){
    
    colors= randomColorGenerator(numSquares);
    colorPicked = pickColor(); 
    displayColor.textContent= colorPicked;
    gameReset.textContent = "New Colours"
    displayMessage.textContent = "";
    
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor= colors[i];
        }else{
            squares[i].style.display = "none";
        }
    squares[i].style.backgroundColor= colors[i];
    
    squares[i].addEventListener("click", function(){
        var colorClicked = this.style.backgroundColor;
        console.log(colorClicked, colorPicked);
        if(colorClicked === colorPicked){
            
            displayMessage.textContent = "Correct"
            gameReset.innerText = "Play Again?"
            colorChange(colorClicked);
            h1.style.backgroundColor=colorPicked;
            correct.play();
        } else{
            this.style.backgroundColor="#232323";
            displayMessage.textContent="Try Again";
            incorrect.play();
            
        }
    });
}
}
function colorChange(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function randomColorGenerator(num){
    var arr =[];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    // pick red from 0 to 255
   var r = Math.floor(Math.random() * 256);
    // pick green from 0 to 255
   var g = Math.floor(Math.random() * 256);
    // pick blue from 0 to 255
   var b = Math.floor(Math.random() * 256);
   return "rgb("+ r + ", " + g + ", " + b + ")";
}
