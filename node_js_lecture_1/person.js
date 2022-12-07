// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greeting(){
//         console.log(`My name is ${this.name} and my age is ${this.age}` )
//     }
// }

// // let p=new Person("nitin",22)
// // // console.log(p)
// // p.greeting()
//module.exports=Person

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greetings(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
let p=new Person("nitin",22 );
p.greetings();
module.exports=person