/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  async function getData() {
    let data = await fetch("../../_shared/api.json");
    let heroes = await data.json();
    console.log(heroes);
  }
  document.getElementById("run").addEventListener("click", () => {
    getData();
  });
})();
// ANOTHER WAY

// fetch("../../_shared/api.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("HTTP error " + response.status);
//     }
//     return response.json();
//   })
//   .then((json) => {
//     this.users = json;
//     console.log(this.users);
//   })
//   .catch(function () {
//     this.dataError = true;
//   });
