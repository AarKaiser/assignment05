// Start of Javascript Document //

// Mapping DOMS

let slotsEl = document.querySelector(".container");


// Declaring of variables

let currentHour = parseInt(moment().format("HH"));
let savedItems = JSON.parse(localStorage.getItem("schdeule"));
let currentDate = document.querySelector("#currentDate");

// Establishing timeSlot Object Array
let timeSlots = []
if(localStorage.getItem("schedule")){
  timeSlots = JSON.parse(localStorage.getItem("schedule"))
}else {
  timeSlots = [
  
    {
      slotTime: "00:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "01:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "02:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "03:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "04:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "05:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "06:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "07:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "08:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "09:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "10:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "11:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "12:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "13:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "14:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "15:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "16:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "17:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "18:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "19:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "20:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "21:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "22:00 HRS",
    slotContent: "",
  },

  {
    slotTime: "23:00 HRS",
    slotContent: "",
  },
];
}

// console.log(timeSlots[0].slotTime);

// Function for displaying today's date

function displayDate() {
  let today = moment();
  $(currentDate).text(today.format("dddd, MMMM Do, YYYY"));
}

// Function for displaying slots

function displaySlots() {
  for (let i = 0; i < timeSlots.length; i++) {
    let newSlot = document.createElement("div");
    newSlot.setAttribute("class", "row");
    let content = document.createElement("p");
    content.setAttribute("class", "col-2 hour");
    content.textContent = timeSlots[i].slotTime;
    let textBox = document.createElement("textarea");
    textBox.setAttribute("id", "slotContent");
    textBox.value = timeSlots[i].slotContent;
    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "col-2 saveBtn");
    saveButton.setAttribute("data-index", i);
    saveButton.innerHTML = `<i class="fas fa-save" data-index=${i}></i>`;
    saveButton.addEventListener("click", storage);
    // console.log(currentSlot);
    // console.log(i);
    // console.log(currentHour);
    if (i < currentHour) {
      textBox.setAttribute("class", "col-8 past");
      //   console.log("Past Time");
    } else if (i === currentHour) {
      textBox.setAttribute("class", "col-8 present");
      //   console.log("Present Time");
    } else {
      textBox.setAttribute("class", "col-8 future");
      //   console.log("Future Time");
    }
    newSlot.append(content);
    newSlot.append(textBox);
    newSlot.append(saveButton);
    slotsEl.append(newSlot);
  }

  // Save to Local Storage

  function storage (event) {
    console.log("Storage Function")
    console.log(event.target)
    let indexOfTime = event.target.dataset.index
    // console.log(event.target.previousElementSibling.value)
    // console.log(event.target.parentElement.previousElementSibling.value)
    let valueFromText = "";
    if(!event.target.previousElementSibling) {
      valueFromText = event.target.parentElement.previousElementSibling.value
    }else{
      valueFromText = event.target.previousElementSibling.value;
    }

    console.log(valueFromText)
    timeSlots[indexOfTime].slotContent = valueFromText

    localStorage.setItem("schedule", JSON.stringify(timeSlots));

  }
}

displaySlots();
displayDate();

// End of js document //
