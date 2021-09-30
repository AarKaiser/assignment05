/// TUTOR

// function saveToLocal() {
//   console.log("to be done later");
//   console.log($(this));
// }

// for (i = 0; i < timeSlot.length; i++) {
//   let newRow = $("<div>").attr("class", "row");
//   let newP = $("<p>").attr("class", "col-2 hour").text(timeSlot[i]);
//   let textBox = $("<textarea>");

//   if (i + 9 < currentHour) {
//     textBox.attr("class", "col-8 past");
//   } else if (currentHour == i + 9) {
//     textBox.attr("class", "col-8 present");
//   } else {
//     textBox.attr("class", "col-8 future");
//   }

//   let newBtn = $("<button>")
//     .attr("class", "col-2 saveBtn")
//     .text("Save")
//     .on("click", saveToLocal);

//   newRow.append(newP);
//   newRow.append(textBox);
//   newRow.append(newBtn);

//   containerEl.append(newRow);
// }