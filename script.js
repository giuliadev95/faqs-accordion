/*
const by class = plus icon
constant by class = minus icon
constant by class = answer paragraph

plus icon -> click listener, when clicked -> toggle hide.state + toggle.show state of icon minus +
toggle show.state for the answer paragraph

minus icon -> click listener, when clicked -> toggle hide state for itself, toggle hide.state for the answer paragraph, toggle show.state for the plus icon

EVENT LISTENER ON PLUS ICON, SITUATION
SHOW ICON PLUS
HIDE ICON MINOR
HIDE ANSWER

EVENT LISTENER ON MINUS ICON, SITUATION
HIDE ICON PLUS
SHOW INCON MINOR
SHOW ANSWER
*/

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const answer = document.querySelectorAll(".answer");

plus.forEach((plus, index) => {
    plus.addEventListener("click", function showAnswer() {
        plus.classList.add("hide"); // add .hide class 
        minus[index].classList.add("show"); // add .show class 
        answer[index].classList.add("show"); // add .show class
    });
})


minus.forEach((minus, index) => {
    minus.addEventListener("click", function hideAnswer() {
        plus[index].classList.remove("hide");
        minus.classList.remove("show");
        answer[index].classList.remove("show");
    });
});

/* Speech speed via Speech API */


