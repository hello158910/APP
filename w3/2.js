//callback function
function greet(fn1){
    console.log('hi');
    var data ={
        name: 'yuki'
    };
    fn1(data);
}
greet(a=>{
    console.log('The callback is invoked!');
    console.log(a);
});

//object ＆ this
var person={
    greet1:()=>console.log(`testing,${this.name}`),
    greet2: function(){console.log(`okay,${this.name}`)},
    greet3: function(){
        (()=>console.log(this.name))();
    },
//    phone,
    name:'Wendy',
 //   phone:phone
}
person.greet1();
//person.greet1.bind(person)();
person.greet2();
person.greet3();
greet0=()=>console.log('testing');
greet0();    

let name,phone;
var info = {
	name,
    phone: phone,
	//phone: 'phone',
    
	printInfo() {
		console.log(`Name: ${this.name},Phone: ${this.phone}`);
	}
}

info.name = 'ntue';
info.phone = '222';
info.printInfo();

//Bind
var mouse={
    m_num:1,
    m_name:'mickey',
    getName:function(){
        var fullname=this.m_num+'.'+this.m_name;
        return fullname
    }
}

var logName=function(){
    console.log('logged:'+this.getName());
}

var logMouseName=logName.bind(mouse);
logMouseName();

console.log('------------------------');

let greeting =function(fn){
    fn();
};

let actor={
    account:'Eric',
    hello:function(){
        console.log(`hello ${this.account}`);
    },
    sayHello: function(){
//        greeting(this.hello);
//        greeting(this.hello.bind(this));
        greeting(()=>console.log(`hi ${this.account}`));
    }

};

actor.sayHello();