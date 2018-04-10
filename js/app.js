
/* Declaration of Global Variables */

var input = document.getElementById("input"),
    digits = document.querySelectorAll("span"),
    arr = [];

/* For loop to add a click event to every button and check for its type */

for(var i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', function(){
        if(this.classList.contains('operator')){
            input.textContent += " " + this.textContent + " ";
        }
        else if(this.classList.contains('number')){
            input.textContent += this.textContent;
        }
        else if (this.id === 'negative'){
            input.textContent += "-";
        }
        else if(this.id === 'equal'){
            calculate(input.textContent);
        }
        else{
            input.textContent = "";
        }
    });

    /*digits[i].addEventListener('mouseover', function(){
        if(this.classList.contains('royalBlue')){
            this.style.backgroundColor = '#5870bb';
        } else{
            this.style.backgroundColor = '#9E9E9E';
        }
    });
    digits[i].addEventListener('mouseout', function(){
        if(this.classList.contains('royalBlue')){
            this.style.backgroundColor = '#758cd4';
        } else{
            this.style.backgroundColor = 'grey';
        }
    });
    /*digits[i].addEventListener('mousedown', function(){
        this.style.backgroundColor = "#999";
    });
    digits[i].addEventListener('mouseup', function(){
        this.style.backgroundColor = "#ddd";
    });*/
}

/* 
    Function called when clicking the equal button to calculate the equation 
    by splitting it into an array and checking for each operator
*/

function calculate(str){
    var result;

    arr = str.split(" ");
    console.log(arr);

    /* 
        For loop to iterate through the array and find every multiplication or 
        division operator 
    */

    for(var i = 0; i < arr.length; i++){
        if(arr[i] === '/'){
            result = determineOperation(i, arr[i]);
        }
        else if (arr[i] === 'x'){
            result = determineOperation(i, arr[i]);
        }
        else{
            continue;
        }
        i--;
    }

    /* 
        For loop to iterate through the array and find every addition or 
        subtraction operator 
    */

    for(var i = 0; i < arr.length; i++){
        if(arr[i] === '+'){
            result = determineOperation(i, arr[i]);
        }
        else if (arr[i] === '-'){
            result = determineOperation(i, arr[i]);
        }
        else{
            continue;
        }
        i--;
    }

    input.textContent = result;
}

/* Function to calculate the end result according to operator */

function determineOperation(index, operator){

    switch (operator){
        case '/':
            result = Number(arr[index - 1]) / Number(arr[index + 1]);
            console.log(result + "divide");
            break;
        case 'x':
            result = Number(arr[index - 1]) * Number(arr[index + 1]);
            console.log(result + "times");
            break;
        case '+':
            result = Number(arr[index - 1]) + Number(arr[index + 1]);
            break;
        case '-':
            result = Number(arr[index - 1]) - Number(arr[index + 1]);
            break;
    }
    /* Removing the two numbers and the operator after calculation and replacing them with the result */
    arr.splice(index - 1, 3, result);

    return result;
}
