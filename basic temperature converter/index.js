
let temp;

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFaranheit(){
    return (temp * 9/5) + 32;
}

document.getElementById("btn").onclick = function(){
    temp = Number(document.getElementById("temp").value);
    if(document.getElementById("choice1").checked){
        let ans = toFaranheit(temp);
        ans = ans.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"})
        document.getElementById("answer").innerHTML = `The temperature is ${ans}. `
    }
    else if(document.getElementById("choice2").checked){
        let ans = toCelsius(temp);
        ans = ans.toLocaleString(undefined, {style: "unit", unit: "celsius"})
        document.getElementById("answer").innerHTML = `The temperature is ${ans}. `
    }else{
        window.alert("Please check the conversion metric!");
    }

}