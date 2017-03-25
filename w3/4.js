// JSON
var personobj={
    fisrt:'Willy',
    full:'',
    age:'23',
    married:true,
    hasHair:null,
    children:[{
        first:'Eric'
    },{first:'Elsa'}
    ]
};

var personjson=JSON.stringify(personobj);
var json=JSON.stringify(personobj,null,1);
console.log(personobj);
//console.log(personjson);
//console.log(json);

var js=JSON.parse(personjson);
console.log(js);