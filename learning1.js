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