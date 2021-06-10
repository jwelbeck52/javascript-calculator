window.addEventListener('DOMContentLoaded', (event) => {
    console.log('loaded');
});


var oneBtn = parseInt(document.getElementById('one-btn').value);
var twoBtn = parseInt(document.getElementById('two-btn').value);

var buttons = document.querySelectorAll("button");
console.log(buttons);
var plusBtn = document.getElementById('plus-btn');
var answer = document.getElementById('answer');
var inputs= document.getElementById('input-keys');
// alert(oneBtn);


let clearBtn = document.getElementById('clear-btn').onclick=function() {clearCalculator()};
var plusBtn = document.getElementById('plus-btn').onclick=function(){ addnum()};
function clearCalculator(){
     
     inputs.innerText =" ";
     answer.innerText = 0;
}

function addnum(){
    inputs.innerText = `${oneBtn} + ${twoBtn}`;
    answer.innerText = (oneBtn + twoBtn);
}


function test(){
    alert("test works");
}