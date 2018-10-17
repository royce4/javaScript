            var start = new Date().getTime();
            var shapes = ["0%","50%"];
            appearAfterDelay();

//Return a random hex number for color styling
            function createHex(){
                var hexString = "#";
                var number, hex;
                for (var i =1;i<4;i++){
                    number = Math.floor(Math.random()*255);
                    hex = number.toString(16);
                    hexString += hex.toString();    
                }
               
                return(hexString);

            }
// Make somewhat random shape appear, either square or circle. With random stylization of size, color and location
// Start timer after creation 
            function makeShapeAppear(){
                var top = Math.random()*400;
                var left = Math.random()*400;
                var width = (Math.random()*300)+100;
                document.getElementById("shape").style.display = "block";
                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.width = width + "px";
                document.getElementById("shape").style.height = width + "px";
                document.getElementById("shape").style.background = createHex();
                document.getElementById("shape").style.borderRadius = shapes[Math.floor(Math.random()*2)];
                start = new Date().getTime();
               

            }
// Waiting period to display the shape
            function appearAfterDelay(){
                setTimeout(makeShapeAppear(), (Math.random()*2000));

            }
//Future dev- went quit button pushed game ends. 
            function endGame(){

            }
//Future dev- calculated statitics- average, best, worst. 
            function displayStats(){

            }

// Main function. Once the shape is clicked it disappears and reaction time is calculated and displayed.

            document.getElementById("shape").onclick = function(){
                document.getElementById("shape").style.display = "none";
                var end = new Date().getTime();
                var timeTaken = (end-start) / 1000;
                document.getElementById("timer").innerHTML = timeTaken + "s";
                appearAfterDelay();

            }