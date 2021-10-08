/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value
  const parent = document.querySelector(".material");
  const resultTag = document.createElement("h2");
  parent.appendChild(resultTag);

  const input = document.getElementById("numbers");
  let result = [];

  document.getElementById("run").addEventListener("click", function () {
    // your code here
    result = input.value.split(",");
    result = result.map((num) => (num = parseInt(num))).sort((x, y) => x - y);

    resultTag.innerHTML = `${result}`;
  });
})();
