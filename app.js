//Define variables by selecting the DOM elements 
const table = document.getElementById('battle_canvas');

// Select color
let changeColor = (cell) => {
    let color = 'black';
    cell.style.backgroundColor = color;
}

function makeGrid() {
    //reset table
    table.innerHTML = "";   
    
    // Select size input
    let height = 7;
    let width = 7;

    //Place Computer Boats on board
    let numPlace = [10, 01, -10, -01];
    let numArray = [];
    for (let i = 0; i < height; i++){
            for (let j = 0; j < width; j++){
                numArray.push(i+10*j);
            }
    }

    // Carrier - 5 hits
    let compCarrier = numArray[Math.floor(Math.random() * numArray.length)];
    let PlusOrMinus = (Math.random() <0.5 ? (Math.random() <0.5 ? -1 : 1 ) : (Math.random() <0.5 ? -10 : 10 ));
    let compCarrier2 = compCarrier + PlusOrMinus;
    let compCarrier3 = compCarrier2 + PlusOrMinus;
    let compCarrier4 = compCarrier3 + PlusOrMinus;
    let compCarrier5 = compCarrier4 + PlusOrMinus;
    // console.log(compCarrier);
    // console.log(compCarrier2);
    // console.log(compCarrier3);
    // console.log(compCarrier4);
    // console.log(compCarrier5);
    
    // Battleship - 4 hits
    let compBattleship = numArray[Math.floor(Math.random() * numArray.length)];
    let PlusOrMinus2 = (Math.random() <0.5 ? (Math.random() <0.5 ? -1 : 1 ) : (Math.random() <0.5 ? -10 : 10 ));
    let compBattleship2 = compBattleship + PlusOrMinus2;
    let compBattleship3 = compBattleship2 + PlusOrMinus2;
    let compBattleship4 = compBattleship3 + PlusOrMinus2;
    // console.log(compBattleship);
    // console.log(compBattleship2);
    // console.log(compBattleship3);
    // console.log(compBattleship4);                      

    // Cruiser - 3 hits
    let compCruiser = numArray[Math.floor(Math.random() * numArray.length)];
    let PlusOrMinus3 = (Math.random() <0.5 ? (Math.random() <0.5 ? -1 : 1 ) : (Math.random() <0.5 ? -10 : 10 ));
    let compCruiserr2 = compCruiser + PlusOrMinus3;
    let compCruiserr3 = compCruiserr2 + PlusOrMinus3;

    // Submarine - 3 hits
    let compSubmarine = numArray[Math.floor(Math.random() * numArray.length)];
    let PlusOrMinus4 = (Math.random() <0.5 ? (Math.random() <0.5 ? -1 : 1 ) : (Math.random() <0.5 ? -10 : 10 ));
    let compSubmarine2 = compSubmarine + PlusOrMinus4;
    let compSubmarine3 = compSubmarine2 + PlusOrMinus4;

    // Destroyer - 2 hits
    let compDestroyer = numArray[Math.floor(Math.random() * numArray.length)];
    let PlusOrMinus5 = (Math.random() <0.5 ? (Math.random() <0.5 ? -1 : 1 ) : (Math.random() <0.5 ? -10 : 10 ));
    let compDestroyer2 = compDestroyer + PlusOrMinus5;

    //Making table based on size input
    for (let i = 0; i < height; i++) {
        const rows = document.createElement("tr");
        table.appendChild(rows);
        for (let j = 0; j < width; j++) {
            const cells = document.createElement("td");
            cells.id = ''+j+i;
            rows.appendChild(cells);
                       
            //Change color on clicked cells 
            const ChangeCellColors = () => {
                for (let N = 0; N < table.rows.length; N++) {
                    for (let M = 0; M < table.rows[N].cells.length; M++)
                    table.rows[N].cells[M].onclick = function() {
                        if (this.id == compCarrier || this.id == compCarrier2 || this.id == compCarrier3 || this.id == compCarrier4 || this.id == compCarrier5){
                            this.style.backgroundColor = 'green';
                            document.getElementsByClassName("insertHit")[0].innerHTML = "You got the Carrier!";
                        }
                        else if (this.id == compBattleship4 || this.id == compBattleship3 || this.id == compBattleship2 || this.id == compBattleship){   
                            this.style.backgroundColor = 'purple';
                            document.getElementsByClassName("insertHit")[0].innerHTML = "You got the Battleship!";
                        }
                        else if (this.id == compCruiser || this.id == compCruiserr2 || this.id == compCruiserr3){   
                            this.style.backgroundColor = 'yellow';
                            document.getElementsByClassName("insertHit")[0].innerHTML = "You got the Cruiser!";                            
                        }
                        else if (this.id == compSubmarine || this.id == compSubmarine2 || this.id == compSubmarine3){   
                            this.style.backgroundColor = 'blue';
                            document.getElementsByClassName("insertHit")[0].innerHTML = "You got the Submarine!";
                        }
                        else if (this.id == compDestroyer || this.id == compDestroyer2){   
                            this.style.backgroundColor = 'red';
                            document.getElementsByClassName("insertHit")[0].innerHTML = "You got the Destroyer!";
                        }
                        else {                         
                            changeColor(this);
                            document.getElementsByClassName("insertHit")[0].innerHTML = "You missed...";
                        }                    
                        //log id of clicked cell
                        console.log(this.id);
                        };
                }
            };
            ChangeCellColors();
            
        }        
    }
    
}

makeGrid();


//Place ships in table
//Change color of box when ship is hit
//alert name of ship that got hit
//alert when any ship is sunk
//alert when all ships are sunk
//alert miss
//allow player to place their ships
//computer will shot
//alert computer's choice
