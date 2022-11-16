const words = ["pappyhhhhh", "beachf", "apple", "reactpp", "bas",
 "angerrrrrrr", "hell", "dress6666666"];
 let word;
const N_LETTERS = 5;
const sectionElement = document.querySelector(".word-guess")
sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");
const trialsElement = document.querySelector(".guess-trials");
const gameOverElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");

let flGameOver = false;
const INITIAL_TRIALS = 6;
let trials = INITIAL_TRIALS;
function getDivsElements() {
    let index = Math.floor(Math.random() * words.length);
   
    let wordField = words[index];
    let wordFieldAr = Array.from(wordField);
    let res = wordFieldAr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}
function showTrialsMessage(trials) {
    
        trialsElement.innerHTML = 
        `remained ${trials} guess trials`;
    
   
}
function startGame() {
    letterElements[2].style.background="white"
}
function onChange(event) {
    const wordGuess = event.target.value;
    
    if (flGameOver) {
        alert("game is over");
        return;
    }
    trials--;
    showTrialsMessage(trials);
     
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
        const colors = wordAr.map((letter, i) => {
            let index = word.indexOf(letter);
            let res = 'red';
            if (index  > -1) {
                res = letter == word[i] ? 'green' : 'yellow'
            }
            return res;
        })
        colors.forEach((c, i) =>
         letterElements[i].style.color=c)
    }
    const res = wordGuess == word;
    if (trials == 0 || res) {
        endGame(res);
    }
    
}
function endGame(isSuccess) {
    if (isSuccess) {
        gameOverElement.innerHTML =  "Congratulations you are winner";
        gameOverElement.style.color = "green"
    } else {
        gameOverElement.innerHTML =  "Sorry you are loser";
        gameOverElement.style.color = "red"
    }
   
   playAgainElement.style.display='block';
   trialsElement.innerHTML = '';
   flGameOver = true;
}
startGame()