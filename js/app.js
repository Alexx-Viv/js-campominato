const max = 100;
const min = 1;
const numberBomb = 80;
let userIsPlayng = true;
let bombs = [];
let usedNumbers = [];

// GENERATORE DI N BOMBE CASUALI E NON RIPETIBILI
while (bombs.length < numberBomb) {
  let number = Math.floor(Math.random() * (max - min +1 )+ min);
  if (!bombs.includes(number)) {
    bombs.push(number);
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
  let isBomb = true;
    if (!bombs.includes(parseInt(userNumber))) {
      usedNumbers.push(userNumber);
      isBomb = false;
    }
    return isBomb;

  }

// FUNZIONE PER METTERE IN LOOP ASKNUMBER E SEARCHBOMB FINO A QUANDO PLAYER NON VINCE O PERDE
function playGame(bombs) {
  let i = 0;
  while (i < (max - bombs.length) && userIsPlayng === true) {
    let userNumber = askNumber();
    if (searchBomb(bombs, userNumber)) {
      userIsPlayng = false;
    } else {
      alert("La prossima volta non sarai così fotunato :P");
    }
    i++;  }
}
