//very Important
//differnece between array and objects is that in array you can't call values by index number [0],[1] and in objects you call by { key : values }

//Objects are defined By 2 types

//singleton
// Object.create

//objects literals

const mysyn = Symbol("Hello")

const User = {
    name:"sahil",
    "full name": "Sahil Sadhuramani",
    //must glance the Syntax to define
    // if we define without [] so it will be work as string
    [mysyn] : "HelloHii",
    age: 23,
    location : "Ahmedabad",
    email : "Sahil@apple.com",
    isloggedIn : false,
    activeStatus : ["Mon" , "Friday"]
}

// console.log(User.email);
// console.log(User[email]); //Error Coz key value name is string but JS automatically convert it to string in dot case so keep in mind that key is String by default
// console.log(User["email"]);

// console.log(User.full name);//It automatically converts it to dot to []
// console.log(User["full name"]);

//Inetview Question Define Symbol datatype in Object
// console.log(User[mysyn]);

//case

User.email= "sahil@google.com";

// Object.freeze(User)

User.email = "sahil@chatgpt.com";

// console.log(User);

//define function in Object

User.Greetings = function() {
    console.log("Hello Ji Kese ho");
}
User.Greetings2 = function() {
    console.log(`Hello Ji Kese ho ${this.name} ji`);
}

// console.log(User.Greetings);//method // Function is not executed Just a refernce is called


// console.log(User.Greetings());//function
// console.log(User.Greetings2());

//Objects 2

// const fbUser= new Object();// singleton
const fbUser = {} // Non-Singleton

const NiuUser= {
    email: "sahil123@gmail.com",
    fullname: {
        userfullName: {
            fname: "Sahil",
            lname: "HelloHii"
        },
    }
}

// console.log(NiuUser.fullname.userfullName.fname);//nesting Object example

let obj1 = {1: "a",2: "b"}
let obj2 = {3: "c",4: "d"}
let obj3 = {5: "e",6: "f"}

//merge the object by Assign method

// const obj4 = {obj1,obj2,obj3};s
// console.log(obj4);

// const obj4 = Object.assign({}/*target*/,obj1,obj2,obj3/* Source*/ );//all the source data is stored in target
// console.log(obj4);

//but remeber that array spread concept ...

const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);

const databaseArrayObjects = [
    {
        id:1,
        email: "Sahil@gmail.com",
    },
    {
        id:2,
        email: "google@gmail.com"
    },
    {
        id:3,
        email: "cook@gmail.com"
    }
]

databaseArrayObjects[1].email;
// console.log(databaseArrayObjects);
//Objects methods
// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

// console.log(Object.hasOwnProperty('name'));


// Advance Topic in Object

//destructuring

const course = {
    cname: "JavaScript",
    price: 999,
    teacher : "Sahil"
}

course.teacher //so for writing clean code we dont repeat Again course.teacher,course.price

//instead
const {teacher:sir}= course // We can name it as we want this is called *DeStructuring* 

// console.log(sir);

//in react this is also needed to be in mind destructuring
const navbar = ({org}) =>{

}

navbar(org= "sahil")

//JSON is nothing much it is Objects and Array of Objects Also

// {
//     "name" : "Sahil",
//     "age": 23,
//     "country" : "india"
// }

[
    {

    },
    {

    },
    {

    }
]





