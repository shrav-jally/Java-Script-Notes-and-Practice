//classes, objects, callbacks, promises, async await

/****OOP IN JS****/

/*
js obj - entity having state/property and behaviour/method, have a special prop called prototype object
set using __proto__
if obj and prototype have same method, obj's method used       ...prototypes have some methods within themselves
any object when created inherits some definite prototype ka properties
we can make our own prototypes too: methods/functions defined inside/outside object become these custom prototypes

if you wanna use methods defined in one object in another as it's prototypes
<-another->.__proto__=<-one object->;

prototype ka datatype hoga "reference to an object"
*/

const student = {
    name: "Shravya Jallepally",
    marks: 97,
    printMarks: function() {
        console.log(this.marks);     //new keyword, we're talking about the currently running object ani meaning
    }
};

const employee = {           //employee is an object
    tax1() {
        console.log("tax rate 10%");     //preferred
    },

    tax2 : function() {
        console.log("tax rate 20%");
    }
};  //both are correct methods to define function

/*class  (program code template for creating objects)
those objects will have some state (variables), and some behaviour (functions) inside

class myClass {
        constructor() {...}          //automatically invoked by new class, initializes object, arguments addable
        myMethod() {...}          //no need of commas btwn methods
}
let myObj = new myClass();
*/

/*inheritance  

class Parent{

}
class Child extends Parent {

}
if child and parent have same method, child's method used, method overriding

super: used to call constructor of parent class to access it's props and methods
super(args)  //calls parent's constructor
super.parentMethod(args)

when child class has constructor, pakka super(); to avoid errors

to pass argument into super to pass to parent constructor, you've to pass it into child constructor first (3).
*/

class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    view_data() {
        console.log(name, email);
    }
}

class admin extends user {
    constructor(name, email) {
        super(name, email); 
    }
    editData(){
        //global data editable
    }
}

let stud1 = new user ("shravya", "some email lmao");

/*error handling
try-catch

try{
   ...normal code
}catch(err){      //err is error object
   ...handling error
}
*/