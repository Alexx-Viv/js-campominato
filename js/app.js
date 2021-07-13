const max = 100;
const min = 1;
const numberBomb = 50;
let bombIndex = 0;
let userIsPlayng = true;
let bombs = [];
let usedNumbers = [];

// GENERATORE DI N BOMBE CASUALI E NON RIPETIBILI
while (bombIndex < numberBomb) {
  let number = Math.floor(Math.random() * max + min);
  if (!bombs.includes(number)) {
    bombs.push(number);
    bombIndex++;
  }
}

playGame(bombs);

if (!userIsPlayng) {
  alert("Hai perso :C");
} else {
  alert("Hai vintooooo!");
}

// FUNZIONE PER CHIEDERE UN NUMERO AL GIOCATORE SEMPRE DIVERSO
function askNumber() {
  let userNumber = prompt("inserire un numero da 1 a 100.");
  while (!userNumber || isNaN(userNumber) || usedNumbers.includes(userNumber)) {
    userNumber = prompt("inserire un numero da 1 a 100.");
  }
  return parseInt(userNumber);
}
// FUNZIONE PER CERCARE QUEL NUMERO TRA LA LISTA DELLE BOMBE
function searchBomb(bombs, userNumber) {
  for (var i = 0; i < bombs.length; i++) {
    if (bombs.includes(parseInt(userNumber))) {
      return true;
    } else {
      usedNumbers.push(userNumber);
      return false;
    }
  }
}
// FUNZIONE PER METTERE IN LOOP ASKNUMBER E SEARCHBOMB FINO A QUANDO PLAYER NON VINCE O PERDE
function playGame(bombs) {
  for (var i = 0; i < bombs.length; i++) {
    let userNumber = askNumber();
    if (searchBomb(bombs, userNumber)) {
      return (userIsPlayng = false);
    } else {
      alert("La prossima volta non sarai così fotunato :P");
    }
  }
}
