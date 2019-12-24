console.log('hellow node!');

alert('be happy, dont worry!');




function getAverage (a,b) {

    var average = (a + b) / 2;
    console.log(average);
}
getAverage(7,122);


  var names = ('ice', 'dice', 'spice');
name.length
const human = {
    firstName: 'Wacu'
    lastName: 'Mbugua',
    age: 29,
    sayName () {
      console.log(`I am Wacu Mbugua`)
    }
  }
  
  human.sayName()

  / Ugh, creating another human by writing a new object
const Nicolas = {
  firstName: 'Judy',
  lastName: 'She',
  age: 30,
  sayName () {
    console.log(`I am Judy She`)
  }
}

function Human (firstName, lastName, age) {
    // ???
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  
    this.sayName = function () {
      console.log(`I am ${firstName} ${lastName}`)
    }
  }
  //objects
  varperson1={
    name:"Janedoe"
    };
    
    varperson2=newObject();
    person2.name="Janedoe";
    //functions
    functionadd(num1,num2){
        returnnum1+num2;
        }
//function expression
varadd=function(num1,num2){
    returnnum1+num2;
    };

// define a function after it is used in code without generating an error. For example:
 varresult=add(5,5);

functionadd(num1,num2){
returnnum1+num2;
}
// how the JavaScript engine interprets the code
functionadd(num1,num2){
returnnum1+num2;
}

varresult=add(5,5);

//1stclassfunctions
functionsayHi() {
    console.log("Hi!");
    }
    
    sayHi(); //= "Hi!"
    
    varsayHi2=sayHi;
    
    sayHi2(); //= "Hi!"

    //CLOSURES

    function makefunct() { //function
        var name = "java";
        function displayName() { //function within the function
            console.log(name);
        }
        return displayName;
    }
    var myFunc = makeFunc();
    myFunc(); //outputs "java"

    //using private method
     var counter = (function() {
         var privateCounter = 0;
         function changeBy(val) {
             privateCounter += val;
         }
         return {
             increment: function() {
                 changeBy(1);
             },
             decrement: function() {
                 changeBy(-1);
             },
             value: function() {
                 return privateCounter;
             }
             };
         })();
         console.log(counter.value());
         counter.increment();
         counter.decrement();
         counter.log(counter.value());
         console.log(counter.value());
         //strict MODE
         //can be used at the beginning of the code or within a line of a code
         //eg
         function myFunction() {
             "use strict"; //strict mode shows errors in code
             var y = 3.14
         }
         //ENCAPSULATION
         var prop1 = "one"; //private
         this.prop2= "two" //public
         var tc = new test();
         var tp1 =tc.prop1; //undefined: because prop1 is private;

         //PROTOTYPES
         function doThing () {}
        console.log(doThing.prototype) // {}

        //instantiation
        function Animal (name, energy) {
            let animal = Object.create(Animal.prototype)
            animal.name = name
            animal.energy = energy
          
            return animal
          }
          
          Animal.prototype.eat = function (amount) {
            console.log(`${this.name} is eating.`)
            this.energy += amount
          }
          
          Animal.prototype.sleep = function (length) {
            console.log(`${this.name} is sleeping.`)
            this.energy += length
          }
          
          Animal.prototype.play = function (length) {
            console.log(`${this.name} is playing.`)
            this.energy -= length
          }
          
          const leo = Animal('Leo', 7)
          const snoop = Animal('Snoop', 10)
          
          leo.eat(10)
          snoop.play(5)
          //
          varblog={
            title:"Object-Oriented JavaScript"
            };
            
            console.log("title"inblog);// true
            console.log(blog.hasOwnProperty("title"));// true
            console.log("hasOwnProperty"inblog);// true
            console.log(blog.hasOwnProperty("hasOwnProperty"));// false
            console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));// true

            //INHERITANCE
            varblog={
                title:"Object-Oriented JavaScript"
                };
                varprototype=Object.getPrototypeOf(blog);
                console.log(prototype===Object.prototype);// true
                