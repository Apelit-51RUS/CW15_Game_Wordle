const words = ["input", "array", "reduce", "class", "script"];

const guess_block = document.querySelector('.guess_block');
const guess_word = document.querySelector('#guess_word');
const trails = document.querySelector('.trails');

function getRundomIndex (length) {
    return Math.trunc(Math.random() * length);
}

let word = words[(getRundomIndex(words.length))];

let trail_num = word.length + 1;

function startGame () {
    let guess_field = document.createElement('div');
    guess_field.className = "guess_field";
    guess_field.innerHTML = word.split('').reduce(function (accm, item) {
        accm += '<div class="letter"><div/> ';
        return accm;
    }, "");
    guess_block.append(guess_field);
    guess_word.onkeyup = handleTrail;


    /** @param{Event}e */
    function handleTrail (e) {
        e.preventDefault();
        if (e.target.value.length !== word.length) {
            alert("Wrong length! try again!");
            e.target.value = "";
            return;
        }
        trail_num--;
        trails.textContent = 'Trails left: ' + trail_num;
        let letters = document.querySelectorAll('.letter');
        for (let i = 0; i < letters.length; i++) {
            letters[i].textContent=e.target.value.charAt(i);
            
        }



    }

}
startGame();