const words = ["input", "array", "reduce", "class", "script"];

const guess_block = document.querySelector('.guess_block');
const guess_word = document.querySelector('#guess_word');
const trails = document.querySelector('.trails');


function getRundomIndex (length) {
    return Math.trunc(Math.random() * length);

}

let word = words[(getRundomIndex(words.length))];
console.log(typeof indexWord);
let trail_num = indexWord.length + 1;

function startGame () {
    let guess_field = document.createElement('div');
    guess_field.className = "guess_field";
    guess_field.innerHTML = word.split('').reduce(function (accm, item) {
        accm += '<div class="letter"><div/> ';
        return accm;
    }, "");
    guess_block.append(guess_field);
    guess_word.onkeyup = handleTrail;

}
startGame();