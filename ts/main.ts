window.onload = function()
{
    (<HTMLButtonElement>document.getElementById("press")).onclick= btnAddTask;
}

function btnAddTask()
{
    let addTaskInput = (<HTMLInputElement>document.getElementById("inputs")).value;

    //create checkbox
    let doneCheckBox = document.createElement("input");
    doneCheckBox.type = "checkbox";
    doneCheckBox.classList.add("doneish");

    //task
    let taskDisplay = document.createElement("p");
    taskDisplay.classList.add("displayClassList");
    taskDisplay.innerText = addTaskInput;

    //display on page
    let taskList = document.getElementById("showtasks");
    //let breakDown = document.createElement("br");

    taskDisplay.appendChild(doneCheckBox);
    taskList.appendChild(taskDisplay);
    //taskList.appendChild(taskDisplay);
    //taskList.appendChild(breakDown);

    clearTextBox();

    //clear text box
    function clearTextBox()
    {
        (<HTMLInputElement>document.getElementById("inputs")).focus();
        (<HTMLInputElement>document.getElementById("inputs")).value = "";

    }
    // function addCombo()
    // {
    //     var textb = <HTMLInputElement>document.getElementById("inputs");
    //     var combo = <HTMLInputElement>document.getElementById("tasklist");
        
    //     var option = <HTMLInputElement>document.createElement("option");
    //     option.text = textb.value;
    //     option.value = textb.value;
    //     try
    //     {
    //         combo.add(option, null); //Standard 
    //     }
    //     catch(error) 
    //     {
    //         combo.add(option); // IE only
    //     }
    //     textb.value = "";
    // }
}