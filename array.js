//Types to declare array

let arr = [0,1,2,3,4]
const Hero = ["Sahil","Hello"]

const arr2 = new Array(0,1,2,3,4)

// console.log(arr[1]);
// console.log(Hero[1]);
// console.log(arr2[1]);

//array Methods

// arr.push(6);
// arr.push(7);
// arr.pop();

// console.log(arr);

// arr.shift();
// arr.shift();
// arr.unshift(5);

// console.log(arr);

// console.log(arr.includes(8));
// console.log(arr.indexOf(3));

const newArr = arr.join();

// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

//Splice Slice

// console.log("A ", arr) //Original Array

// const ny2= arr.slice(1,3);
// console.log(ny2);

// console.log("B ",arr); //Slice does not Inclides original Array in operation

// const ny3 = arr.splice(1,3);
// console.log(ny3); 
// console.log("C " ,arr); //Splice Includes Original Array


//Array 2

let myarr= ["Ram" , "Shayam", "Raju"];
let myarr2= ["Sita", "geeta" , "Radha"];

// myarr.push(myarr2);

// console.log((myarr)); // Array takes another arrays vales as single array at position 4
// console.log(myarr[3][1]); // not a good practice

// let newvar = myarr.concat(myarr2); // Concat Combines two arrays as single array and returns new array
// console.log(newvar); // It has limitation of only one array

//In best Practices Spread is used

let allinOne = [...myarr,...myarr2];
// console.log(allinOne);

let situation = [1,2,3,[2,3,4],5,6,[1,2,[2,68,8],8]]// Must Notice how to solve this
// console.log(situation);
let solve= situation.flat(Infinity); 
// console.log(solve);

//checking and converting to array

console.log(Array.isArray("Sahil")); // is it array or not
console.log(Array.from("Sahil"));//into array 
console.log(Array.from({name:"Sahil"}));// Intresting case we have to tell first of what you want to make array likey keys,values,etc

let sc1= 100
let sc2= 200
let sc3= 300

console.log(Array.of(sc1,sc2,sc3)); //returns a new array










 




