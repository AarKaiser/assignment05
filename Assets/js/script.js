// Start of Javascript Document //

// Mapping DOMS

selectables = document.querySelector("#selectables");
currentDate = document.querySelector("#currentDate")

// Declaring of variables



// Establishing plannerDay Array

plannerDay = [
        {
            slot: "",
            hour: "",
            time: "",
            taskContent: ""}
]


// Function for displaying today's date

function displayDate() {
let today = moment();
$(currentDate).text(today.format("dddd, MMMM Do, YYYY"));
}

// Function for displaying slots

function displaySlots() {
for (let i = 0; (i >= 11) && (i <=6); i++) {
    let li = selectables.selectables.createElement("li");
    li.appendChild(document.createTextNode(i));
    ul.appendChild(li);
// selectables.createElement("li")
// selectables.setAttribute[i]("class", "ui-widget-content")   
// selectables.this[i].textContent = "x";

    }
}

// Starts (loads) the planner
function startPlanner(){
    // Displaying date in header
    displayDate();

    // Displays slots
    displaySlots();

}

startPlanner();


// Submitting incomplete, as I have no idea how to make this work and need extra help from my tutor //