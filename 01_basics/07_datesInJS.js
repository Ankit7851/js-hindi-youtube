let myDate = new Date();
//console.log(myDate.toDateString());
// console.log(myDate.toString());
//console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
 //console.log(myDate.getTimezoneOffset());
// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("2024-05-24");

// console.log(myCreatedDate.toLocaleString());


// console.log(myCreatedDate.toDateString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());


// let newDate= new Date();
// console.log(Math.floor(Date.now()/1000));
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// `${newDate.getDay()}and the time`


new Date.toLocaleString('default', {
    weekday: "long",
    timeZone: 'time'
});