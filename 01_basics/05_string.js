const name = "ankit";
const repoCount = 50;
// console.log(name + repoCount + "Value");

// `` use to backtic symbol and StringInterpullation

// console.log(`Hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);
// console.log(`Hello my name is ${name.toLowerCase()} and my repoCount is ${repoCount}`);

const gameName = new String("ankitkumar-com-google");
console.log(gameName.split('#'));

// console.log(gameName[5]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

/*
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice:ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
Symbol(padEnd): ƒ (b,c)
Symbol(padStart): ƒ (b,c)
Symbol(padStart): ƒ (b,c)
[[Prototype]]: Object
[[PrimitiveValue]]: ""
[[PrimitiveValue]]: ankit"
﻿
*/

// const gameName = new String("ankitkumar");

// const nawString = gameName.substring(0, 4);
// console.log(nawString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

// const newStringOne = "  ankit  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://ankit.com/ankit%20pal"
console.log(url.replace('%20', '_'));
console.log(url.replace('ankit', '@'));
console.log(url.replace('/', '@'));
console.log(url.replace('pal', '@'));

console.log(url.includes('com'));

console.log("hello ankit");