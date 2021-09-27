/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const humanInfo = [{ age: null }, { gender: "" }, { town: "" }];
  function guestData() {
    humanInfo.age = +prompt("What is you age?");
    humanInfo.gender = prompt("Man or Woman?");
    humanInfo.town = prompt("What city do you live in?");
    alert(
      `
              Age: ${humanInfo.age}
              Gender: ${humanInfo.gender}
              Town: ${humanInfo.town}
              `
    );
  }
  guestData();

  let confirmData = confirm("Is the data correct?");
  if (confirmData === false) {
    guestData();
  }
})();
