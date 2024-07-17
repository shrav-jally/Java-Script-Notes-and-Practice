/****DOM****/      //in the form of hierarchial tree maps

// in DOM tree there are 3 types nodes: text, comment, element

/*Window Object
represents open window in browser
browser's object
automatically created
global
has loads of functions, methods, props*/

//Document Object Model is created when web page is loaded, (representation of html)
//html code accessed through js code by creation of object called document of html in js
//this document is available in window object, through which we can access html code
window.document
console.dir(window.document) //props shown
//console.dir, shows properties and methods of special objects
 
//each hierarchy (every block), is called a node (an object in itself)

console.dir(document.body);
console.log(document.body);  //touch html body code through this command
console.log(document.body.childNodes[1]);  //used when we've to make changes in html code
document.body.style.background = "green";  //changes bg color dynamically (using dom)

/*DOM Manipulation
selecting w id: document.getElementById("myId");
selecting w class: document.getElementByClassName("myClass"); =x (say)
selecting w tag: document.getElementByTagName("p");
Properties: with which you can get and set values
.tagName - returns tag for element nodes
.innerText - returns text content of element and all it's children (nodes under parent node) (returns string),
                                (shit done through calling and assigning)    potential to change up content 
.innerHTML - returns all HTML content in the element (returns string), potential to change up content
.textContent - returns textual content even for hidden elements
.children - gives HTML collection, if you want a specific child == .children[index]

node has firstChild, lastChild properties
*/

//writing script tag in head, makes dom elements unaccessible\

let headings = x
console.dir(headings);   //reads the required shit ig (afaik it's pakka after these functions)
console.log(headings);   //prints that shit 
//returns html collections, they're like arrays 

//Query selector

document.querySelector("#myId / .myClass / myTag")     //returns first element
document.querySelectorAll("#myId / .myClass / myTag")     //Node list (all elements)
//this is about accessing elements


//Q create h2 heading element w text "Hello JS", append "From VSC" to this using js.
//Q create 3 divs with common class name - 'box, access em and add some unique text to em

/*----------------------------------------------------------------------------------------*/

/****DOM Manipulation****/

.getAttribute(attr) //to get the attribute value
.setAttribute(attr, value) //set value

node_type.style.the_style //assign this shit to shit


let el = document.createElement('div')     //console.log(el) to display this
node_type.append(el)  //''
node_type.prepend(el)  //adds at start of node (inside)
node_type.before(el)  //''
node_type.after(el)  //adds after node (outside)

node_type.remove(el) //removes node
appendChild()
removeChild()

/*-----------------------------------------------------------------------------------------------------------*/

/****Events****/ //change in state of object

//mouse, keyboard, form, print, environment, etc.
//inline event handling (within html fine) (not ideal), what's preferred is writing in js file - 2 methods
node_obj.event = () => {
    //handle here
}
/*coupla rules
one node ka event handled in html and js files, js has more priority
one node ka event handled in js twice, latter one overrides former

event object - has details about the event 
all event handlers have access to event object's props n methods - 'e'/'event'/'evt'
node_obj.event = (e) => {
    //handle here
}
e.type
e.target
e.clientX
e.clientY

event listeners - 
node.addEventListener(event, callback)
node.removeEventListener(event, callback)  //callback reference should be same to remove, and can be arrow funcn
*/

//Q code for toggle button changing screen to dark-mode and light-mode







