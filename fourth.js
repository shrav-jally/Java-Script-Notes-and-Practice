//classes, objects, callbacks, promises, async await

/****OOP IN JS****/

/*
js obj - entity having state/property and behaviour/method, have a special prop called prototype object
set using __proto__
if obj and prototype have same method, obj's method used       ...prototypes have some methods within themselves
any object when created inherits some definite prototype ka properties
we can make our own prototypes too



*/

const student = {
    name: "Shravya Jallepally",
    marks: 97,
    printMarks: function() {
        console.log(this.marks);     //new keyword, we're talking about the currently running object ani meaning
    }
};