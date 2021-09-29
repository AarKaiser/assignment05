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

let containerEl = $(".container");

let timeArr = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM"];
let currentHour = parseInt(moment().format("HH"));

function saveToLocal() {
  console.log("to be done later");
  console.log($(this));
}

for (i = 0; i < timeArr.length; i++) {
  let newRow = $("<div>").attr("class", "row");
  let newP = $("<p>").attr("class", "col-2 hour").text(timeArr[i]);
  let newText = $("<textarea>");

  if (i + 9 < currentHour) {
    newText.attr("class", "col-8 past");
  } else if (currentHour == i + 9) {
    newText.attr("class", "col-8 present");
  } else {
    newText.attr("class", "col-8 future");
  }

  let newBtn = $("<button>")
    .attr("class", "col-2 saveBtn")
    .text("Save")
    .on("click", saveToLocal);

  newRow.append(newP);
  newRow.append(newText);
  newRow.append(newBtn);

  containerEl.append(newRow);
}



// Submitting incomplete, as I have no idea how to make this work and need extra help from my tutor //