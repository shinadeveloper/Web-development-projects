function createDivs(num,parent){
    var mainNode=document.getElementsByClassName(parent);
    for (var i=0;i<num;i++){
        for(var j=0;j<num;j++){
            var div=document.createElement("div");
            div.setAttribute("class","childContainer");
            div.style.color="white";
            div.style.borderColor="black";
            mainNode.appendChild(div);

        }
    }
}
var container=document.getElementsByClassName(".container");
createDivs(5,container);
var childContainer=document.getElementsByClassName("childContainer")
childContainer.style.color="white";

        