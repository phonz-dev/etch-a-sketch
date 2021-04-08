const body = document.querySelector("body");
const container = document.createElement("div");
const button = document.createElement("button");
const script = document.querySelector("script");

container.classList.toggle("container");
body.insertBefore(container, script);
button.classList.toggle("btn");
button.textContent = "RESET";
body.insertBefore(button, container);

let ans = +prompt("How many squares per side would you like to make?", "0");

while (ans > 80) {
  alert("Maximum number of squares per side: 80");
  ans = +prompt("How many squares per side would you like to make?", "0");
}

container.style.cssText = `grid-template-columns: repeat(${ans}, 1fr); grid-template-rows: repeat(${ans}, 1fr);`;

let gridNumber = ans * ans;

for (let box = 0; box < gridNumber; box++) {
  const miniBox = document.createElement("div");
  miniBox.classList.toggle("mini-box");
  container.appendChild(miniBox);

  miniBox.addEventListener("mouseenter", () => {
    miniBox.style.backgroundColor = "#675F98";
  });

  miniBox.addEventListener("mouseleave", () => {
    miniBox.style.backgroundColor = "#98AADA";
  });
}

button.addEventListener("click", () => {
  document.location.reload();
});
