
const inputBox = document.getElementById("input-box");
const listConta = document.getElementById("list-container");
const btn = document.getElementById("btn");

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("You must write something!");
        return;
    }

    const li = document.createElement("li");

    // Add task text safely
    li.appendChild(document.createTextNode(taskText));

    // Create delete button
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    span.setAttribute("aria-label", "Delete task");

    li.appendChild(span);
    listConta.appendChild(li);

    inputBox.value = "";
    saveData();
}

// Add task when Enter is pressed
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Complete or delete a task
listConta.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
    }

    saveData();
});

function saveData() {
    localStorage.setItem("todoTasks", listConta.innerHTML);
}

function displayData() {
    const savedTasks = localStorage.getItem("todoTasks");

    if (savedTasks) {
        listConta.innerHTML = savedTasks;
    }
}

displayData();
