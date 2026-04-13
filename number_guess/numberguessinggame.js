const minN=1;
const maxN=100;
const answer= Math.floor(Math.random()*(maxN-minN+1))+minN;

let attempt=0;
let guess;
let run=true;
while(run){
    guess=window.prompt(`enter a number between ${minN} and ${maxN}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("invalid number");
    }
    else if(guess<minN || guess>maxN) {
        window.alert("invalid number ");
    }  
    else{
        attempt++
        if(guess<answer){
            window.alert("you are too low try again");
        }
        else if(guess>answer){
            window.alert("you are too high try again");
        }
        else{
            window.alert(`you are right you took ${attempt} attempts`);
            run=false;
        }
    }
}