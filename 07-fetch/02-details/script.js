/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  // NOT FINISHED YET
  let heroId = document.getElementById("hero-id");
  let ol = document.getElementById("target");

  async function getData(id) {
    let data = await fetch("../../_shared/api.json");
    let main = await data.json();
    let heroes = main.heroes;

    ol.innerHTML = "";
    for (let item of heroes) {
      if (item.id == id) {
        for (let key in item) {
          if (key != "id") {
            let tag = document.createElement("li");
            tag.innerText = `${key}: ${item[key]}`;
            ol.appendChild(tag);
          }
        }
      }
    }
  }
  document.getElementById("run").addEventListener("click", () => {
    getData(heroId.value);
  });
})();
