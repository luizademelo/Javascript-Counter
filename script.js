var currentNumber = document.getElementById("currentNumber"); 

function increment(){
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) + 1; 
    if(currentNumber.innerHTML >= 0){
        currentNumber.style.color = "black"; 
    }
}

function decrement(){
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) - 1;
    if(parseInt(currentNumber.innerHTML) < 0){
        currentNumber.style.color = "red"; 
    }
}