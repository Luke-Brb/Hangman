let inputWord = [];
let hideLetters = [];
let attempts;
let correctLetters;
let wordGuess;

const addWord = (ev)=>{
    ev.preventDefault();
    attempts = 6;
    wordGuess = 0;
    correctLetters = 0;
    inputWord = document.getElementById('word').value;
    const popMessage = document.getElementById('newMessage');
    popMessage.textContent = 'The word has been saved! Enter letters to discover it!';
    if (hideLetters.length > inputWord.length) {
        hideLetters = [];
    }
    for (i = 0; i < inputWord.length; ++i) {
        hideLetters[i] = "*";
    }
    document.getElementById("statusWord").innerHTML = hideLetters.join(" ");
    const popAttempts = document.getElementById('statusAttempts');
    popAttempts.textContent = "Attempts left: " + attempts;
    document.forms[0].reset();
}

const checkLetters = (ev)=>{
    ev.preventDefault();
    let checkLetter = document.getElementById('letter').value;
    if (attempts > 0) {
        for (j = 0; j < inputWord.length; ++j, correctLetters < inputWord.length) {
            if (hideLetters[j] == "*" && inputWord[j] == checkLetter) {
                hideLetters[j] = checkLetter;
                ++correctLetters;
            }
        }
        --attempts;
        const popAttempts = document.getElementById('statusAttempts');
        popAttempts.textContent = "Attempts left: " + attempts;
    }
    if (attempts == 0 && wordGuess == 0) {
        document.getElementById('statusAttempts').innerHTML = "--- G A M E   O V E R ---";
    }
    if (correctLetters == inputWord.length) {
        document.getElementById('statusAttempts').innerHTML = "--- Congratulations, you guessed the word! ---";
        wordGuess = 1;
    }
    document.getElementById("statusWord").innerHTML = hideLetters.join(" ");
    document.forms[1].reset();
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addWord);
    document.getElementById('checkletter').addEventListener('click', checkLetters);
});