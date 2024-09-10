function createDivs(num,parent){
    if ((num>100) || (num<1)) {
        alert("You have entered wrong input      kindly input between 1 and 100")
        return "";
    }
    var i=0,j=0;
    mainNode=document.getElementsByClassName(parent)
    for (i;i<num;i++){
        for(j;j<num;j++){
            const divh=document.createElement("div");
            divh.setAttribute("class","childContainer");
            mainNode.appendChild(divh)
        }
    }
    return childContainer; 
    
}
var container=document.getElementsByClassName("container")
var childContainer=createDivs(5,container);


childContainer.style.color="white";

