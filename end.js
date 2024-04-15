const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

localStorage.setItem('highScores', JSON.stringify([]));
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {
    e.preventDefault()

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => {
        return b.score - a.score;
    })

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');

    highScores.splice(5);
}