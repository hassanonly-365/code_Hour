let num1 = 5;
let num2 = 6;
let operator = ";"

sum = (num1,num2) =>{
    return num1+num2
}
diff = (num1,num2) => {
    return num1-num2
}
prod = (num1,num2) =>{
    return num1*num2
}
div = (num1,num2) =>{
    return num1/num2
}


if (operator ==="+") {
    console.log(sum(num1,num2));    
} 
else if (operator === "-") {
    console.log(diff(num1,num2));    
}
else if (operator === "*") {
    console.log(prod(num1,num2));    
}
else if (operator === "/") {
    console.log(div(num1,num2));    
}
else{
    console.log("enter a valid operator");
}








