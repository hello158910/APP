//push

let a =[1,2];
console.log(a);

a.push(3);
console.log(a);

//slice

let b=['a','b','c','d'];
let slice=b.slice(1,3);
console.log(slice);

//foreach

var num=[1,2,3,4];
num.forEach(
    number=>console.log(number)
);

//map

var coffee=[
    {type:'black',price:'cheap'},
    {type:'latte',price:'expensive'}
];

var prices = coffee.map((cup)=>cup.price);
console.log(prices);

//spread operator
let array=[...a,...num];
console.log(array);
let state={a:1,b:2,c:3}
/*state = {...state,d:5}
console.log(state);*/

function adder(base,...a){
    a.forEach(function(b){
        console.log(base+b);
    })
}
adder(3,5,7,9);

