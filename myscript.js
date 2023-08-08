// document.write("hello");

// // let name=window.prompt("enter your name");
// console.log(name);

// prompt("hello");

//user inputs

// let username;

// document.getElementById("submit").onclick=function(){
//     username=document.getElementById("mytext").value;
//     document.getElementById("texts").innerHTML=username+" welcome";
//     console.log(username);
// }

//type conversion

// let age=prompt("enter your age");
// console.log(typeof age);
// age=Number(age);
// console.log(typeof age)

//types of math functions
//console.log(Math.floor(4.7), //math floor rounds the number to the nearest integer
//Math.ceil(4.7), //math ceil rounds the number to the nearest integer
//Math.round(4.7), //math round rounds the number to the nearest integer
//Math.trunc(4.7), //math trunc removes the decimal part of the number
//Math.random()); //math random generates a random number between 0 and 1
// let count=0;
// let icount=document.getElementById("display");
// const decrease=()=>{
//     icount.innerHTML=count--;
// }
// const increase=()=>{
//     icount.innerHTML=count++;
// }
// const reset=()=>{
//     count=0;
//     icount.innerHTML=count;
// }

// let x=Math.floor(Math.random()*10)+1;
// document.getElementById("display").innerHTML=x;
// console.log(x);

//string methods

//let str=" hello world ";

// console.log(str.length);
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));
// console.log(str.slice(2,5)); //slices the string from index 2 to 5
// console.log(str.replace("hello","hi")); //replaces the first occurence of hello with hi
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(2));
// console.log(str[2]);
// console.log(str.split(" ")); //splits the string into an array of substrings
// console.log(str.trim()); //removes the white spaces from the string


// document.getElementById("sub").onclick= ()=>{
//     if(document.getElementById("check").checked){
//         console.log("checked");
//     }
//     else{
//         console.log("not checked");
//     }
// }

//array in javascript
// let fruits=["apple","banana"];
// console.log(...fruits);

//callback in function 

// sum(1,2,display)

// function sum(x,y,dis){
//     let result=x+y;
//     dis(result);
// }

// function display(output){
//     console.log(output);
// }
//array.map in javascript

// let number=[1,2,4,5,6,7,8];

// let squares=number.map(square);
// squares.forEach(print);
// function square(element){
//     return Math.pow(element,2);
// }
// function print(element){
//     console.log(element);
// }

//map in javascript

// let data=new Map([
//     ["a",1],
//     ["b",2],
//     ["c",3]
// ]);

// data.forEach((value,key)=>
// console.log(`${value} ${key}`))

// let count=0;
// let max=prompt("Enter numer");

// let settime=setTimeout(countup,1000);

// function countup(){
//     count+=1;
//     console.log(count)
//     if(count>=max)
//     {
//         clearTimeout(settime);
//     }
// }

// const data=new Promise((resolve,reject)=>{
//     let fileLoaded=false;
//     if(fileLoaded){
//         console.log("true");
//     }else{
//         console.log("not loaded");
//     }
// })

// data.catch(v=>console.log(v))

// let div=document.getElementById("dat");

// window.addEventListener("keydown",move)
// let x=0;
// let y=0;

// function move(event){
//     console.log(event.key);
//     switch(event.key){
//         case "ArrowDown":
//             y+=5;
//             div.style.top=y+"px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             div.style.top=y+"px";
//             break;
//     }
// }

//prototype in javascript
//every object in javascript has a prototype
//prototype is an object that contains methods and properties that other objects inherit
//eg: array prototype contains methods like map,filter,reduce etc

// const person={
//     name:"john",
//     age:20,
//     greet:function(){
//         console.log("hello");
//     }
// }

// const student={
   
// }

// student.__proto__=person;
// console.log(student.name);
// console.log(student.age);
// student.greet();
// console.log(student);
let x=document.querySelector(".parent");
let y=document.querySelector(".child");
let z=document.querySelector(".grandchild");

// x.addEventListener("click",()=>{
//     x.style.backgroundColor="yellow";
// })  
// y.addEventListener("click",()=>{
//     y.style.backgroundColor="green";
// })
// z.addEventListener("click",()=>{
//     z.style.backgroundColor="blue";
// }
// )
//on mouse over event
x.addEventListener("mouseover",()=>{
    x.style.backgroundColor="yellow";
})
y.addEventListener("mouseover",()=>{
    y.style.backgroundColor="green";
}
)
z.addEventListener("mouseover",()=>{
    z.style.backgroundColor="blue";
})
x.addEventListener("mouseout",()=>{
    x.style.backgroundColor="white";
}
)
y.addEventListener("mouseout",()=>{
    y.style.backgroundColor="white";
}
)
z.addEventListener("mouseout",()=>{
    z.style.backgroundColor="white";
}
)

addEventListener("keydown",e=>{
    console.log(e.key);
    
    })

//types of events
//1. mouse events
//2. keyboard events
//3. form events
//4. document/window events

//mouse events
//1. click
//2. dblclick
//3. mouseover
//4. mouseout
//5. mousemove
//6. mouseup
//7. mousedown

//keyboard events
//1. keydown
//2. keyup
//3. keypress

//form events
//1. submit
//2. change
//3. focus
//4. blur

//document/window events
//1. load
//2. resize
//3. scroll
//4. unload

//event bubbling
//when an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors

//event capturing
//the event starts from the top element and goes down to the element that triggered the event


//event loop
//the event loop is a loop that waits for event to arrive, and then processes them and then sleeps
//it is a loop that keeps on running until there is no more work to do

class cards{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let card1=new cards("john",20);
let card2=new cards("jane",21);
let card3=new cards("joe",22);

let arr=[card1,card2,card3];

console.log(arr);
arr.forEach((value,index)=>{
    console.log(value.name +" "+value.age +" "+index);
})

console.log(card1.name);

// dialog boxes in javascript
//1. alert
//2. prompt
//3. confirm

// alert("hello");
// let name=prompt("enter your name");
// console.log(name);
// let result=confirm("are you sure");
// console.log(result);

//diadvantages of using forEach loop
//1. we cannot use break or continue statement
//2. we cannot use return statement

//advantages of using forEach loop
//1. it is easy to use
//2. it is faster than for loop

//array methods
//1. map
//2. filter
//3. reduce
//4. find
//5. findIndex

//map
//it is used to create a new array from an existing array
//it calls a function on every element of an array and stores the result in a new array

let arrs=[1,2,3,4,5,6,7,8,9,10];
let squares=arrs.map(square);
function square(element){
    return Math.pow(element,2);
}
console.log(squares);
//another example
let names=["john","jane","joe","jill"];
let upper=names.map(upperCase);
function upperCase(element){
    return element.toUpperCase();
}
console.log(upper);

//another example
let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[11,12,13,14,15,16,17,18,19,20];
let arr3=arr1.map(add);
function add(element,index){ //index is the index of the element in the array arr1  and element is the element of the array arr1
    return element+arr2[index]; //arr2[index] is the element of arr2 at index
}
console.log(arr3);

//filter
//it is used to filter out the elements of an array based on a condition
//it calls a function on every element of an array and stores the result in a new array

let arr4=[1,2,3,4,5,6,7,8,9,10];
let even=arr4.filter(isEven);
function isEven(element){
    return element%2==0;
}
console.log(even);

//another example
let arr5=[1,2,3,4,5,6,7,8,9,10];
let odd=arr5.filter(isOdd);
function isOdd(element){
    return element%2!=0;
}
console.log(odd);

//another example

let arr6=[1,2,3,4,5,6,7,8,9,10];
arr6.filter((e)=>{
    if(e%2!==0){
        console.log(e);
    }
})

//another example
let arr7=[1,2,3,4,5,6,7,8,9,10];
let arr8=[11,12,13,14,15,16,17,18,19,20];
let arr9=arr7.filter((e,i)=>{
    if(e%2!==0){
        return e+arr8[i];
    }
})

let datas=["one","two","three","four","five","six","seven","eight","nine","ten"];
datas.forEach((data,i)=>{
    console.log(`${data}, ${i}`);
})
let mydata=[];
arr6.filter((e)=>{
    if(e%2==0){
        mydata.push(e);
    }
})
console.log(mydata);

//reduce
//it is used to reduce the array to a single value
//it calls a function on every element of an array and stores the result in a new array

let arr10=[1,2,3,4,5,6,7,8,9,10];
let sum=arr10.reduce(add1);
function add1(accumulator,element){
    return accumulator+element;
}
console.log(sum);

//another example
let arr11=[1,2,3,4,5,6,7,8,9,10];
let product=arr11.reduce(multiply);
function multiply(sum,e){ //sum and e are the parameters
    return sum*e; //sum is the accumulator and e is the element
}
console.log(product);

//another example
let arr12=[1,2,3,4,5,6,7,8,9,10];
let max=arr12.reduce((max,e)=>{ //max and e are the parameters
    if(max>e){ 
        return max;
    }
    else{
        return e;
    }
})
console.log(max);

//for in loop
//it is used to iterate over the properties of an object
//it returns the keys of an object
//example
let obj={
    name:"john",
    age:20,
    city:"delhi"
}
for(let key in obj){
    console.log(key);
}

//for of loop
//it is used to iterate over the elements of an array
//it returns the values of an array
//example
let arr13=[1,2,3,4,5,6,7,8,9,10];
for(let value of arr13){
    console.log(value);
}

const mybio={
    name:"john",
    age:20,
    city:"delhi"
}
for(let x in mybio){
    console.log(mybio[x]);
}


//fetch api is javascript 

//example

async function getData(){
   await fetch("https://jsonplaceholder.typicode.com/users").then((r)=>r.json()).then((result)=>{
        console.log(result);
    })
} //async and await are used to make the function asynchronous and to wait for the function to complete it behaves as a synchronous function

getData();

//another example
let myd=[];

let myworkdata=new Map();


async function getData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users");
    let result=await response.json();
    result.forEach((e)=>{
        myworkdata.set(e.name,e.email);
    })
}

getData();
console.log(myd);
console.log(myworkdata);


//map in javascript key value pair
//example
let mymap=new Map();
mymap.set("name","john");
mymap.set("age",20);
mymap.set("city","delhi");
console.log(mymap);
console.log(mymap.get("name"));
console.log(mymap.get("age"));
console.log(mymap.get("city"));
console.log(mymap.has("name"));
console.log(mymap.has("age"));
console.log(mymap.has("city"));
//collections in javascript
//set
//it is used to store unique values
//example
let myset=new Set();
myset.add(1);
myset.add(2);
myset.add(3);
myset.add(4);
myset.add(5);

console.log(myset);
console.log(myset.has(1));

//hashmap
//it is used to store key value pairs
//example
let mymaps=new Map();
mymaps.set("name","john");
mymaps.set("age",20);
mymaps.set("city","delhi");
console.log(mymap);


let prom=new Promise((resolve,reject)=>{
    let dataloaded=true;
    if(dataloaded)
    {
        resolve("true")
    }else{
        reject("false");
    }
})
.then((e)=>{
    console.log(e)
}
).catch((error)=>{
    console.log(error)
})

//another example























//react hooks is a feature that allows us to use state and other react features without writing a class
//did mount is a lifecycle method that is called after the component is mounted
//did update is a lifecycle method that is called after the component is updated
//will unmount is a lifecycle method that is called before the component is unmounted
//useEffect is a hook that allows us to use lifecycle methods in functional components
//useEffect is a hook that allows us to use state in functional components
//useEffect is a hook that allows us to use other react features in functional components
