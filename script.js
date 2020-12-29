let min = document.querySelector('.min').innerHTML = '1';
let max = document.querySelector('.max').innerHTML = '10';

let message = document.querySelector('.message');
let ans = Math.floor((Math.random() * 10) + 1);

let chance = 3;

let button = document.querySelector('.button');
button.innerHTML = 'Check the number';
button.addEventListener('click', game);

let guess;

function game(e) {

    guess = parseInt(document.querySelector('.guess').value)

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Wrong Input! Enter a number between ${min} and ${max}`, 'red');
    } else {
        if (guess == ans) {
            setMessage(`Correct Ans! You Win`, 'green');
            lock();
        } else {
            chance -= 1;
            if (chance == 0) {
                setMessage(`You Loose! Correct Answer was ${ans}`, 'red');
                lock();
            } else {
                let color;
                let text = 'chances are'
                if (chance == 2) {
                    color = 'orange'
                } else {
                    color = 'orangered'
                    text = 'chance is';
                }
                if (guess < ans) {
                    setMessage(`Correct answer is greater! ${chance} ${text} left`, color)
                }
                else {
                    setMessage(`Correct answer is smaller! ${chance} ${text} left`, color)
                }
            }
        }
    }
    e.preventDefault();
}

function setMessage(text, color) {
    message.innerHTML = text;
    message.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
}

function lock() {
    button.innerHTML = 'Reloading Game';
    button.style.backgroundColor = 'black';
    button.disabled = true;
    document.querySelector('.guess').disabled = true;
    setTimeout(reload, 5000);
}

function reload() {
    location.reload();
}
