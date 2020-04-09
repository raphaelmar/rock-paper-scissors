let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
 

function getComputerChoice() {
    const choices= ['r', 'p', 's' ]
    const randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function convertToWord(letter) {
     if(letter === 'r') 
     return "Pierre";
     if(letter === 'p')
     return "Feuille";
     return "Ciseaux"
}

 function win(userChoice, computerChoice) {
     userScore++;
     userScore_span.innerHTML= userScore
     computerScore_span.innerHTML= computerScore
     const smallUserWord= "joueur".fontsize(3).sub();
     const smallCompWord= "ordi".fontsize(3).sub();
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} bat ${convertToWord(computerChoice)}${smallCompWord} Gagné!`; 
     document.getElementById(userChoice).classList.add('green-glow')
     setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 800);
 }

 function lose(userChoice, computerChoice) {
     computerScore++;
     computerScore_span.innerHTML= computerScore
     userScore_span.innerHTML= userScore
     const smallUserWord= "joueur".fontsize(3).sub();
     const smallCompWord= "ordi".fontsize(3).sub();
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perd contre ${convertToWord(computerChoice)}${smallCompWord} Perdu!`; 
     document.getElementById(userChoice).classList.add('red-glow')
     setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 800);

 }

 function draw(userChoice, computerChoice) {
     userScore_span.innerHTML= userScore
     computerScore_span.innerHTML= computerScore
     const smallUserWord= "joueur".fontsize(3).sub();
     const smallCompWord= "ordi".fontsize(3).sub();
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} égale ${convertToWord(computerChoice)}${smallCompWord} Match nul!`; 
     document.getElementById(userChoice).classList.add('grey-glow')
     setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 800);

 }

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice)
        break;
        case "sr":
        case "rp":
        case "ps":
        lose(userChoice, computerChoice)
        break;
        case "rr":
        case "pp":
        case "ps":
        draw(userChoice, computerChoice)
        break;

    }
}

function main() {
    rock_div.addEventListener('click',function() {
        game('r');
    })

    paper_div.addEventListener('click',function() {
        game('p');
    })

    scissors_div.addEventListener('click',function() {
        game('s');
    })

}

main();