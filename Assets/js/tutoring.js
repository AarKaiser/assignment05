const containerEl = $(".container");

const timeArr = ["9AM", "10AM", "11AM", "12PM"];
const currentHour = parseInt(moment().format("HH"))

function saveToLocal() {
    console.log("to be done later")
    console.log($(this))
}

for(i=0;i<timeArr.length;i++) {
    const newRow = $("<div>").attr("class", "row")
    const newP = $("<p>").attr("class", "col-2 hour").text(timeArr[i])
    const newText = $("<textarea>")
    
    if(i+9 < currentHour) {
        newText.attr("class", "col-8 past")
    } else if(currentHour == i+9){
        newText.attr("class", "col-8 present")
    } else{
        newText.attr("class", "col-8 future")
    }
    
    const newBtn = $("<button>").attr("class", "col-2 saveBtn").text("Save").on("click", saveToLocal)

    newRow.append(newP)
    newRow.append(newText)
    newRow.append(newBtn)

    containerEl.append(newRow)
}
