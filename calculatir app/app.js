var input = document.getElementById('inputField')

function getValue (number){
    input.value += number 
}

function clrAll(){
    input.value = 0
}


function deleteChar(){
    input.value = input.value.slice(0,-1)

}

function square(){
    input.value = input.value * input.value
}

function equal(){
    input.value = eval(input.value)
}

function sin() {
    let input = document.getElementById("display");
    let deg = Number(input.value);
    let radian = toRadian(deg);
    input.value = Math.sin(radian);
}

function cos() {
    let input = document.getElementById("display");
    let deg = Number(input.value);
    let radian = toRadian(deg);
    input.value = Math.cos(radian);
}

function tan() {
    let input = document.getElementById("display");
    let deg = Number(input.value);
    let radian = toRadian(deg);
    input.value = Math.tan(radian);
}