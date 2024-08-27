// Singleton

//object literals

//Symbol ke value ko acceses karana
// //variable difined karna
// const mySym = Symbol("key232")
// const mySym1 = Symbol("key165u")
// const mySym2 = Symbol("key298798")
// const mySym3 = Symbol("keyui878i3")
// const mySym4 = Symbol("key487")

// //object.create
// const JsUser = {
//     name: "Ankit",
//     "full name": "Ankit pal",

//     // and key value me likhna

//     mySym: "myKey",
//     [mySym]: "myKey1",
//     [mySym2]: "myKey2",
//     [mySym3]: "myKey3",
//     [mySym4]: "myKey4",

//     age: 24,
//     loaction: "Bijnor",
//     email: "ankit@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Sunday"]
// }
// //ye sahi Tarika nhi hai ker to sakte hai per karna nhi chahiye

// //Access karna
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])




//==================================================
//Symbol ko as a key use karna
// ek Symbol lo aur usko object ke keys me Add karo aur print ker ke dikhao 
const symbol = Symbol("Shahu1")


const User = {
    symbol: "myAnkit",
    [symbol]: "myAnkit"
    
    
}

console.log(User.symbol);
console.log(typeof User.symbol);
console.log(User[symbol]);

//==============================================