// Start of Javascript Document //

// Mapping DOMS

selectables = document.querySelector("#selectable")

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
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));
}

// Function for displaying slots

function displaySlots() {
for (let i = 0; (i >= 11) && (i <=6); i++) {
selectables.createElement[i]("li")
selectables.setAttribute[i]("class", "ui-widget-content")   
selectables.this[i].textContent = "x";

    }
}

// Loads the planner
function startPlanner(){
    // Displaying date in header
    displayDate();

    // Displays slots
    displaySlots();

}

startPlanner();


// Submitting incomplete, as I have no idea how to make this work and need extra help from my tutor //