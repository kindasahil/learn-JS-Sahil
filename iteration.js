// For Loop ,while Loop ,DoWhile Loop, For of, For In, For Each , Filter , Map , Reduce

for (let i= 0 ; i<=10 ;i++){
    const element = i ;
    if(element == 5){
        // console.log("5 is best");
    }
    // console.log(i);
}

// console.log(element);Out of scope

for (let i = 0; i < 5; i++) {
    // console.log(`inner loop ${i}`);
    for (let j = 0; j < 2; j++) {
        // console.log(`Outer Loop ${j}`);
    }
}

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
    // console.log(element);
    
// }

// break and continue

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break;
    }
//    console.log(`Value of i is ${index}`);
    
}

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         // console.log(`Detected 5`);
//         continue
//     }
// //    console.log(`Value of i is ${index}`);
    
// }

//While Loop

// let index = 0
// while (index <= 10) {
//     // console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let Arrayy = ['flash', "batman", "superman"]
// let arr = 0
// while (arr < Arrayy.length) {
//     console.log(`Value is ${Arrayy[arr]}`);
//     arr = arr + 1
// }


// do while
// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

//( for of )

// ["", "", ""]
// [{}, {}, {}]

// const arr= [1,2,3,4,5]

// for (const key of arr) {
//     // console.log(key);
// }/

// const word = "hello world !"

// for (const key of word) {
//     console.log(key);
// }

//Map 

// const map =new Map();
// map.set('In',"India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// // console.log(map);

// for (const [key,value] of map) {
//     // console.log(key);
//     // console.log([key,value]);
    
// }


//objects are not iterable in for of loop


// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


//for in

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

//maps are not iterable in for in loop



// for each loop

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

// function print(item){
//     console.log(item);
// }

// coding.forEach(print)//only call reference not function


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


// myCoding.forEach((item) => {
//     console.log(item.languageFileName);
// })
// **********************************Important*****************************************

// map(): Executes a function on each element of an array and returns a new array with the same length.
// filter(): Removes items that don't satisfy a condition and creates a new array containing the ones needed.
// reduce(): Creates a single value from elements of an array.

//*********************************************************************************************

// map() transforms every element in an array individually and creates a new array.
// filter() removes elements that are not required and creates a new array containing the ones needed.
// reduce() takes all of the elements in an array and reduces them into a single value.

//Filter

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values= coding.forEach( (item) => {
//     // console.log(item);
//     return item // no return in for each so we use filter 

// } )
//     console.log(values);// undefined


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num)=> num >4 ) //when using non block scope no return keyword is needed
// const newNums = myNums.filter( (num)=> {return num >4} )// when using block scope return keyword is must to use keep in mind

// console.log(newNums);

// const newNums = []

// myNums.forEach( (nums) => {
//     if (nums>4) {
//        newNums.push(nums)
//     }
// } )
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => {
//     return bk.genre === 'History'
//   } )

  let userBooks =  books.filter( (bk) => bk.genre ==='History' && bk.publish > 1950  )
  console.log(userBooks);


  //Map 

  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//   const newNums= myNumers.map( (nums) => {return nums+10} )

//   console.log(newNums);

  const newNums = myNumers
                    .map((nums)=> nums * 10 )
                    .map((nums)=> nums + 1)
                    .filter((nums)=> nums>40)

  console.log(newNums);

  //Reduce

//   const myNums = [1,2,3]

//   const total = myNums.reduce(function (accual , currval) {
//     console.log(`accual : ${accual}  and Current Value : ${currval}`);
//     return accual + currval;

//   },0/*this is empty variable value */ )

//   console.log(total);


//   //direct
//   const mytotal = myNums.reduce((acc,curr) => acc+curr,0)

//   console.log(mytotal);

  const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0 )

console.log(priceToPay);


