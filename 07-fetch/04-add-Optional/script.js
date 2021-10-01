/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let name = document.getElementById("hero-name");
  let alterEgo = document.getElementById("hero-alter-ego");
  let abilities = document.getElementById("hero-powers");

  async function getData(a = "", b = "", c = "") {
    let data = await fetch("../../_shared/api.json");
    let main = await data.json();
    let heroes = main.heroes;

    if (a != "" && b != "" && c != "") {
      let hero = {
        id: heroes.length + 1,
        name: name.value,
        alterEgo: alterEgo.value,
        abilities: abilities.value,
      };
      heroes.push(hero);
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
    let power = abilities.value.split(",").join("").split(" ");
    if (name.value != "" && alterEgo.value != "" && power != "") {
      getData(name.value, alterEgo.value, abilities.value);
    } else {
      getData();
    }
  });
})();
