// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Dichiarazione dell' array con elenco mail
const listM = ["ironmaiden1989@metal.it", "dreamtheater1989@metal.it", "onepiece1989@manga.it", "onepunchman@anime.com"];

// Richiesta mail
const userMail = prompt("Scrivi la tua mail");
console.log("Mail inserita dall'utente:", userMail);

// Condizione per la verifica della mail
let checkMail = false;
for (let i = 0; i < listM.length; i++) {
    const mailAccess = listM[i];
    if (mailAccess === userMail) {
        checkMail = true;
    }
}

console.log("Risultato finale: ", checkMail);

// Stampa finale dell'esito
if (checkMail === true) {
    document.getElementById("result").innerHTML = "La mail corrisponde";
} else {
    document.getElementById("result").innerHTML = "La mail non corrisponde";
};