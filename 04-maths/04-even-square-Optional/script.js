/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const parent = document.querySelector(".material");
  const resultTag = document.createElement("h2");
  parent.appendChild(resultTag);

  let result = [];

  document.getElementById("run").addEventListener("click", function () {
    // your code here
    for (let i = 1; i <= 21; i++) {
      if (i * i <= 21) result.push(i * i);
    }

    resultTag.innerHTML = `${result}`;
  });
})();
