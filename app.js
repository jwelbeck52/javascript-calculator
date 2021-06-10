window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document loaded');
});


// const oneBtn = parseInt(document.getElementById('one-btn').value);
// const twoBtn = parseInt(document.getElementById('two-btn').value);
// const plusBtn = document.getElementById('plus-btn');
let answer = document.getElementById('answer');
let inputs= document.getElementById('input-keys');
let values = [];
let inputExpression="";
let old_answer = 0;
const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
// let clearBtn = document.getElementById('clear-btn').onclick=function() {clearCalculator()};
// let plusBtn = document.getElementById('plus-btn').onclick=function(){ addnum()};

let buttons = document.querySelectorAll("button")
console.log(buttons);


// add eventListener to each button
let count=0;

buttons.forEach(function(button) {
    button.addEventListener('click', function(){
        
        if (button.classList.contains('operator-keys')){
            
            if (count<1){
                count++;
                concatValues(button);
                setOutput(inputExpression);
                }   
            
            // console.log(count);
           
        }

        else if (button.value=="clear"){
            clearCalculator();
        }

        else if(button.value=="="){
            getAnswer(inputExpression);
        }
        
        else if(button.value=="ans"){
            getoldAnswer();
            setOutput(inputExpression);
        }

        else if(button.value=="bksp"){
            removeValue(values,inputExpression);
            setOutput(inputExpression);
            
        }

        else{
            concatValues(button);
            setOutput(inputExpression);
            count=0;
        }
    });
  });


function isValidExpression(expression) {
    // console.log("%s is valid? %s", s, re.test(s));
    return re.test(expression);
  }

function concatValues(button){
    // console.log(button.value);
    values.push(button.value);
    // console.log("inputs are: " + values);
    inputExpression = values.join('');
    // console.log("eval: " + inputExpression);
}

function removeValue(values,expression){
    // console.log(isValidExpression(expression));
    values.pop();
    // console.log("inputs are: " + values);
    inputExpression = values.join('');
    // console.log("eval: " + inputExpression);
    
}

function clearCalculator(){
    values = [];
    inputExpression="";
    old_answer= 0;
    setOutput(inputExpression);
   //  console.log(values);
   //  console.log(inputExpression);
}

function getoldAnswer(){
    values.push(old_answer);
    inputExpression = values.join('');
}

function setOutput(expression){
    if (!expression){
        inputs.innerText = expression;
        answer.innerText = 0;
    }

    else {
        inputs.innerText = expression;
        answer.innerText = old_answer;
    }
    
}

function getAnswer(expression){
    if(isValidExpression(expression)){
        if (!expression){
            inputs.innerText = expression;
            answer.innerText = 0;
        }
        else {
            inputs.innerText = expression;
            answer.innerText = eval(expression);
            old_answer = eval(expression);
            values=[];
        }
    }
    
}
