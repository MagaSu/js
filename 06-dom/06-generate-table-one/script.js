/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  (function () {
    // your code here
    const target = document.getElementById("target");

    for (let i = 1; i <= 10; i++) {
      const rowTag = document.createElement("tr");
      const tdTag = document.createElement("td");
      rowTag.appendChild(tdTag);

      tdTag.innerHTML = "Hello, World!";

      target.appendChild(rowTag);
    }
  })();
})();
