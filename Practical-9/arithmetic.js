function addition(num1,num2){
    sum=num1+num2;
    return sum;
}
function subtraction(num1,num2){
    sub=num1-num2;
    return sub;
    
}
function multi(num1,num2){
    mul=num1*num2;
    return mul;
}
function division(num1,num2){
    div=num1/num2;
    return div;
}
function main(){
    console.log("inside main");
    num1=20;
    num2=10;
    result= addition(num1,num2);
    result1=subtraction(num1,num2);
    result2=multi(num1,num2);
    result3=division(num1,num2)
    console.log("result of number is: ",result);
    console.log("result of subtraction is: ",result1);
    console.log("result of multiplication is: ",result2);
    console.log("result of division is: ",result3);


}
main();