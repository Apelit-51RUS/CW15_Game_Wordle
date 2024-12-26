const words = ["input", "array", "reduce", "class", "script"];

function getRandomIndex (length) {
    return Math.trunc(Math.random() * length);
}

const guess_block = document.querySelector(".guess_block");
const trails = document.querySelector(".trails");


startGame();
function finishGame () {
    trails.innerHTML = '<h2> You win! Congratulations!!!</h2>';
    let again_btn = document.createElement('button');
    again_btn.textContent = "Start new game";
    again_btn.className = "again";
    again_btn.onclick = function () {
        guess_block.innerHTML = "";
        startGame();
    };
    trails.append(again_btn);
}

function startGame () {
    let word = words[getRandomIndex(words.length)];
    console.log(word);
    let trail_num = word.length + 1;
    trails.innerHTML = "Trails left: " + trail_num;
    guess_block.innerHTML = '<input type="text" class="guess_word" placeholder="Enter your variant and press Enter">';
    const guess_word = document.querySelector(".guess_word");

    let guess_field = document.createElement('div');
    guess_field.className = 'guess_field';
    guess_field.innerHTML = word.split('').reduce(function (acc, item) {
        acc += '<div class="letter"></div> ';
        return acc;
    }, "");
    guess_block.append(guess_field);

    guess_word.onkeyup = (e) => {
        handleTrail(e);
    };


    function handleTrail (e) {
        function getLetterColor (letter, i) {
            let char = letter.textContent;
            if (word.includes(char))
                return word.charAt(i) === char ? "green" : "yellow";
            return "red";
        }


        e.preventDefault();
        if (e.key !== "Enter")
            return;
        if (e.target.value.length !== word.length) {
            alert("Wrong word length! Try again");
            e.target.value = "";
            return;
        }


        trail_num--;
        trails.textContent = "Trails left: " + trail_num;
        let letters = document.querySelectorAll(".letter");



        for (let i = 0; i < letters.length; i++) {
            letters[i].textContent = e.target.value.charAt(i);
            letters[i].style.color = getLetterColor(letters[i], i);
        }

        if (e.target.value === word) {
            finishGame();
        }
        e.target.value = "";
    }

}



