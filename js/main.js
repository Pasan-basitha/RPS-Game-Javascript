const choices=document.querySelectorAll('.choice');
const score =document.getElementById('score');
const result =document.getElementById('result');
const restart =document.getElementById('restart');
const model =document.querySelector('.model');

const scoreboard={
    player:0,
    computer:0
}

function play(e){
    restart.style.display='inline-block';
    const playerChoice=e.target.id;
    const computerChoice=getComputerChoice();

    //console.log(playerChoice,computerChoice);

    const winner=getWinner(playerChoice,computerChoice);

   // console.log(playerChoice,computerChoice,winner);

   showWinner(winner,computerChoice);

}

//get computers choice
function getComputerChoice(){
    const rand =Math.random();
    if (rand<0.34) {
        return'rock';
    }else if(rand<=0.67){
        return'paper';
          
    }else{
        return'scissors';
    }
}

//get game winner
function getWinner(p,c){
    if(p===c){
        return'draw';
    }else if(p==='rock'){
        if(c==='paper'){
            return'computer';
        }else{
            return'player';
        }

    }else if(p==='paper'){
        if (c=='scissors') {
            return'computer';
        }else{
            return'player';
        }
    }else if(p==='scissors'){
        if (c==='rock') {
            return'computer';
        }else{
            return'player';
        }
    }
}

function showWinner(winner,computerChoice){
    if (winner==='player') {
        //incremebt player score
        scoreboard.player++;
        //show model result
        result.innerHTML=`
        <h1 class="text-win">You win!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer choose <strong>${computerChoice}</strong></p>
        `;
        
    }else if(winner==='computer'){
          //incremebt computer score
          scoreboard.computer++;
          //show model result
          result.innerHTML=`
          <h1 class="text-lose">You lose!</h1>
          <i class="fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer choose <strong>${computerChoice}</strong></p>
          `;
          

    }else{
        result.innerHTML=`
          <h1>It's a DRAW!</h1>
          <i class="fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer choose <strong>${computerChoice}</strong></p>
          `;

    }

    //show score
    score.innerHTML=`
    <p>Player:${scoreboard.player}</p>
    <p>Computer:${scoreboard.computer}</p>
    `;

    model.style.display='block';
}
//clear Model
function clearModel(e){
    if(e.target==model){
        model.style.display='none';
    }
}

//restart game
function restartGame(){
    scoreboard.player=0;
    scoreboard.computer=0;
    score.innerHTML=`
    <p>Player:0</p>
    <p>Computer:0</p> 
    `;
}

//event listeners
choices.forEach(choice=>choice.addEventListener('click',play));
window.addEventListener('click',clearModel);
restart.addEventListener('click',restartGame);