//prevent 2 times winnig when you win from 2 side

var btnId = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];
var human;
var bot;
var randomNum;
var man = 0;
var pc = 0;
var btn1 = document.getElementById('b1');
var btn2 = document.getElementById('b2');
var btn3 = document.getElementById('b3');
var btn4 = document.getElementById('b4');
var btn5 = document.getElementById('b5');
var btn6 = document.getElementById('b6');
var btn7 = document.getElementById('b7');
var btn8 = document.getElementById('b8');
var btn9 = document.getElementById('b9');
var winner = false;
var tie = false;
var win = false;
var lose = false;
var msg = document.getElementById('finalmsg');
var yourScore = document.getElementById('manscore');
var botScore = document.getElementById('pcscore');
var btnRst = document.getElementById('btnrst');

function btnChoice(item) {
    if (btnId.length > 1) {
        btnId.splice(btnId.indexOf(item), 1);
        human = document.getElementById(item);
        human.classList.remove(human.classList[4]);
        document.getElementById(item).style.backgroundColor = 'blue';
        human.disabled = true;
        checkResult();
        if (winner === false) {
            botChoice();
        }
    }//for winning in last round
    else {
        human = document.getElementById(item);
        human.classList.remove(human.classList[4]);
        document.getElementById(item).style.backgroundColor = 'blue';
        human.disabled = true;
        checkResult();
        if (winner === false && btnId.length === 1) {
            tie = true;
            finalResult();
        }
    }
}

function botChoice() {
    randomNum = Math.floor((Math.random()) * btnId.length);
    bot = document.getElementById(btnId[randomNum]);
    bot.classList.remove(bot.classList[4]);
    document.getElementById(btnId[randomNum]).style.backgroundColor = 'green';
    document.getElementById(btnId[randomNum]).disabled = true;
    btnId.splice(btnId.indexOf(btnId[randomNum]), 1);
    checkResult();
}

function checkResult() {
// winning condition
    if (btn1.style.backgroundColor === 'blue' &&
        btn2.style.backgroundColor === 'blue' &&
        btn3.style.backgroundColor === 'blue' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        win = true;
        man += 1;
        winner = true;
        finalResult();

    } if (btn4.style.backgroundColor === 'blue' &&
        btn5.style.backgroundColor === 'blue' &&
        btn6.style.backgroundColor === 'blue' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        win = true;
        man += 1;
        winner = true;
        finalResult();
    } if (btn7.style.backgroundColor === 'blue' &&
        btn8.style.backgroundColor === 'blue' &&
        btn9.style.backgroundColor === 'blue' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        win = true;
        man += 1;
        winner = true;
        finalResult();
    }
    if (btn1.style.backgroundColor === 'blue' &&
        btn4.style.backgroundColor === 'blue' &&
        btn7.style.backgroundColor === 'blue' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        win = true;
        man += 1;
        winner = true;
        finalResult();
    }
    if (btn2.style.backgroundColor === 'blue' &&
        btn5.style.backgroundColor === 'blue' &&
        btn8.style.backgroundColor === 'blue' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        win = true;
        man += 1;
        winner = true;
        finalResult();
    }
    if (btn3.style.backgroundColor === 'blue' &&
        btn6.style.backgroundColor === 'blue' &&
        btn9.style.backgroundColor === 'blue' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        win = true;
        man += 1;
        winner = true;
        finalResult();
    }
    if (btn1.style.backgroundColor === 'blue' &&
        btn5.style.backgroundColor === 'blue' &&
        btn9.style.backgroundColor === 'blue' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        win = true;
        man += 1;
        winner = true;
        finalResult();
    }
    if (btn3.style.backgroundColor === 'blue' &&
        btn5.style.backgroundColor === 'blue' &&
        btn7.style.backgroundColor === 'blue' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        win = true;
        man += 1;
        winner = true;
        finalResult();
    }
    // losing condition
    if (btn1.style.backgroundColor === 'green' &&
        btn2.style.backgroundColor === 'green' &&
        btn3.style.backgroundColor === 'green' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        lose = true;
        pc += 1;
        winner = true;
        finalResult();
    } if (btn4.style.backgroundColor === 'green' &&
        btn5.style.backgroundColor === 'green' &&
        btn6.style.backgroundColor === 'green' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        lose = true;
        pc += 1;
        winner = true;
        finalResult();
    } if (btn7.style.backgroundColor === 'green' &&
        btn8.style.backgroundColor === 'green' &&
        btn9.style.backgroundColor === 'green' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        lose = true;
        pc += 1;
        winner = true;
        finalResult();
    }
    if (btn1.style.backgroundColor === 'green' &&
        btn4.style.backgroundColor === 'green' &&
        btn7.style.backgroundColor === 'green' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        lose = true;
        pc += 1;
        winner = true;
        finalResult();
    }
    if (btn2.style.backgroundColor === 'green' &&
        btn5.style.backgroundColor === 'green' &&
        btn8.style.backgroundColor === 'green' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        lose = true;
        pc += 1;
        winner = true;
        finalResult();
    }
    if (btn3.style.backgroundColor === 'green' &&
        btn6.style.backgroundColor === 'green' &&
        btn9.style.backgroundColor === 'green' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        lose = true;
        pc += 1;
        winner = true;
        finalResult();
    }
    if (btn1.style.backgroundColor === 'green' &&
        btn5.style.backgroundColor === 'green' &&
        btn9.style.backgroundColor === 'green' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        lose = true;
        pc += 1;
        winner = true;
        finalResult();
    }
    if (btn3.style.backgroundColor === 'green' &&
        btn5.style.backgroundColor === 'green' &&
        btn7.style.backgroundColor === 'green' && winner === false) {
        for (let i = 0; i < btnId.length; i++) {
            document.getElementById(btnId[i]).disabled = true;
        }
        lose = true;
        pc += 1;
        winner = true;
        finalResult();
    }
}
// tie condition
function finalResult() {
    btnRst.classList.remove(btnRst.classList[4]);
    if (tie === true) {
        msg.innerText = 'You Tied!';
        msg.classList.remove(msg.classList[3]);
        msg.classList.add('text-warning');
    }
    if (win === true) {
        msg.innerText = 'You Won!';
        msg.classList.remove(msg.classList[3]);
        msg.classList.add('text-success');
    }
    if (lose === true) {
        msg.innerText = 'You Lost!';
        msg.classList.remove(msg.classList[3]);
        msg.classList.add('text-danger');
    }
    yourScore.innerText = man;
    botScore.innerText = pc;
}
// reset
btnRst.addEventListener('click', () => {
    btnRst.classList.add('visually-hidden');
    msg.innerText = 'GoodLuck!';
    msg.classList.remove(msg.classList[3]);
    msg.classList.add('text-info');
    btn1.classList.add('bg-light');
    btn2.classList.add('bg-light');
    btn3.classList.add('bg-light');
    btn4.classList.add('bg-light');
    btn5.classList.add('bg-light');
    btn6.classList.add('bg-light');
    btn7.classList.add('bg-light');
    btn8.classList.add('bg-light');
    btn9.classList.add('bg-light');
    btnId = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];
    for (let i = 0; i < btnId.length; i++) {
        document.getElementById(btnId[i]).disabled = false;
        document.getElementById(btnId[i]).style.backgroundColor = 'transparent';
    }
    winner = false;
    tie = false;
    win = false;
    lose = false;
});

