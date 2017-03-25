'use strict'
class Person{
    constructor(name){
        this.name=name;
    }
    printGreeting(){
        console.log(`hi,I'm ${this.name}`);
    }
}
var person1=new Person ('Eric');
person1.printGreeting();
var person2=new Person('Meggie');
person2.printGreeting(); 

class Employee extends Person{
    constructor(name,job){
        super(name);
        this.job=job;
    }
    printGreeting(){
        super.printGreeting();
        console.log(`hello,I am ${this.name} and I am a ${this.job}.`);
    }
}
var employee1=new Employee('Mike','Artist');
employee1.printGreeting();
var employee2=new Employee('Cathy','Designer');
employee2.printGreeting();

Person.prototype.printGreeting=function(){
    console.log(`Ahooy!I am ${this.name},and I have been changed!`);
}
person1.printGreeting();
employee1.printGreeting();