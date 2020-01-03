var hoursArray = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
];

//function that iterates through the hoursArray and creates a row with 3 columns for each index
var populateTable = function() {
    for (i = 0; i < hoursArray.length; i++) {
        var tableRow = $("<tr>");

        var saveBtn = $("<button>").attr("class", "btn btn-primary save");
        saveBtn.text("Save");

        var toDos = $("<input>").css("width", "100%");
        toDos.css("border", "3px dotted blue");
        toDos.attr("data-form", hoursArray[i]);
        
        var hourColumn = $("<td>").text(hoursArray[i]);
        var toDoColumn = $("<td>").html(toDos);
        var saveColumn = $("<td>").html(saveBtn);
        
        tableRow.append(hourColumn, toDoColumn, saveColumn);
        $("tbody").append(tableRow);
    }
}

//use jQuery .prev() to grab previous sibling of save button
//give all save buttons a common class
function saveToLocalStorage() {
    var userInput = $(".save").prev().val();
    
    //currently logs "undefined"
    console.log(userInput);
}

//set momentTime within a function that runs on a 1-second interval
var momentTime = moment().format("LTS");
var currentTime = $("#moment").text(momentTime);

populateTable();
$(document).on("click", ".save", saveToLocalStorage);






