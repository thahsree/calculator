
const display = document.getElementById(`display`);
const btn_7 = document.getElementById(`btn_7`);
const btn_8 = document.getElementById(`btn_8`);
const btn_9 = document.getElementById(`btn_9`);
const btn_4 = document.getElementById(`btn_4`);
const btn_5 = document.getElementById(`btn_5`);
const btn_6 = document.getElementById(`btn_6`);
const btn_1 = document.getElementById(`btn_1`);
const btn_2 = document.getElementById(`btn_2`);
const btn_3 = document.getElementById(`btn_3`);
const btn_0 = document.getElementById(`num_0`);
const btn_dot = document.getElementById(`btn_dot`);
const btn_Ac = document.getElementById(`Ac`);
const btn_div = document.getElementById(`div_operator`);
const btn_equal = document.getElementById(`equal_btn`);
const btn_X = document.getElementById(`X_operator`);
const btn_minus = document.getElementById(`minus_operator`);
const btn_plus = document.getElementById(`plus_operator`);
const plus_minus = document.getElementById(`plus_minus`);

let value;
let operator;
let isOperatorClicked = false;
let oldValue = 0;
let newValue;

btn_dot.onclick= ()=>{
    if(isOperatorClicked){
        value ='0.';
        isOperatorClicked = false;
    }else if(!display.value.includes('.')){
        
        value = display.value + '.';
    }
    console.log(value)
    display.value = value;
}
btn_7.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 7;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 7 : display.value +`7`
    }
}
btn_8.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 8;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 8 : display.value +`8`
    }
}
btn_9.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 9;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 9 : display.value +`9`
    }
}
btn_4.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 4;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 4 : display.value +`4`
    }
}
btn_5.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 5;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 5 : display.value +`5`
    }
}
btn_6.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 6;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 6 : display.value +`6`
    }
}
btn_1.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 1;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 1 : display.value +`1`
    }
}
btn_2.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 2;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 2 : display.value +`2`
    }
}
btn_3.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 3;
        isOperatorClicked = false;
    }else{
        value = display.value;
        display.value = value === '0' ? 3 : display.value +`3`
    }
}
btn_0.onclick = ()=>{
    if(isOperatorClicked){
        oldValue = Number(display.value);
        display.value = 0;
        isOperatorClicked = false;
    }else{
    value = display.value;
    display.value = value === '0' ? 0 : display.value +`0`
    }
}
btn_Ac.onclick = ()=>{
    isOperatorClicked=false
    oldValue = 0 ;
    display.value = 0;
}
btn_div.onclick = ()=>{
    isOperatorClicked = true;
    operator = "/";
    
}
btn_X.onclick = ()=>{
    isOperatorClicked = true;
    operator = "x";
    
}
btn_minus.onclick = ()=>{

    isOperatorClicked = true;
    operator = "-";
    
}
btn_plus.onclick = ()=>{
    isOperatorClicked = true;
    operator = "+";
    
}
plus_minus.onclick = ()=>{
    updation = Number(display.value);
    if(updation<0){
        display.value = updation * -2 + updation;
    }else if(updation>0){
        display.value =-updation;
    }
}
btn_equal.onclick = ()=>{
    newValue = Number(display.value);
        switch(operator){
            case "/":
                result = newValue===0? 'Error' : oldValue / newValue; 
                
                display.value= parseFloat(result).toFixed(2);
                break;
            case "x": 
                result = oldValue * newValue;
                result = Number(result)
                display.value=result
                break;
            case "-":
                oldValue = Number(oldValue)
                result =  oldValue - newValue
                display.value=result
                break;
            case "+":
                result = oldValue + newValue;
                result = Number(result)
                display.value=result
        }
   
}


