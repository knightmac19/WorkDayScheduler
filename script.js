$(document).ready(function() {
    var secondsLeft = 1;

    //array of hours
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
    
    //iterating through the hoursArray and creating a 3-column row for each index
    var populateTable = function() {
        for (i = 0; i < hoursArray.length; i++) {
            var tableRow = $("<tr>");
            tableRow.attr("data-form", hoursArray[i]);
    
            var saveBtn = $("<button>").attr("class", "btn btn-primary");
            saveBtn.text("Save");
    
            var toDos = $("<input>");
            toDos.attr("data-form", hoursArray[i]);
            
            var hourColumn = $("<td>").text(hoursArray[i]);
            var toDoColumn = $("<td>").html(toDos);
            var saveColumn = $("<td>").html(saveBtn);
            saveColumn.attr("class", "save");
            
            tableRow.append(hourColumn, toDoColumn, saveColumn);
            $("tbody").append(tableRow);
        }
    }
    
    //saving UI to local storage
    function saveToLocalStorage(event) {
        event.preventDefault();
        var userInput = $(this).prev().children();
        var userInputValue = userInput.val();
        console.log(userInputValue);
        console.log("save button working");
        localStorage.setItem("userInputValue", userInputValue);
        
        var retrievedInput = localStorage.getItem('userInputValue');
        $(userInput).text(retrievedInput);
        console.log("retrieved from storage: " + retrievedInput);

    }
    
    //displaying current time on a 1-second interval
    function displayTime() {
        var timerInterval = setInterval(function() {
            var currentTime = moment().format("LTS");
            $("#current").text(currentTime);
            secondsLeft--;
        
            if (secondsLeft === 0) {
              clearInterval(timerInterval);
              displayTime();
            }
          }, 1000);        
    }
    
    //conditionally formatting the rows based on current time

    
    populateTable();
    displayTime();
    $(document).on("click", ".save", saveToLocalStorage);
});