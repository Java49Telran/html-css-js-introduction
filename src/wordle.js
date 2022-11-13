const word = "table"
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess")
function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index  > -1) {
                res = index == i ? 'green' : 'yellow'
            }
            return res;
        })
        colors.forEach((c, i) =>
         letterElements[i].style.color=c)
    }
   
}