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

                if (button.value=="clear"){
                    clearCalculator();
                }

                else if(button.value=="="){
                    getAnswer(inputExpression);
                }
                
                else{
                    getValues(button);
                    
                    
                }
                
                
            }
            // console.log(count);
            return;
        }
        else{
            getValues(button);
            setOutput(inputExpression);
            count=0;
        }
    });
  });

// alert(oneBtn);

function getValues(button){
    console.log(button.value);
    values.push(button.value);
    console.log("inputs are: " + values);
    inputExpression = values.join('');
    console.log("eval: " + inputExpression);
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
    inputs.innerText = expression;
    answer.innerText = eval(expression);
    old_answer = eval(expression);
}



function clearCalculator(){
     
     
     values = [];
     inputExpression="";
     setOutput(inputExpression);
    //  console.log(values);
    //  console.log(inputExpression);
}

function addnum(){
    inputs.innerText = `${oneBtn} + ${twoBtn}`;
    answer.innerText = (oneBtn + twoBtn);
}


function test(){
    alert("test works");
}