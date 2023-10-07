// Permutation de variables

let a = "a";
let b = "b";

[a, b] = [b, a]

console.log(a);
console.log(b);

// Solution classique utilisant une variable temporaire

let firstName = "Quentin";

firstName = "Nicolas";

console.log(firstName);

// Solution alternative valable uniquement pour des nombres
/* nombre1 += nombre2;
nombre2 = nombre1 - nombre2;
nombre1 -= nombre2; */