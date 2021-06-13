window.onload = function () {
    document.getElementById("press").onclick = btnAddTask;
};
function btnAddTask() {
    var addTaskInput = document.getElementById("inputs").value;
    var doneCheckBox = document.createElement("input");
    doneCheckBox.type = "checkbox";
    doneCheckBox.classList.add("doneish");
    var taskDisplay = document.createElement("p");
    taskDisplay.classList.add("displayClassList");
    taskDisplay.innerText = addTaskInput;
    var taskList = document.getElementById("showtasks");
    taskDisplay.appendChild(doneCheckBox);
    taskList.appendChild(taskDisplay);
    clearTextBox();
    function clearTextBox() {
        document.getElementById("inputs").focus();
        document.getElementById("inputs").value = "";
    }
}
