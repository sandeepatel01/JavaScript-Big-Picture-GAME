console.log("Restart With JavaScript");

//******************** Comparision In JavaScript *************************

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(3 >= 3);
// console.log(5 <= 4);
// console.log(1 == 1);

// console.log("2" == 2);
// console.log("2" === 2);
// console.log("03" > 2);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(null == 0);
// console.log(null === 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined === 0);



// ***************** Datatype Summary *************************

//  Primitive - call by value
//  7 types :
//   String,
//   Number,
//    Boolean,
//    null,
//    undefined,
//    Symbol,
//    BigInt 


const score = 55;
const scoreValue = 22.5;

const isLongIn = true;
const outSideTemperature = null;
let userName;

const id = Symbol('333');
const anotherId = Symbol('333');

// console.log(id == anotherId);
// console.log(id === anotherId);

const bigNumber = 3456543576654356754n;



// Reference (Non primitive) - call by referance

// Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"];

const userDetials = {
    name: "Sandy",
    age: 22,
    course: "B.tech"
}

const myFunction = function () {
    // console.log("Restart with JavaScript");
}

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLongIn);
// console.log(typeof outSideTemperature);
// console.log(typeof userName);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof bigNumber);

// console.log(typeof heros);
// console.log(typeof userDetials);
// console.log(typeof myFunction);




// ********************************* String In JavaScript *************************

const name = "Sandeep";
const repoCount = 25;

// console.log(name + repoCount);
// console.log(`My name is ${name} and my repo count is ${repoCount}`);


// String Methods 
const discordName = new String('Sandeep-pt');

// console.log(discordName[0]);
// console.log(discordName[6])
// console.log(discordName.__proto__);


// console.log(discordName.length);
// console.log(discordName.toUpperCase());
// console.log(discordName.toLowerCase());

// console.log(discordName.charAt(1));
// console.log(discordName.charAt(0))
// console.log(discordName.charAt(6));

// console.log(discordName.indexOf('S'));
// console.log(discordName.indexOf('p'));
// console.log(discordName.indexOf('d'));




// const newString = discordName.substring(0, 4);
// const newString = discordName.substring(1, 4);
// const newString = discordName.substring(3, 6);
// const newString = discordName.substring(-3, 7);
const newString = discordName.substring(3, 7);
// console.log(newString);


// const anotherString = discordName.slice(-7, 3);
// const anotherString = discordName.slice(-7, 7);
const anotherString = discordName.slice(2, 7);
// console.log(anotherString)


const newStringOne = "   Sandy       ";
// console.log(newStringOne);
// console.log(newStringOne.trim());



//    replace & include[t/f] method 
const url = "https://sandeep.com/sandeep%20patel"
// console.log(url.replace('%20', '_'));
// console.log(url.includes('Sandy'))

let sentence = 'This is a sample sentence.';
let includesSample = sentence.includes('sample'); // Returns true

// console.log(includesSample);


// console.log(discordName.split('-'));
// console.log(discordName.split(' '));
// console.log(discordName.split(' ', '-'));


//  blink Method
// const contentString = "Hello, world";
// document.body.innerHTML = contentString.blink();
// console.log(contentString);



// lastIndexof method 
let sample = 'This is a sample sentence.';
let indexOfIs = sentence.indexOf('is'); // Returns the index of the first occurrence of 'is'
let lastIndexOfIs = sentence.lastIndexOf('is'); // Returns the index of the last occurrence of 'is'

// console.log(indexOfIs); // 2
// console.log(lastIndexOfIs); // 5

// console.log(discordName.lastIndexOf('S'))
// console.log(discordName.lastIndexOf('p'))
// console.log(discordName.lastIndexOf('d'))



// concat() method 
let str1 = "Sandeep";
let str2 = " Patel";

let greeting = str1.concat(str2);
// console.log(greeting);



// charAt() and charCodeAt() Methods 
let str = 'Hello, World!';
let charAtIndex2 = str.charAt(2); // Returns the character at index 2 ('l')
let charCodeAtIndex2 = str.charCodeAt(2); // Returns the Unicode value of the character at index 2 (108)

// console.log(charAtIndex2);
// console.log(charCodeAtIndex2);

// console.log(discordName.charCodeAt(1));



// substring() method 
let longString = 'This is a long string.';
let substring = longString.substring(5, 10);

// console.log(substring); // 'is a '


// substr() Method 
let longString1 = 'This is a long string.';
let subStr = longString1.substr(5, 7);

// console.log(subStr); // 'is a lo'




// startsWith() and endsWith() Methods 
let message = 'Hello, JavaScript!';
let startsWithHello = message.startsWith('Hello'); // Returns true
let endsWithScript = message.endsWith('Script'); // Returns true

// console.log(startsWithHello);
// console.log(endsWithScript);
// console.log(message.endsWith("JavaScript"));
// console.log(message.startsWith("Hello"));
// console.log(message.startsWith("Sandy"));



// repeat() Methods 
let repeatedString = 'Sandy'.repeat(3);
// console.log(repeatedString); // 'abcabcabc'



// trimStart() and trimEnd() (introduced in ECMAScript 2019)

let paddedString = '   Trim me!   ';
let trimmedStartString = paddedString.trimStart();
let trimmedEndString = paddedString.trimEnd();

// console.log(trimmedStartString); // 'Trim me!   '
// console.log(trimmedEndString); // '   Trim me!'



// padStart() and padEnd()(introduced in ECMAScript 2017)

let paddedString1 = '5';
let paddedStart = paddedString1.padStart(3, '0'); // '005'
let paddedEnd = paddedString1.padEnd(3, '0'); // '500'

// console.log(paddedStart);
// console.log(paddedEnd);






// ************************************ Numbers in JavaScript *************************************

const score1 = 50;
// console.log(score);

const balance = new Number(200);
// console.log(balance);

// toString() Method 
// console.log(balance.toString());
// console.log(balance.toString().length);

// toFixed() method 
// console.log(balance.toFixed(5));
// console.log(balance.toFixed(2));


// toPrecision() Method 
// const bankBalance = 155;
const bankBalance = 155.456;
// console.log(bankBalance.toPrecision(4));
// console.log(bankBalance.toPrecision(2));
// console.log(bankBalance.toPrecision(3));


// toLocalString() Method 

const SBIBalance = 20000;
// console.log(SBIBalance.toLocaleString());  //usa form
// console.log(SBIBalance.toLocaleString('en-IN'));


const num1 = Number.MAX_SAFE_INTEGER
const num2 = Number.MIN_VALUE
const num3 = Number.isInteger
const num4 = Number.MAX_VALUE
const num5 = Number.NEGATIVE_INFINITY
const num6 = Number.POSITIVE_INFINITY

// console.table([num1, num2, num3, num4, num5, num6])




// **************** Maths In JavaScript ************ 
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// toExponential(fractionDigits) method 
let num = 123.456;
// console.log(num.toExponential(2));  // "1.23e+2"

// valueOf() method 
let numObj = new Number(42);
let numPrimitive = numObj.valueOf();  // 42




//***************/ Date And Time In JavaScript ******************

// dates  in javaScript 

let todate = new Date();

// console.log(todate);
// console.log(todate.getDate());

// console.log(todate.getDay());
// console.log(todate.getFullYear());
// console.log(todate.getHours());
// console.log(todate.getMilliseconds());
// console.log(todate.getMinutes());
// console.log(todate.getMonth());
// console.log(todate.getMonth());
// console.log(todate.getMonth() + 1);
// console.log(todate.getSeconds());

// console.log(todate.getTime());
// console.log(todate.getTimezoneOffset());
// console.log(todate.getUTCDate());
// console.log(todate.getUTCDay());


// console.log(todate.toString());
// console.log(todate.setDate());
// console.log(todate.Date());

// console.log(todate.toDateString());
// console.log(todate.toString());
// console.log(todate.toLocaleString());


// console.log(typeof todate);


// let myCreateDate = new Date(2023, 7, 15)
// let myCreateDate = new Date(2023, 7, 15, 5, 3)
let myCreateDate = new Date("2023-01-15")

// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());



let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Date.now()); // milisecond 
// console.log(Math.floor(Date.now() / 1000));     // second

let newDate = new Date();

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})





// **************************Array In JavaScript ******************

const arr = [10, 20, 30, 40, 50];
const heros1 = ["Shaktiman", "nagraj"];

const myArr = new Array(10, 20, 30, 40, 50);

// console.log(arr);
// console.log(myArr)
// console.log(myArr[1]);



// Array methods

myArr.push(60)
// console.log(myArr);

// myArr.push(70)
// console.log(myArr);

// myArr.pop()
// console.log(myArr)

// myArr.unshift(90)
// console.log(myArr);

// myArr.shift()
// console.log(myArr)


// console.log(myArr.includes(90));
// console.log(myArr.includes(20));

// console.log(myArr.indexOf(30));
// console.log(myArr.indexOf(90));



const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);



// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log("C ", myArr);


// ************************** Another Methods in Arrays ***********************************

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // sprade operator
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// const real_another_array = another_array.flat(1)
const real_another_array = another_array.flat(2)
// console.log(real_another_array);



// console.log(Array.isArray("sandy"))
// console.log(Array.from("sandy"))
// console.log(Array.from({ name: "sandy" })) // interesting

let score0 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score0, score2, score3));





// ************************ Object in JavaScript *********************

// singleton
// Object.create -> constructure method


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sandeep",
    "full name": "Sandeep Patel",
    [mySym]: "mykey1",
    // mySym: "mykey1",
    age: 18,
    location: "Bareilly",
    email: "sandeep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sandeep@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sandeep@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
// console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo());