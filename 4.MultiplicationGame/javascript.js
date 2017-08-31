var gamePlaying = false;
var timeRemaining;
var act;
var answerCorrect;
var score;
var answersWrong = 0;
// If we click on the start/reset button

document.getElementById("startReset").onclick= function(){
    if(gamePlaying ==true){ //Are we playing game? If yes:
     location.reload(); //reload page
   } else{
	 //If we are not playing
    // change the mode to playing
       gamePlaying=true;
       resetWrongAnswer();
       //set score to 0
       score = 0;
       document.getElementById("scoreValue").innerHTML = score;
       
       //show countdown box
       show("timeRemaining");
       timeRemaining = 60;
       document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
       
       
       hide("gameOver");
       
       //change the button to reset
       document.getElementById("startReset").innerHTML = "Reset Game";//change button to reset
       
       //start countdown
       countdownStart();
       
       //generate new Q's and A's
       qAGenerate();
   } 
}

for (i = 1; i < 5; i++){
    document.getElementById("box"+i).onclick = function(){
        
        if(gamePlaying ==true){
            
            if(this.innerHTML == answerCorrect){ //if clicked on correct answer
                score++; //add one to the score
                document.getElementById("scoreValue").innerHTML = score; //append the score to the span
                hide("wrong");
                show("correct"); //show the correct box for 1 second
                setTimeout(function() {
                    hide("correct")
                },1000);
                
                qAGenerate() //generate a new question
            }else{ //if the user gets the answer wrong
                
                hide("correct");
                show("wrong")
                timeRemaining-= 5; //decrease time by 5 seconds if user answers incorrect
                answersWrong ++; // add one to the answersWrong variable;
                setTimeout(function() {
                    hide("wrong")
                },1000);
                qAGenerate(); //generate a new question
            }
        }
        
    }
}
//functions
function countdownStart(){
    act = setInterval(function(){
        timeRemaining --;
        document.getElementById("timeRemainingValue").innerHTML= timeRemaining;
        if (timeRemaining ==0 || timeRemaining<0){
            countdownStop();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>" + "You got " +answersWrong + " answers wrong";
            hide("timeRemaining");
            hide("correct");
            hide("wrong")
            gamePlaying = false;
            document.getElementById("startReset").innerHTML = "Start Game"; 
        }
        
    },1000);
}


function countdownStop(){
    clearInterval(act);
}

function hide(Id){
 document.getElementById(Id).style.display = "none";
    
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}

function qAGenerate(){
    
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    answerCorrect= x*y;
    document.getElementById("question").innerHTML = x + "x" +y;
    var positionCorrect = 1+ Math.round(3*Math.random());
    document.getElementById("box" + positionCorrect).innerHTML = answerCorrect;
    
    //fill the other boxes with incorrect answers
    var answer = [answerCorrect];
    
    for(var i =1; i<5; i++){
        
        if (i != positionCorrect){
            var answerIncorrect;
            do{
                answerIncorrect = (1 +Math.round(9*Math.random())) *(1+Math.round(9*Math.random()));
            } while(answer.indexOf(answerIncorrect)>-1);
            document.getElementById("box" + i).innerHTML= answerIncorrect;
            answer.push(answerIncorrect);
        }
    }
}

function resetWrongAnswer(){ //resets when the start game button is clicked
 answersWrong=0;
}
    
    //reducing the time by 1 sec in loops
        //timeleft?
            //yes-> continue
            //no -> gameover
   
   


//If we click on an answer box
    //If we are playing
     //correct?
        //yes-> increase score by 1
            //show correct box by 1 sec
                //generate new Q&A
       
         