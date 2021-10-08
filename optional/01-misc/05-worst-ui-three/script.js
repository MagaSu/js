/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const target = document.getElementById("target");

  let partOne = document.getElementById("part-one");
  let partTwo = document.getElementById("part-two");
  let partThree = document.getElementById("part-three");
  let partFour = document.getElementById("part-four");

  let fixPartOne = document.getElementById("fix-part-one");
  let fixPartTwo = document.getElementById("fix-part-two");
  let fixPartThree = document.getElementById("fix-part-three");
  let fixPartFour = document.getElementById("fix-part-four");

  const inputArr = [partOne, partTwo, partThree, partFour];
  const btnArr = [fixPartOne, fixPartTwo, fixPartThree, fixPartFour];

  let result = 0;
  let targetResult = [
    "+",
    `${partOne.value}`,
    `${partTwo.value}`,
    `${partThree.value}`,
    `${partFour.value}`,
  ];

  inputArr.forEach((input) => {
    input._interval = setInterval(() => {
      result = parseInt(input.value) + Math.floor(Math.random() * 5);

      if (result > input.getAttribute("data-max"))
        result = input.getAttribute("data-min");

      if (result <= 9 && result > 0) input.value = `0${result}`;
      else input.value = `${result}`;
    }, 50);
  });

  btnArr.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      clearInterval(inputArr[idx]._interval);
      targetResult[idx + 1] = `${inputArr[idx].value}`;
      target.innerHTML = `${targetResult.join("")}`;
    });
  });
})();
