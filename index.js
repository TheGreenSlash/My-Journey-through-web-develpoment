
let a = 0;
document.getElementById("num").innerHTML = a;


document.getElementById("sub").onclick = function(){
    a -= 1;
    document.getElementById("num").innerHTML = a;
}

document.getElementById("rst").onclick = function(){
    a = 0;
    document.getElementById("num").innerHTML = a;
}

document.getElementById("add").onclick = function(){
    a += 1;
    document.getElementById("num").innerHTML = a;
}