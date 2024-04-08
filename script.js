function addTask() {
    var inputField = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = inputField.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = taskText;

    taskList.appendChild(listItem);
    inputField.value = "" ;}