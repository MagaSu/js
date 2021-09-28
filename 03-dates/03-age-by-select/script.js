/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  //   let todayYear = todayDate.getFullYear();
  //   let todayMonth = todayDate.getMonth();
  //   let todayDay = todayDate.getDay();
  let d = document.getElementById("dob-day");
  let m = document.getElementById("dob-month");
  let y = document.getElementById("dob-year");
  let age;

  document.getElementById("run").addEventListener("click", () => checkAge());

  function checkAge() {
    let bd = d.options[d.selectedIndex].text;
    let bm = m.options[m.selectedIndex].value;
    let by = y.options[y.selectedIndex].text;

    let dob = new Date(by, bm, bd);
    let dobNow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    age = today.getFullYear() - dob.getFullYear();
    if (today < dobNow) {
      age = age - 1;
    }
    alert(`You age is ${age}`);
  }
})();
