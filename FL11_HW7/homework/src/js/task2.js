let playGame = confirm("Do you want to play a game?");

while (playGame) {
  let countRandom = 8;
  let randomNum = Math.round(Math.random() * countRandom);
  let prize = 0;
  let currency = 100;
  let maxPrize = currency;
  let number2 = 2;
  let number4 = 4;
  let number3 = 3;

  let count = number3;

  console.log(randomNum);

  for (count; count > 0; ) {
    let NumberPock = prompt(`Choose a roulette pocket number from 0 to ${countRandom}:
    Attempts left: ${count}
    Total prize: ${prize}$
    Possible prize on current attempt: ${maxPrize}$`);

    count--;
    if (+NumberPock === randomNum) {
      prize = maxPrize;
      playGame = confirm(
        `Congratulation, you won!   Your prize is: ${prize} $. Do you want to continue?`
      );
      if (playGame) {
        countRandom = countRandom + number4;
        currency = currency * number2;
        maxPrize = currency;
        randomNum = Math.round(Math.random() * countRandom);
        count = number3;
      } else {
        break;
      }
    } else {
      maxPrize = maxPrize / number2;
    }
  }

  alert(`Thank you for your participation. Your prize is: ${prize} $`);

  playGame = confirm("Do you want to play a game again?");
}

alert("You did not become a billionaire, but can.");
