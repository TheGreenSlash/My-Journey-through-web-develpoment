
const ansNum = Number(Math.floor(Math.random() * 10 + 1));
let guesses = 0;


document.getElementById("btn").onclick = function(){
    
    let guess = Number(document.getElementById("guess").value);
    guesses += 1;
    
    if(guesses >= 4){
        document.getElementById("answer").innerHTML =  `You are out of guesses!<br> The answer was ${ansNum}.`;
    }
    else if(guess == ansNum){
        document.getElementById("answer").innerHTML =  `You Won!<br> The answer was ${ansNum}. <br>You took ${guesses} attempts!`;
    }else if(guess > ansNum){
        document.getElementById("answer").innerHTML =  `Go Lower!`;    
    }else if(guess < ansNum){
        document.getElementById("answer").innerHTML =  `Go Higher!`;    
    }
}