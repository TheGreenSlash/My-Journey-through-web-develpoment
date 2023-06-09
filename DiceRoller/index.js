
let a;



document.getElementById("roll").onclick = function(){
    
    a = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML = a;
}

