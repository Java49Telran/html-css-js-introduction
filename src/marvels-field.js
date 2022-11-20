//Configuration
const words = ["Messi", "Germany", "France",
    "unknown", "Israel"]
const questions = ["best player on Mondeal 2014",
    "country champion in mondeal 2014", "country champion in mondeal 2018",
    "country champion in mondeal 2022",
    "country that does not participate in Mondeal 2022"];
/******************************************* */
//DOM elements
const sectionElement = document.querySelector(".word-guess")
const inputElement = document.querySelector("input");
const playAgainElement = document.getElementById("play-again");
const overGameMessageElement = document.querySelector(".game-over-message");
const questionElement = document.getElementById("question");
const guessMessageElement = document.getElementById("guess-message");
let lettersElements;
/****************************************************** */
//variable seen from all functions
let word;
let trials = 0;
let previousIndex = questions.length;
//functions
//action functions
function startGame() {
    inputElement.value = '';
    inputElement.disabled = false;
    const index = getIndex();
    questionElement.innerHTML = questions[index];
    word = words[index];
    sectionElement.innerHTML = getLetterDivs();
    lettersElements = document.querySelectorAll(".letter-guess");
    word = word.toLowerCase();
    playAgainElement.style.display = 'none';
    overGameMessageElement.innerHTML = '';
    guessMessageElement.innerHTML = '';

    trials = 0;
}
function onWordTyped() {
    const wordTyped = inputElement.value.toLowerCase();
    trials++;
    if (wordTyped.length != word.length) {
        alert(`word should have ${word.length} letters`)
    } else {
        let guessedLetters = 0;
        lettersElements.forEach((element, i) => {
            if (wordTyped[i] == element.innerHTML.toLowerCase()) {
                element.style.background = "white";
                guessedLetters++;
            }
        });
        guessMessageElement.innerHTML =
         `you have guessed ${guessedLetters == wordTyped.length ? 'all':guessedLetters} letters`;

        if (wordTyped == word) {
            endGame();
        } 
    }
}
function endGame() {
    overGameMessageElement.innerHTML = `you have used ${trials} guess trials`;
    playAgainElement.style.display = "block";
    inputElement.disabled = true;
}
/************************************************ */
//additional functions
function getLetterDivs() {
    const wordArray = Array.from(word);
    const res = wordArray.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}
function getIndex() {
    let res; 
    do {
        res = Math.floor(Math.random() * questions.length); 
    }while(res == previousIndex);
    return res;
}
startGame();


