const container = document.querySelector(".container");
const resetButton = document.querySelector("button");

while (true) {
  let response = prompt("How many number of squares per side would you like?");
  let box = response ** 2;

  if (response <= 64) {
    for (let i = 0; i < box; i++) {
      let square = document.createElement("div");
      square.classList.toggle("square");
      container.appendChild(square);

      square.addEventListener("mouseenter", () => {
        square.style.cssText = "background-color: #5885AF";
      });
      square.addEventListener("mouseleave", () => {
        square.style.cssText = "background-color: #41729F";
      });
    }
    container.style.cssText = `grid-template-columns: repeat(${response}, 1fr)`;
    break;
  } else if (response > 64) {
    alert("Maximum number per side: 64");
    continue;
  } else if (typeof response !== "number") {
    alert("Invalid");
    continue;
  }
}

resetButton.addEventListener("click", () => location.reload());
