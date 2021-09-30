// Start of Javascript Document //

// Mapping DOMS

slotsEl = document.querySelector(".container");
currentDate = document.querySelector("#currentDate");

// Declaring of variables

let currentHour = parseInt(moment().format("HH"));
let savedItems = JSON.parse(localStorage.getItem("schdeule"));
let newText;
let currentSlot = 0;

// Establishing timeSlot Object Array

let timeSlots = [
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

// console.log(timeSlots[0].slotTime);

// Function for displaying today's date

function displayDate() {
  let today = moment();
  $(currentDate).text(today.format("dddd, MMMM Do, YYYY"));
}

// Function for Scheduler Web App

function scheduler() {
  displayDate();
  displaySlots();
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
    textBox.textContent = timeSlots[i].slotContent;
    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "col-2 saveBtn");
    saveButton.setAttribute("id", "BTN" + [i]);
    saveButton.innerHTML = `<i class="fas fa-save"></i>`;
    saveButton.addEventListener("click", saveLocal);
    currentSlot++;
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

  function saveLocal(event) {
    
    // console.log(event.target.previousElementSibling.value);
    // console.log(currentSlot)
    let pushText = event.target.previousElementSibling.value;
    console.log(pushText);

    timeSlots[currentSlot].slotContent = pushText;


    // console.log(
    //   "Slot " + currentSlot + " equals: " + timeSlots[currentSlot].slotContent
    // );

    localStorage.setItem("schedule", JSON.stringify(timeSlots));

    //with hour and value you will save to local storage using the hour as the key and the value as the value
    //localStorage.setItem('hour',value)
  }
}

function displaySaved() {
  
  for (let i = 0; i < 24; i++) {
    textBox[i].textContnet = savedItems[i].slotTime;
    textBox[i].textContent = savedItems[i];
  }
}

scheduler();

// Submitting incomplete, as I have no idea how to make this work and need extra help from my tutor //
