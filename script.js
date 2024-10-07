const boxes = [];
const gridContainer = document.querySelector(".grid-container");
let gridSize = 16;

function generateCanvas(gridSize)
{
    const numOfPixels = gridSize * gridSize;
    const pixelWidth = 100 / (gridSize);
    for (let i = 0; i < numOfPixels; i++)
    {
        boxes[i] = document.createElement("div");
        boxes[i].className = "pixel";
        boxes[i].id = "box-" + (i + 1);
        boxes[i].style.width = pixelWidth + "%"
        gridContainer.appendChild(boxes[i]);
    }
}

function clearCanvas()
{
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(element =>
    {
        gridContainer.removeChild(element);
    });
}

function userResetCanvas()
{
    const userGridSize = prompt("Enter the number of pixels per side");
    if (isNaN(userGridSize) || !Number.isInteger(+userGridSize))
    {
        alert("Invalid! Not an integer!");
        return;
    }
    if (+userGridSize > 100)
    {
        alert("Too big! Please input a number < 100");
        return;
    }
    clearCanvas();
    generateCanvas(+userGridSize);
    return;
}

gridContainer.addEventListener("mouseover", (event) =>
{
    let target = event.target;
    if (target.className === "pixel")
    {
        if (target.style.backgroundColor === "")
            target.style.backgroundColor = "purple";
        //else if (target.style.backgroundColor === "purple")
        //    target.style.backgroundColor = "";
    }
});

generateCanvas(gridSize);

