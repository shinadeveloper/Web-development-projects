function get_human_choice() {
    var choice = prompt("0=Rock , 1=Paper , 2=Scissors    Kindly give input");
    return choice;
    }
function get_computer_choice(){
    var c_choice;
    c_choice=Math.random();
    return c_choice;
}
function play(human_choice,comp_choice_name){
    if ((human_choice==0   & comp_choice_name==1)  ||  (human_choice==1   & comp_choice_name==2)  || (human_choice==2   & comp_choice_name==0))    {
        console.log("YOU LOST ");
    }
    else{
        console.log("YOU WON");
    }
}
var human_choice=get_human_choice();
var flag=false;
while (flag == false){//error handling
    if (human_choice !=0  & human_choice!=1  & human_choice!=2  ){
        human_choice=prompt("Incorrect respnse kindly give correct response        0=Rock , 1=Paper , 2=Scissors");
    }
    else{
        flag=true;
        break;
    } 
}
var comp_choice=get_computer_choice();
if (comp_choice<=0.3){
    var comp_choice_name=0;
}
else if (comp_choice>0.3 & comp_choice<=0.6){
    var comp_choice_name=1;
}
else{
    var comp_choice_name=2;
}
console.log(comp_choice)
play(human_choice,comp_choice_name);
