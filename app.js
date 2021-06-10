window.addEventListener('DOMContentLoaded', (event) => {
    
    
    var answer = document.getElementById('answer');
    var inputs= document.getElementById('input-keys');
    
    var oneBtn = parseInt(document.getElementById('one-btn').value);
    var twoBtn = parseInt(document.getElementById('two-btn').value);
    // alert(oneBtn);
    

    let clearBtn = document.getElementById('clear-btn').onclick=function() {clearCalculator()};
    var plusBtn = document.getElementById('plus-btn').onclick=function(){ addnum()};
    function clearCalculator(){
         
         inputs.innerText =" ";
         answer.innerText = 0;
    }

    function addnum(operations[]){
        inputs.innerText = `${oneBtn} + ${twoBtn}`;
        answer.innerText = (oneBtn + twoBtn);
    }



    

});