// const nam = "Sahil"
// let num = 123
// let num2 = 123456789456123456789
// let haveLicence = true
// var age = null

// console.table([nam,num,num2,haveLicence,age])

// console.log(typeof(age))


// let score= 33

// console.log(typeof score);
// console.log(typeof(score));

// let value = String(score);
// console.log(typeof value);
// console.log(value)

// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined == 0);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

const score = 400
// console.log(score);

// const balance = new Number(100)
// // console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(5));

// const hundreds = 1000000
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



let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(newDate.toLocaleString());