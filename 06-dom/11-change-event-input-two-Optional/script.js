/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // you code here
  let passOne = document.getElementById("pass-one");
  let validity = document.getElementById("validity");

  const countDigits = (string) => {
    let digitsCount = 0;
    for (let letter of string) {
      if (Number(letter)) digitsCount++;
    }
    return digitsCount;
  };

  passOne.addEventListener("input", (e) => {
    const digitsCount = countDigits(e.target.value);
    if (e.target.value.length >= 8 && digitsCount >= 2) {
      validity.innerHTML = "Ok";
    } else {
      validity.innerHTML = "Not Ok";
    }
  });
})();
