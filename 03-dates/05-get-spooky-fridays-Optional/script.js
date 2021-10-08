/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const btn = document.getElementById("run");
  const input = document.getElementById("year");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let months13 = [];

  input.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) run.click();
  });

  btn.addEventListener("click", function () {
    btn.innerHTML = "";

    for (let i = 1; i <= 12; i++) {
      let date = new Date(i + "/13/" + input.value);

      if (date.getDay() == 5) {
        months13.push(months[date.getMonth()]);
      }
    }

    for (let j = 0; j < months13.length; j++) {
      btn.innerHTML += months13[j] + `<br>`;
    }

    months13.splice(0, months13.length);
  });
})();
