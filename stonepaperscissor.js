let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice= ()=>{
// stone, paper, scissor
const options=["stone","paper","scissor"];   
const randIdx=Math.floor(Math.random() * 3);                        
return options[randIdx];
};

const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win!");
        msg.innerText =  `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats  Your ${userChoice}`; 
        msg.style.backgroundColor ="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
       
    if(userChoice === compChoice){
        //Draw game
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
        // scissor , paper
        userWin= compChoice === "paper" ? false :true ;
        }else if(userChoice ==="paper"){
            // stone , scissor
            userWin = compChoice ==="scissor"? false : true;
        } else {
            // stone , paper 
            userWin = compChoice === "stone" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>[
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
])

    

     





//  Math.random mai --- 0 to 2 ke beech mai number chahiye toh hum usko 3 se multiply karte hai
// eg: Math.random() * 3 --- range 0 to 2
// eg: Math.random() * 10 --- range 0 to 9
