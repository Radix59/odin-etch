const boxes = [];
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++)
{
    boxes[i] = document.createElement("div");
    boxes[i].className = "gridbox";
    boxes[i].id = "box-" + (i + 1);
    gridContainer.appendChild(boxes[i]);
}

gridContainer.addEventListener("mouseover", (event) =>
{
    let target = event.target;
    if (target.className === "gridbox")
        target.style.backgroundColor = "purple";
});

gridContainer.addEventListener("mouseout", (event) =>
{
    let target = event.target;
    if (target.className === "gridbox")
        target.style.backgroundColor = "";
});

