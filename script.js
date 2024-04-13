const check = document.querySelector(".check")
const guess = document.querySelector(".guess")
const msg = document.querySelector(".message")
const qnmark = document.querySelector(".number")
const score1 = document.querySelector(".score")
const highscore1 = document.querySelector(".highscore")
const again = document.querySelector(".again")
const text = document.getElementById("text")

let num = Math.floor(Math.random() * 20)

let score = 20

let highscore = 0;

check.addEventListener('click', () => {


    console.log(num);


    let Guess = Number(guess.value)
    if (Guess == "") {

        msg.textContent = "Please enter number in the box"

    }

    else if (Guess > num) {
        score--
        msg.textContent = " your enter number is greater "
        score1.textContent = score;
        if (score < 1) {
            msg.textContent = " you lost the game"
            score1.textContent = "please click again";

        }

    }
    else if (Guess < num) {

        score--
        msg.textContent = " your enter number is lesser "
        score1.textContent = score;

        if (score < 1) {
            msg.textContent = " you lost the game"

            score1.textContent = "please click again";


        }
    }

    else if (Guess == num) {
        score = score;

        score1.textContent = score;
        qnmark.innerHTML = Guess;
        text.textContent = "yes u got correct number";
        msg.textContent = "yes u got correct number";
        document.body.style.backgroundColor = "orange"

        if (highscore < score) {


            highscore = score

            highscore1.textContent = highscore;
        }

    }




    else {

        alert("invalid number")
    }



})


again.addEventListener('click', clearfields)

function clearfields() {

    score = 20


    num = Math.floor(Math.random() * 100);

    msg.textContent = "Start guessing...";
    score1.textContent = 20;
    text.textContent = "Guess My Number!";
    document.body.style.backgroundColor = "#222"
    qnmark.innerHTML = "?";





}


