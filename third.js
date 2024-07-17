//we've to append from VSC through js, so access the element you wanna change first
//pick your property, then change

//to access we need id/ class/ tag
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + ' from VSC';

let divs = document.querySelectorAll(".box");

// console.log(divs[0]);   //this is accessing the first div, now changing values
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";

//or 
let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}

//Q create button element, w text "click me", bgc red, textc white, insert it as first element inside body tag
let newbtn = document.createElement("button");
newbtn.innerText = "click me";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);

//Q create <p> in html, give it class and styling, now create new class in css, append it to <p>
//(here you overwrite the classname when you add a new one, solve the problem using classList)

let para = document.querySelector("p");

/*do this shit in the console
para.getAttribute("class");
>>'myClass'
para.setAttribute("class", "newClass");     //this shit completely overrides, so we use classList
>>undefined */                                                  //collection of class attributes of the element

/*in console
para
>>the html content in html file under p
para.classList.add("newClass");       //naya class add hogi, without overriding
>>undefined
para.classList
para.classList.remove("newClass"); //kuda vadachu */

let btn = document.querySelector("#btn");
btn.onclick = () => {
    console.log("btn was clicked");
}; 


let mode = document.querySelector("#mode");
let curmo = "light";

mode.addEventListener("click", () => {
    if (curmo === "light") {
        curmo = "dark";
        document.querySelector("body").classList.add('black');
        document.querySelector("body").classList.remove('white');
    }else {
        curmo = "light";
        document.querySelector("body").classList.add('white');
        document.querySelector("body").classList.remove('dark');
    }
    console.log(curmo);
});

/*you can do this using css file too
instead of 'style.backgroundColor = "black";' -> 'classList.add('black');' where .dark is a block in css w props
*/