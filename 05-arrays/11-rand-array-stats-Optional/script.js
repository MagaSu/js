/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const btn = document.getElementById("run");

  const min = document.getElementById("min");
  const max = document.getElementById("max");
  const sum = document.getElementById("sum");
  const average = document.getElementById("average");

  const numbers = [];
  let randNum = () => Math.floor(Math.random() * 100);

  for (let i = 0; i < 10; i++) {
    numbers.push(randNum());
  }

  btn.addEventListener("click", () => {
    numbers
      .sort((x, y) => x - y)
      .map((num, idx) => {
        document.getElementById(`n-${idx + 1}`).innerHTML = `${num}`;
      });

    let total = numbers.reduce((a, b) => a + b);

    min.innerHTML = numbers[0];
    max.innerHTML = numbers[numbers.length - 1];
    sum.innerHTML = total;
    average.innerHTML = total / numbers.length;

    console.log(numbers);
  });
})();
