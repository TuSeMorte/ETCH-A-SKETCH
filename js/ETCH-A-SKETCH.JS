const controlsDiv = document.querySelector("#controls");
const gridDiv = document.querySelector("#gridContainer");

//defaults
let gridSize = 16;

//Control Creation
const clearBTN = document.createElement('button');
clearBTN.textContent = "Clear Grid";
controlsDiv.appendChild(clearBTN);

const sizeBTN = document.createElement('button');
sizeBTN.textContent = "Change Grid Size";
controlsDiv.appendChild(sizeBTN);
    
//create grid
function createGrid(size){
    for(let i = 0; i < size*size; i++){
        let gridItem = document.createElement('div');
        gridItem.className = "gridItem";
        gridItem.style.width = (600/size - .5) + "px";
        gridItem.style.height = (600/size -.5) + "px";
        gridDiv.appendChild(gridItem);
    };
    
    const gridCell = document.querySelectorAll(".gridItem");
    //added Hover code
    gridCell.forEach(function(el){
        el.addEventListener("mouseover", function(){
            event.target.style.backgroundColor = "black";
        });
    });    
    
    
};

//Resize Grid Function
function promptSize(){
    let returnVal = prompt("What size would you like the grid to be? Enter a postive number not greater than 64", 16);
    if(returnVal >0 && !isNaN(returnVal) && returnVal <= 64){
        gridDiv.innerHTML = "";
        createGrid(returnVal);
    } else {
        promptSize();
    }    

}
// Clear Grid button
clearBTN.addEventListener("click", function(){
    gridDiv.innerHTML = "";
    createGrid(gridSize);
});

//Change grid size button
sizeBTN.addEventListener("click", function(){
    promptSize();
    
});



createGrid(gridSize);