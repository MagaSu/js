/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let target = document.getElementById("target");
  let counter = 0;

  function getData() {
    counter = parseInt(localStorage.getItem("counter"), 10);
    target.innerText = counter;
  }

  function setData() {
    counter++;
    target.innerText = counter;
    saveData();
  }

  function saveData() {
    localStorage.setItem("counter", counter);
  }

  getData();
  document.getElementById("increment").addEventListener("click", () => {
    setData();
  });
})();
