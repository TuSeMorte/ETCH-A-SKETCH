const controlsDiv = document.querySelector("#controls");
const gridDiv = document.querySelector("#gridContainer");

//defaults
let gridSize = 16;
let opacityEnabled = false;
let randomColor = false;

//Control Creation
const clearBTN = document.createElement('button');
clearBTN.textContent = "Clear Grid";
controlsDiv.appendChild(clearBTN);

const sizeBTN = document.createElement('button');
sizeBTN.textContent = "Change Grid Size";
controlsDiv.appendChild(sizeBTN);

const blackBTN = document.createElement('button');
blackBTN.textContent = "Black Pen";
controlsDiv.appendChild(blackBTN);

const randomColorBTN = document.createElement('button');
randomColorBTN.textContent = "Random Color Pen";
controlsDiv.appendChild(randomColorBTN);

const tenPercentOpacityBTN = document.createElement('button');
tenPercentOpacityBTN.textContent = "10% Opacity";
controlsDiv.appendChild(tenPercentOpacityBTN);
    
//create grid
function createGrid(size){
    for(let i = 0; i < size*size; i++){
        let gridItem = document.createElement('div');
        gridItem.className = "gridItem";
        gridItem.style.width = (600/size - .5) + "px";
        gridItem.style.height = (600/size -.5) + "px";
        //if opacityEnabled setup default opacity to 0.0
        if(opacityEnabled){
            gridItem.style.opacity=0;
        }
        
        gridDiv.appendChild(gridItem);
    };
    
    const gridCell = document.querySelectorAll(".gridItem");
    //added Hover code
    gridCell.forEach(function(el){
        el.addEventListener("mouseover", function(){
            if(opacityEnabled === true){
                event.target.style.backgroundColor = "black";
               if(event.target.style.opacity < 1) {event.target.style.opacity  = parseFloat(event.target.style.opacity) + .1};
            } else if (randomColor === true){
                event.target.style.backgroundColor = getRandomColor();
            } else {
                event.target.style.backgroundColor = "black";
            }
        });
    });    
    
    
};

//Resize Grid Function
function promptSize(){
    let returnVal = prompt("What size would you like the grid to be? Enter a postive number not greater than 64. This will not reset opacity or color!", 16);
    if(returnVal >0 && !isNaN(returnVal) && returnVal <= 64){
        gridDiv.innerHTML = "";
        gridSize = returnVal;
        createGrid(gridSize);
    } else {
        promptSize();
    }    
 
}
//random hex color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// Clear Grid button
clearBTN.addEventListener("click", function(){
    opacityEnabled = false;
    randomColor= false;
    gridDiv.innerHTML = "";
    createGrid(gridSize);
});

//Change grid size button
sizeBTN.addEventListener("click", function(){
    promptSize();
    
});
// Black Pen
blackBTN.addEventListener("click", function(){
    let confirmBlackPen = confirm("This will reset the ETCH-A-SKETCH. Would you like to continue");
    if (confirmBlackPen){
        opacityEnabled = false;
        randomColor= false;
        gridDiv.innerHTML = "";
        createGrid(gridSize);
        
    };
});
// Random Color Pen
randomColorBTN.addEventListener("click", function(){
    let confirmRandomColorPen = confirm("This will reset the ETCH-A-SKETCH. Would you like to continue");
    if (confirmRandomColorPen){
        opacityEnabled = false;
        randomColor= true;
        gridDiv.innerHTML = "";
        createGrid(gridSize);
        
    };
});

//Change 10% opacity button button
tenPercentOpacityBTN.addEventListener("click", function(){
    let confirmOpac = confirm("This will reset the ETCH-A-SKETCH. Would you like to continue");
    if (confirmOpac){
        opacityEnabled = true;
        gridDiv.innerHTML = "";
        createGrid(gridSize);
        
    };
});


createGrid(gridSize);