/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let heroId = document.getElementById("hero-id");

  async function getData(id = "") {
    let data = await fetch("../../_shared/api.json");
    let main = await data.json();
    let heroes = main.heroes;

    if (id != "") {
      let index = heroes.findIndex((hero) => hero.id == id);
      heroes.splice(index, 1);
    }

    for (let item of heroes) {
      for (let key in item) {
        if (key != "id") {
          console.log(`${key}: ${item[key]}`);
        }
      }
      console.log("");
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    getData(heroId.value);
  });
})();
