/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let secretNumber = Math.trunc(Math.random() * 100) + 1;
  let gameResult = false;
  let i = 0;

  console.log(secretNumber);

  do {
    let question = +prompt("Guess the number");
    i++;
    if (question < secretNumber) {
      alert("Higher!");
    } else if (question > secretNumber) {
      alert("Lower!");
    } else if (question == secretNumber) {
      gameResult = true;
      alert(`That's it! You needed ${i} guesses`);
    }
  } while (gameResult == false);
})();
