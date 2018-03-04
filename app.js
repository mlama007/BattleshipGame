//execute this code when the form is submitted
const executeForm = () => {
    return false;
};
  
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
    console.log(height,width);

    //Making table based on size input
    for (let i = 0; i < height; i++) {
        const rows = document.createElement("tr");
        table.appendChild(rows);
        for (let j = 0; j < width; j++) {
            const cells = document.createElement("td");
            cells.id = 's'+j+i;
            rows.appendChild(cells);                
        }
    }

    //Change color on clicked cells 
    const ChangeCellColors = () => {
        for (let N = 0; N < table.rows.length; N++) {
        for (let M = 0; M < table.rows[N].cells.length; M++)
        table.rows[N].cells[M].onclick = function() {
            changeColor(this);
            };
        }
    };

    ChangeCellColors();
}

makeGrid();

// Boats in Battleship Game
    // Carrier     - 5 hits
    // Battleship  - 4 hits
    // Cruiser     - 3 hits
    // Submarine   - 3 hits
    // Destroyer   - 2 hits

//Place ships in table
//Change color of box when ship is hit
//alert name of ship that got hit
//alert when any ship is sunk
//alert when all ships are sunk
//alert miss
//allow player to place their ships
//computer will shot
//alert computer's choice
