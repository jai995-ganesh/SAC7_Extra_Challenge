const priority = document.getElementById("priority");
const taskCard = document.getElementById("taskCard");
const selectedPriority = document.getElementById("selectedPriority");

priority.addEventListener("change", function () {
  const value = priority.value;

  selectedPriority.textContent = "Selected Priority: " + value;

  if (value === "URGENT") {
    taskCard.style.backgroundColor = "red";
    taskCard.style.color = "white";
  } else {
    taskCard.style.backgroundColor = "white";
    taskCard.style.color = "black";
  }
});
