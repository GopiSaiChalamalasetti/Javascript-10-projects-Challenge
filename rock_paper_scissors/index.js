const choices=['rock','paper','scissor'];
const playerdisplay=document.getElementById('playerdisplay');
const computerdisplay=document.getElementById('computerdisplay');
const resultdisplay=document.getElementById('resultdisplay');
function playgame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if (playerchoice===computerchoice){
        result= "ITS A TIE";
    }
    else{
        switch(playerchoice){
            case "rock":
              result=(computerchoice==="scissor") ? "YOU WIN": "YOU LOOSE";
              break;
            case "paper":
                result=(computerchoice==="rock")? "YOU WIN": "YOU LOOSE";
                break;
            case "scissor" :
                result=(computerchoice==="paper")? "YOU WIN": "YOU LOOSE";
                break;

        }
    }
    playerdisplay.textContent=`PLAYER: ${playerchoice}`;
    computerdisplay.textContent=`COMPUTER: ${computerchoice}`;
    resultdisplay.textContent=result;
    resultdisplay.classList.remove("greenText","redText");
    switch(result){
        case "YOU WIN":
            resultdisplay.classList.add("greenText");
            break;
        case "YOU LOOSE":
            resultdisplay.classList.add("redText");
            break;
    }
}
