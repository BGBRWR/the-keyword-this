//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      /* bind methond for execution context */
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /* function myFunc(){
            console.log(this.name);
         }
         Explicit Binding
          function myFunc(param1, param2){
           console.log(this.name, param1, param2);
          }
          myFunc();

          var data = ['three, 'four']
          myFunc.call({name:"DM13"}, "one", "two")
          myFunc.apply({name:"DM13"}, data)

          var dm15Func = myFunc.bind({name:"DM15"});
          var dm16Func = myFunc.bind({name:"DM15"});

          dm15Func(1, 3);
          dm15Func(2, 3);
          dm16Func(1, 7); */
      /*  Implicit Binding
           function calcRaceTimes() {
             return Math.average(this.laps, this.name);
           }
           var person = {
               name: "Davey",
               laps:[12, 15, 24, 17, 90, 67],
               personFunc: myFunc,
               calculateRactTime: calcRaceTimes

           }
           var person2 = {
               name: "Smavey",
               personFunc: myFunc
           }

           person.personFunc(3, 6);
           person2.personFunc(5, 5);

           person.calculateRactTime(); */
      /* Default/Window
           function func2() {
             console.log(this.title);
             this.title = "mwhahahaha";
           }

           func2(); */
      /* New Binding - new
           function Animal(size, legs, sound) {
             //this = {}
             //this.size = size;
             //this.legs = legs;
             //this.sound = sound;
             this.makeSound = function() {
                 console.log(this.sound);
             }
             this.run = function () {
                 console.log('I run on ' + this.legs + ' legs.')
             }
             //return this
           }

           var giraffe = new Animal('large, 4, 'large goat bleet');
           var zebra = new Animal('medium', 4, 'whoop whoop');
           var monkey = new Animal('small', 2, 'ooh ohh');
  // 3) What is the difference between call and apply?

      //Answer
      /*
  // 4) What does .bind do?

      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here*/
var user = {
  username:"BGBRWR",
  email:"bgbrwr@gmail.com",
  getUsername: function() {
    return this.username;
  }
 }
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
var Car = function(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
