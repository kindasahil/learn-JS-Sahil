// Functions are in lamen is just a 10-15-... lines of code in Package or packet

function sayName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayName()

function addNum(num1,num2){
    console.log(num1+num2);
}

// addNum(5,6);
// console.log(addNum(2,3)); // undefined

function addtwo(n1,n2) {
    // let result = n1+n2;
    // return result
    return n1+n2
    console.log();// it will not work after return
}

// addtwo(3,5)//it will not print untill log

// console.log(addtwo(3,5));

function UserMessage(name) {
    if(!name){
        console.log("Enter Username");
        return 
    }
    return `hello Welcome Back Buddy ${name}`
}

// console.log(UserMessage("Sahil"));
// console.log(UserMessage(""));

function cartItem(val1,val2,...items/*this ... is used to add multiple values in arguments without writing new arg*/){
    return items
}
// console.log(cartItem(10,20,30,40,50));// val1,val2 values are taken at first

//Objects in functions

const group={
    name:"Sahil",
    age:23,
    degree:"CSIT",
}

function handleObject(anyObj){
    console.log(`username ${anyObj.name} age ${anyObj.age} and degree ${anyObj.degree}`);
}
// handleObject(group);

// handleObject({
//     name : "shetty",
//     age: "22",
//     degree: "IT"
// })

const arr = [100,200,300, 400 ,500]

function secondvalue(getArr){
    return getArr[1]
}
// console.log(secondvalue(arr));

// console.log(secondvalue([100,200,300]));

//Scope Resoultion

var c= 3;
let a= 5;

if(true){
    let a= 10;
    const b=6;
    // console.log("Inner let ",a);
    // console.log("Const" , b);
}
// console.log("Outer let " ,a);
// console.log("Var ",c);

function one(){
    const username ="Sahil";

    function two(){
        const website = "google";
        console.log("Username", username);//child can use parents property but parents can't
    }
    // console.log(website);//You cant use childs values if you are parent class
    two();
}
// one();

if (true) {
    const username = "Sahil"
    if (username === "Sahil") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)//is we declare function in some variable so it will show error and if we use it before declaration the it will show error
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));
// addTwo(5) 

//Arrow Functions

const car = {
    name: "Maruti",
    price : 5,
    quote : function ()  {
        console.log(`${this.name}, Welcomes You`);
        console.log(this);
    }
}
// car.quote()

// car.name = "Polo"
// car.quote()

// console.log(this);// Interview question This keyword will return {} in vscode and in browser it will return global object 


// function chai(){
//     let age= 22
//     // console.log(this.age);
//     console.log(this);
// }
// chai() // it will return global output run it and see it once

// const chai = function(){
//     let brand = "Wagbakari";
//     console.log(this.brand);
// } 
// chai()

const coffee = () => {
    let brand = "nescafe";
    console.log(this.brand);
}

//This keyword can't be used in functions it only work in Objects
//not even in arrow function it will work !!!

// coffee();

//types to define function 
// const addition =(a,b)=>{
//     return a+b;
// }

// const addition= (a,b) => a+b ;

// const addition = (a,b) => (a+b)// best practice

const addition =(a,b) => ({iphone: "apple"}) // define object in function

// console.log(addition(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//It is used to remove global scope pollution or variables VAR

//Important *****
// Immediately Invoked Function Expressions (IIFE)

( function merc(){
    //named IIFE
    console.log("DB Connected");
} )();

( (name)=>{
    console.log(`Helloji KeseHo ${name}`);
})("Sahil");






