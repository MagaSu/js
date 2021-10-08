/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let target = document.getElementById("target");

  let partOne = document.getElementById("part-one");
  let partTwo = document.getElementById("part-two");
  let partThree = document.getElementById("part-three");
  let partFour = document.getElementById("part-four");

  const btns = [partOne, partTwo, partThree, partFour];

  btns.forEach((btn) => {
    let result = 0;

    btn.addEventListener("click", () => {
      result = +btn.innerHTML + 1;
      if (result > btn.getAttribute("data-max"))
        result = btn.getAttribute("data-min");

      if (result <= 9) btn.innerHTML = `0${result}`;
      else {
        btn.innerHTML = `${result}`;
      }
      target.innerHTML = `0${partOne.innerHTML}${partTwo.innerHTML}${partThree.innerHTML}${partFour.innerHTML}`;
    });
  });
})();
