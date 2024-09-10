// function createDivs(num,parent){
//     if ((num>100) || (num<1)) {
//         alert("You have entered wrong input      kindly input between 1 and 100")
//         return "";
//     }
//     var i=0,j=0;
//     mainNode=document.getElementsByClassName(parent)
//     for (i;i<num;i++){
//         for(j;j<num;j++){
//             const divh=document.createElement("div");
//             divh.setAttribute("class","childContainer");
//             mainNode.appendChild(divh)
//         }
//     }
//     return childContainer;
// }
// var container=document.getElementsByClassName("container")
// var childContainer=createDivs(5,container);


// childContainer.style.color="white";


function createDivs(num, parent) {
    if ((num > 100) || (num < 1)) {
        alert("You have entered wrong input kindly input between 1 and 100");
        return null;
    }
    var i = 0, j = 0;
    var mainNode = document.getElementsByClassName(parent);
    if (mainNode.length === 0) {
        console.error("Parent element not found");
        return null;
    }
    var fragment = document.createDocumentFragment();
    for (i; i < num; i++) {
        for (j = 0; j < num; j++) { // Reset j to 0 for each row
            const divh = document.createElement("div");
            divh.setAttribute("class", "childContainer");
            fragment.appendChild(divh);
        }
    }
    mainNode[0].appendChild(fragment);
    return mainNode[0].getElementsByClassName("childContainer");
}

var container = "container"; // Pass the class name as a string
var childContainers = createDivs(5, container);

if (childContainers) {
    for (var i = 0; i < childContainers.length; i++) {
        childContainers[i].style.color = "white";
    }
}