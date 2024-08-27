const marvel_heros = ["thro", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


//kanch ka gilash Usko uper se faceker todna or sprade ho jayega

// const all_new_Heros = [...marvel_heros, ...dc_heros];
// // console.log(all_new_Heros);

// const another_array = [1,2,3,[4,5,6],7,[3,4,[3,4,5,6,6,6]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("ANKIT"));
console.log(Array.from("ANKIT")); 
console.log(Array.from({name: "ANKIT"})); //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));
