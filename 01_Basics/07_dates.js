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

console.log(Date.now()); // milisecond 
console.log(Math.floor(Date.now()/1000));     // second
 
let newDate = new Date();

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newDate);
















