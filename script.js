const boxes = [];
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++)
{
    boxes[i] = document.createElement("div");
    boxes[i].className = "gridbox";
    boxes[i].id = "box-" + (i + 1);
    gridContainer.appendChild(boxes[i]);
}
