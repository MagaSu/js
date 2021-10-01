/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let text = document.getElementById("target");

  setInterval(() => changeSize(), 500);

  function changeSize() {
    setTimeout(() => {
      text.style.fontSize = "15px";
    }, 100);
    setTimeout(() => {
      text.style.fontSize = "20px";
    }, 200);
    setTimeout(() => {
      text.style.fontSize = "25px";
    }, 300);
    setTimeout(() => {
      text.style.fontSize = "30px";
    }, 400);
    setTimeout(() => {
      text.style.fontSize = "25px";
    }, 500);
    setTimeout(() => {
      text.style.fontSize = "20px";
    }, 600);
    setTimeout(() => {
      text.style.fontSize = "15px";
    }, 700);
  }
})();
