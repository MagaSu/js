/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let ol = document.getElementById("target");

  async function getData() {
    let data = await fetch("../../_shared/api.json");
    let main = await data.json();
    let heroes = main.heroes;

    ol.innerHTML = "";
    for (let item of heroes) {
      for (let key in item) {
        if (key != "id") {
          let li = document.createElement("li");
          li.innerText = `${key}: ${item[key]}`;
          ol.appendChild(li);
        }
      }
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    getData();
  });
})();
