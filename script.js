let score= JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0
};
updateScore();

function computerPick() {
    let computer= Math.random();
    if(computer>=0 && computer<0.5) {
        return 'Heads';
    }
    else if(computer>=0.5 && computer<=1) {
        return 'Tails';
    }
}

function playerMove(toss) {
    let computerMove= computerPick();
    let result='';
    if(toss === 'Heads') {
        if(computerMove === 'Heads') {
            result='Win';
        }
        else if(computerMove === 'Tails') {
            result='Lose';
        }
    }
    else if(toss === 'Tails') {
        if(computerMove === 'Heads') {
            result='Lose';
        }
        else if(computerMove === 'Tails') {
            result='Win';
        }
    }

    document.querySelector('.win-lose')
        .innerHTML=`You ${result}`;

    if(result === 'Win') {
        score.win+=1;
    }
    else if(result === 'Lose') {
        score.lose+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();

    document.querySelector('.move')
        .innerHTML = `player: ${toss}- Guess: ${computerMove}`;
}
function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `win: ${score.win}, lose: ${score.lose}`;
}
function resetScore() {
    score.win = 0;
    score.lose = 0;
    localStorage.removeItem('score');
}