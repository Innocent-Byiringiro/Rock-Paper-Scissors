//variable storage
const choices = document.querySelectorAll('.choice');
const scores = document.getElementById('score');
const results = document.getElementById('results');
const scoreboard = {
    Player: 0,
    Computer: 0
};


//player's input
function play(e){
    const userPlay = e.target.id;
    const computerPlay = getComputerPlay();
    const winner =getWinner(userPlay, computerPlay);

    showWinner(winner, computerPlay);
}

//computer's play
function getComputerPlay(){
    const random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random() * 3)];
}
//determine winner
function getWinner(userPlay, computerPlay){
    if (userPlay == "Rock"){
        if(computerPlay == "Rock"){
            return "Draw"
        }else if(computerPlay == "Paper"){
            return "computer"
        }else{
            return "player"
        }
    }
    else if(userPlay == "Paper"){
        if(computerPlay == "Rock"){
            return "player"
        }
        else if(computerPlay == "Paper"){
            return "Draw"
        }else{
            return "computer"
        }
    }else{
        if(computerPlay == "Rock"){
            return "computer"
        }
        else if(computerPlay == "Paper"){
            return "player"
        }else{
            return "Draw"
        }
    }
}
//show results
function showWinner(winner, computerPlay){
    if(winner == "player"){
        scoreboard.Player++;
        results.innerHTML = `
        <h1> You Win! </h1>
        <p>Computer chose ${computerPlay}
        `
    }
    else if(winner == "computer"){
        scoreboard.Computer++;
        results.innerHTML=`
        <h1>You Lose!</h1>
        <p>Computer chose ${computerPlay}
        `
    }else{
        results.innerHTML =`
        <h1>It's a Draw </h1>
        <p>Computer chose ${computerPlay}
        `
    }

    scores.innerHTML = `
        <p>Player:${scoreboard.Player} </p>
        <p>Computer:${scoreboard.Computer} </p>
    `
}

//event listener
choices.forEach(chocie => chocie.addEventListener('click', play))
