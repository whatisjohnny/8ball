// JavaScript Code
let spEl = document.getElementById("spid");
let balEl = document.getElementById("ball");
let inEl = document.getElementById("inpid");

// Event Listeners
balEl.addEventListener("click", clickBall);

// Functions
function clickBall() {
  let randNum = Math.random();
  if (inEl.value === "") {
    spEl.innerHTML = "Enter a question.";
  } else if (randNum < 0.2) {
    spEl.innerHTML = "Try again later.";
  } else if (randNum < 0.4) {
    spEl.innerHTML = "No.";
  } else if (randNum < 0.6) {
    spEl.innerHTML = "Yes.";
  } else if (randNum < 0.8) {
    spEl.innerHTML = "Maybe.";
  } else {
    spEl.innerHTML = "Give me a moment to think and try again.";
  }
}
