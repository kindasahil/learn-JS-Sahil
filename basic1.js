//variables
const accId = 151515;
let accEmail = "Sahil123@gmail.com";
var accPass = "123456";

accCity = "Ahmedabad";

let AccState;
//Const never Change
// accId = 121212;

accEmail= "heySahil123@gmail.com";
accPass= "141414";
accCity= "Jaipur"

// console.log(accId);

//var is local scope and let is blocked Scope
//try to use Let not VAR

// console.table([accId,accEmail,accPass,accCity,AccState])

//dataTypes

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

// console.log(3 + 3) // code readability should be high

// console.log("Hitesh")


let name = "sahil"
let age = 18
// let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

//Conversion Operation

let score = "Sahil"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Sahil"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//33 => "33" 

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "Sahil"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 1+2 , 2 => 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.log(num1);

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


 //Comparison

// console.log(2 > 1); // T
// console.log(2 >= 1); // T
// console.log(2 < 1);  // F
// console.log(2 == 1); // F
// console.log(2 != 1); // T


// console.log("2" > 1); // T
// console.log("02" > 1); // T

// console.log(null > 0); //F
// console.log(null == 0); //F
// console.log(null >= 0); //T

// console.log(undefined == 0);//F
// console.log(undefined > 0);//F
// console.log(undefined < 0);//F

// === 

// console.log("2" === 2); //F

//String

const name1="Sahil"
const repoCount = 50

// console.log(name1 + repoCount + "hello");

// console.log(`Hello ${name1} count is ${repoCount}.`);

const gameName = String('Hey-Sahil');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,5);
// console.log(newString);

const newCheck = gameName.slice(-8,5);
// console.log(newCheck);

const newStringOne = "     Happy     "
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));


const num = 100
// console.log(num);

const newNum =new Number(200)
// console.log(newNum);

// console.log(newNum.toString().length);
// console.log(newNum.toFixed(5));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score1 = 100
const scoreValue = 100.3

const isLoggedIn1 = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);//different hai

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array

//Object {}
let myObj = {
    name: "hitesh",
    age: 22,
}

//Function
const myFunction = function(){
    console.log("Hello world");
}

// myFunction();

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3