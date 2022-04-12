// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let numberuserOne = Math.floor(Math.random() * 6) + 1;
console.log(numberuserOne);

let numberCpu = Math.floor(Math.random() * 6) + 1;
console.log(numberCpu);

let result
if (numberuserOne > numberCpu) {
    result = "Vittoria";
    console.log("Vittoria");
} else if (numberCpu > numberuserOne) {
    result = "Sconfitta";
    console.log("Sconfitta");

} else if (numberCpu === numberuserOne) {
    result = "Pareggio";
    console.log("Pareggio");
}