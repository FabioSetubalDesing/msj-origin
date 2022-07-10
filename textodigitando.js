var elspanID;
var elspan = null;
var isAlive = false;
var spanText;
var textStartPosition = 0;
var textEndPosition = 0;
var direction = -1;
var running;
var minSpeed = 100;
var maxSpeed = 500;
var keepText = true;
var speed = Math.floor(Math.random()* maxSpeed)+minSpeed;

tEffect("digitando", "FULL STACK-" , false);

function tEffect(text, keep_Text){
    isAlive = true;
    elspanID = document.querySelector("#digitando");
    keepText = text;
    spanText = keep_Text;


    running = setInterval(() => loop(), speed);
    
}

    function loop(){
        if(isAlive){

            if(direction > 0){
                textEndPosition++;
                if(textEndPosition >= spanText.length){
                    direction = -1;
                }
            }

            if(direction < 0){
                textEndPosition--;

                if(textEndPosition <= 0){
                    direction = 1;
                }
            }
            
            draw();
            speed = Math.floor(Math.random()* maxSpeed)+minSpeed;
            clearInterval(running);
            running = setInterval(() => loop(), speed);

        }

    }

function draw(){
    elspanID.innerHTML = spanText.substring(textStartPosition, textEndPosition);
}

