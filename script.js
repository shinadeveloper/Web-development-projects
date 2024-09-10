function playRound(num){
    var computerChoice=getComputerChoice();
    if ((num==0 && computerChoice==2) || (num==1 && computerChoice==0) || (num==2 && computerChoice==1)){
        return 1
    }
    else if (num==computerChoice){
        return 0
    }
    else{
        return -1
    }
}
function getComputerChoice(){
    var num=Math.random()
    if (num<=0.3){
        return 0 // returns rock
    }
    else if(num>0.3 && num<=0.6){
        return 1 //paper
    }
    else{
        return 2 //scissor
    }
}
var ressult = 0;
var timesClicked=0;
var showresult = document.getElementById('result');
showresult.innerText = `Your Result = ${ressult}`;

const buttons=document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        ressult+=playRound(button.id);
        showresult.innerText = `Your Result = ${ressult}`;
        timesClicked+=1;
        if (timesClicked>=5){
            if (ressult>0){
                showresult.innerText+="..            You Won WINNER"
            }
            else{
                showresult.innerText+="..             You LOST LOSER"
            }
        }
    });
});

