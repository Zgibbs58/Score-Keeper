const p1 = {
    score:0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score:0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}



const winScoreSelect = document.querySelector('#scoreSelect')
let winningScore = 3;
let isGameOver = false;
const resetButton = document.querySelector('#reset')

function updateScores(player, opponent){
    if (!isGameOver){
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score >= winningScore && player.score > opponent.score + 1) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            
        }  
    }
    
}

p1.button.addEventListener('click', function () {
   updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

winScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();

})



resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]){
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
    }
}






/*const onepScore = document.querySelector('#1pScore')
const twopScore = document.querySelector('#2pScore')
const upPlayer1 = document.querySelector('#scorep1')
const upPlayer2 = document.querySelector('#scorep2')
console.log(onepScore)
const element = document.getElementById("onepScore");

upPlayer1.addEventListener('click', function(e) {
    onepScore.innerText = onepScore.value + 1
})*/
