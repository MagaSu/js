/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
    let rowTag, tdTag, trArr, tdArr;

    for (let i = 1; i <= 11; i++) {
      rowTag = document.createElement("tr");

      for (let j = 1; j <= 11; j++) {
        tdTag = document.createElement("td");
        target.appendChild(rowTag);
        rowTag.appendChild(tdTag);
      }
    }

    trArr = document.querySelectorAll("tr");
    tdArr = document.querySelectorAll("td");

    for (let l = 0; l <= 10; l++) {
      tdArr[l].innerHTML = l;
    }

    for (let k = 0; k < tdArr.length; k++) {
      if (k % 11 === 0 || k === 0) tdArr[k].innerHTML = k / 11;
    }

    tdArr.forEach((tdElem, idx) => {
      if (idx % 11 !== 0 && idx !== 0 && idx > 10) {
        let row = idx % 11;
        let column = Math.floor(idx / 11);

        tdElem.innerHTML = `${row * column}`;
      }
    });
  })();
})();
