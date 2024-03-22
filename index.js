// Write your solutions here
const cats=["Milo","Otis", "Garfield"];

console.log(cats)

const destructivelyAppendCat=(name)=> cats.push("Ralph");

const destructivelyPrependCat=(name)=>cats.unshift("Bob");

const destructivelyRemoveLastCat=(name)=>cats.pop();

const destructivelyRemoveFirstCat=(name)=>cats.shift();

const appendCat=(name)=>[...cats,"Broom"];

const prependCat=(name)=>["Arnold",...cats];

const removeLastCat=(name)=>cats.slice(0,2);

const removeFirstCat=(name)=>cats.slice(1)