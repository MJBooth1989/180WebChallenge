 
var scores = [];
            
            var averageTime = document.getElementById("averageTime");
            
            var bestTime = document.getElementById("bestTime");
			var slowestTime = document.getElementById("slowestTime");
            
            var start = Date.now();
            
            function getRandomColor()
            {
                  var letters = '0123456789ABCDEF';
                  var color = '#';
                for (var i = 0; i < 6; i++ ) {
                 color += letters[Math.floor(Math.random() * 16)];
                }
    return color;
            }
            
            
            
            function makeShapeAppear()
            {
                var position = Math.random()* 250;
                
                
                var size = Math.random() * 200 + 100 ;
                
                if(Math.random() > 0.5){
                    
                    document.getElementById("shape").style.borderRadius = "50%";   
                } else{
                    document.getElementById("shape").style.borderRadius = "0%";
                }
                
                document.getElementById("shape").style.backgroundColor= getRandomColor();
                
                document.getElementById("shape").style.width = size + "px";
                
                document.getElementById("shape").style.height = size + "px";
                
                document.getElementById("shape").style.top = position + "px";
                
                  document.getElementById("shape").style.left = position + "px";
                
                document.getElementById("shape").style.display = "block";
                
                start = Date.now();
                
            }
            function appearAfterDelay(){
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
            }
            
            function totalSum(total, number)
            {
                return total + number;
            }
            
            appearAfterDelay();
            
            
        document.getElementById("shape").onclick = function()
        {
            
            
            var end = Date.now();
            
            
            var timeTaken = (end - start)/1000;
            
           
            

            
            
            document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";
            
            document.getElementById("shape").style.display = "none";
            
            appearAfterDelay();
            
            scores.push(timeTaken);
            
            var averageT = (scores.reduce(totalSum)/scores.length).toFixed(3);
            
            var bestT = scores.sort();
            
            bestT = scores[0];
			
			var slowestT = scores.reverse(); 
			slowestT = scores[0];
            
            averageTime.innerHTML = averageT + " seconds";
            bestTime.innerHTML = bestT + " seconds";
			slowestTime.innerHTML = slowestT + " seconds"; 
            
        }