document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    generateChecklist();
  });

function generateChecklist() {
  const input = document.getElementById("places").value;
  const lines = input.split("\n").filter((line) => line.trim() !== "");
  const container = document.querySelector(".container");

  container.innerHTML = "";

  lines.forEach((task) => {
    const item = document.createElement("div");
    item.className = "checklist-item";
    item.innerHTML = `
      <input type="checkbox" />
      <label>${task}</label>
    `;
    container.appendChild(item);
  });
}

const textarea = document.getElementById("places");

textarea.addEventListener("input", () => {
  textarea.style.height = "25px";
  textarea.style.height = textarea.scrollHeight + "px";
});
