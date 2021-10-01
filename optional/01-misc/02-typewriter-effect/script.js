/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let target = document.getElementById("target");
  target.innerText = "";
  let text = `I am a text which will appear in a "typewriter" effect, a bit like in
  Noir films. Except ... I don't know who the murderer is! Is there really one?
  Does he live at 21? O, what a mystery!`;
  let i = 0;
  let speed = 100;

  function typeWrite() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWrite, speed);
    }
  }
  typeWrite();
})();
