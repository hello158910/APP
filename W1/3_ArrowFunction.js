var greet=function(){
    console.log('Hi');
}
greet();

greet1=()=>console.log('Hi2');
greet1();

greet2=num=>console.log('hi'+num);
greet2(3);

var add=function(num){return num+2};
console.log(add(2));
var add2= num=>{return num+3};
console.log(add2(2));
var add3=num=>num+4;
console.log(add3(2));