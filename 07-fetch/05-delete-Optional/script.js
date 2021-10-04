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
  let heroes = [];

  async function getData() {
    let data = await fetch("../../_shared/api.json");
    let main = await data.json();
    heroes.push(...main.heroes);

    loadData();
  }

  function loadData() {
    for (let item of heroes) {
      for (let key in item) {
        if (key != "id") {
          console.log(`${key}: ${item[key]}`);
        }
      }
      console.log("");
    }
  }

  function deleteData(id = "") {
    if (id != "") {
      let index = heroes.findIndex((hero) => hero.id == id);
      heroes.splice(index, 1);
      console.log("========= After removing =============");
      loadData();
    } else {
      console.error("Enter Hero ID");
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    deleteData(heroId.value);
  });

  getData();
})();
