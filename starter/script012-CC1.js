/*****************************
* CODING CHALLENGE 1
*/

/*

Mark et John veulent comparer leur BMI (Indice de masse corporelle),
qui est calculé en utilisant la formule :
BMI = poids / taille^2 = poids / (taille * taille).
N.B. Le poids est en kg et la taille est en mètres.

1. Stockez le poids et la taille de  Mark et de John dans des variables
2. Calculez le BMI de chacun
3. Créez une variable booléenne qui contient l'information de savoir
   si Mark a un BMI plus élevé que John.
4. Imprimez une chaîne de caractères dans la console contenant la
variable de l'étape 3. (Quelque chose du genre "Est-ce que le BMI de
Mark est plus élevé que celui de John ? true"). 

BONNE CHANCE 😀
*/

const poidsMark = 65;
const tailleMark = 1.75;
const poidsJohn = 75;
const tailleJohn = 1.80;

console.log(poidsMark / (tailleMark * tailleMark));
console.log(poidsJohn / (tailleJohn * tailleJohn));

const Mark = 21
const John = 23

let isGreater = (Mark < John);

console.log(`Est-ce que le BMI de Mark est plus èlevé que celui de John? ${isGreater}`)