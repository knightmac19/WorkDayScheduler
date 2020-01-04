$(document).ready(function() {

    var currentHour = moment().hour();
    console.log(currentHour + 3);
    var secondsLeft = 1;
    
    //array of hours for left column
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
    function populateTable() {
        for (i = 0; i < hoursArray.length; i++) {

            var tableRow = $("<tr>");
            tableRow.attr("id", "row" + hoursArray[i]);
    
            var saveBtn = $("<button>").attr("class", "btn btn-primary");
            saveBtn.text("Save Row");
            saveBtn.attr("id", "save" + hoursArray[i]);

            var clearBtn = $("<button>").attr("class", "btn btn-success");
            clearBtn.text("Clear Row");
            clearBtn.attr("id", "clear" + hoursArray[i]);

            var toDos = $("<input>");
            toDos.attr("id", "input" + hoursArray[i]);
            
            

            var hourColumn = $("<td>").text(hoursArray[i]);
            hourColumn.attr("class", "btn-cmd");
            var toDoColumn = $("<td>").html(toDos);
            var saveColumn = $("<td>").html(saveBtn);
            var clearColumn = $("<td>").html(clearBtn);
            saveColumn.attr("class", "btn-cmd");
            clearColumn.attr("class", "btn-cmd");

            tableRow.append(hourColumn, toDoColumn, saveColumn, clearColumn);
            $("tbody").append(tableRow);
            
            //var currentHour = moment().hour();
            //var hour9 = $("#row")

        }
    }

    //displaying current time on a 1-second interval
    function displayTime() {
        var timerInterval = setInterval(function() {
            var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
            $("#current").text(currentTime);
            secondsLeft--;
        
            if (secondsLeft === 0) {
              clearInterval(timerInterval);
              displayTime();
            }
        }, 1000);        
    }
    
    function clearRows() {
        $("#clear9AM").on("click", function() {
            localStorage.removeItem("userInput9AM");
            location.reload();
        });
        $("#clear10AM").on("click", function() {
            localStorage.removeItem("userInput10AM");
            location.reload();
        });
        $("#clear11AM").on("click", function() {
            localStorage.removeItem("userInput11AM");
            location.reload();
        });
        $("#clear12PM").on("click", function() {
            localStorage.removeItem("userInput12PM");
            location.reload();
        });
        $("#clear1PM").on("click", function() {
            localStorage.removeItem("userInput1PM");
            location.reload();
        });
        $("#clear2PM").on("click", function() {
            localStorage.removeItem("userInput2PM");
            location.reload();
        });
        $("#clear3PM").on("click", function() {
            localStorage.removeItem("userInput3PM");
            location.reload();
        });
        $("#clear4PM").on("click", function() {
            localStorage.removeItem("userInput4PM");
            location.reload();
        });
        $("#clear5PM").on("click", function() {
            localStorage.removeItem("userInput5PM");
            location.reload();
        });
    }
    function setData() {
        //set 9AM ------------------------------------------------
    $("#save9AM").on("click", function() {
        var userInput9AM = $("#input9AM").val();
        localStorage.setItem("userInput9AM", userInput9AM);
    });
    //set 10AM ------------------------------------------------
    $("#save10AM").on("click", function() {
        var userInput10AM = $("#input10AM").val();
        localStorage.setItem("userInput10AM", userInput10AM);
    });
    //set 11AM ------------------------------------------------
    $("#save11AM").on("click", function() {
        var userInput11AM = $("#input11AM").val();
        localStorage.setItem("userInput11AM", userInput11AM);
    });
    //set 12AM ------------------------------------------------
    $("#save12AM").on("click", function() {
        var userInput12AM = $("#input12AM").val();
        localStorage.setItem("userInput12AM", userInput12AM);
    });
    //set 1AM ------------------------------------------------
    $("#save1PM").on("click", function() {
        var userInput1PM = $("#input1PM").val();
        localStorage.setItem("userInput1PM", userInput1PM);
    });
    //set 2AM ------------------------------------------------
    $("#save2PM").on("click", function() {
        var userInput2PM = $("#input2PM").val();
        localStorage.setItem("userInput2PM", userInput2PM);
    });
    //set 3AM ------------------------------------------------
    $("#save3PM").on("click", function() {
        var userInput3PM = $("#input3PM").val();
        localStorage.setItem("userInput3PM", userInput3PM);
    });
    //set 4AM ------------------------------------------------
    $("#save4PM").on("click", function() {
        var userInput4PM = $("#input4PM").val();
        localStorage.setItem("userInput4PM", userInput4PM);
    });
    //set 5AM ------------------------------------------------
    $("#save5PM").on("click", function() {
        var userInput5PM = $("#input5PM").val();
        localStorage.setItem("userInput5PM", userInput5PM);
    });
    }
    
    function getData() {
        $("#input9AM").val(localStorage.getItem("userInput9AM"));
    $("#input10AM").val(localStorage.getItem("userInput10AM"));
    $("#input11AM").val(localStorage.getItem("userInput11AM"));
    $("#input12AM").val(localStorage.getItem("userInput12AM"));
    $("#input1PM").val(localStorage.getItem("userInput1PM"));
    $("#input2PM").val(localStorage.getItem("userInput2PM"));
    $("#input3PM").val(localStorage.getItem("userInput3PM"));
    $("#input4PM").val(localStorage.getItem("userInput4PM"));
    $("#input5PM").val(localStorage.getItem("userInput5PM"));
    }
    
    function formatRows() {
        var currentHour = moment().hour();
        if (currentHour < 9) {
            $("#input9AM").css("background-color", "green");
            $("#input10AM").css("background-color", "green");
            $("#input11AM").css("background-color", "green");
            $("#input12PM").css("background-color", "green");
            $("#input1PM").css("background-color", "green");
            $("#input2PM").css("background-color", "green");
            $("#input3PM").css("background-color", "green");
            $("#input4PM").css("background-color", "green");
            $("#input5PM").css("background-color", "green");
        }
        //
        else if(currentHour === 9) {
            $("#input9AM").css("background-color", "gray");
            $("#input10AM").css("background-color", "green");
            $("#input11AM").css("background-color", "green");
            $("#input12PM").css("background-color", "green");
            $("#input1PM").css("background-color", "green");
            $("#input2PM").css("background-color", "green");
            $("#input3PM").css("background-color", "green");
            $("#input4PM").css("background-color", "green");
            $("#input5PM").css("background-color", "green");
        }
        else if(currentHour === 10) {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "gray");
            $("#input11AM").css("background-color", "green");
            $("#input12PM").css("background-color", "green");
            $("#input1PM").css("background-color", "green");
            $("#input2PM").css("background-color", "green");
            $("#input3PM").css("background-color", "green");
            $("#input4PM").css("background-color", "green");
            $("#input5PM").css("background-color", "green");
        }
        else if(currentHour === 11) {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "red");
            $("#input11AM").css("background-color", "gray");
            $("#input12PM").css("background-color", "green");
            $("#input1PM").css("background-color", "green");
            $("#input2PM").css("background-color", "green");
            $("#input3PM").css("background-color", "green");
            $("#input4PM").css("background-color", "green");
            $("#input5PM").css("background-color", "green");
        }
        else if(currentHour === 12) {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "red");
            $("#input11AM").css("background-color", "red");
            $("#input12PM").css("background-color", "gray");
            $("#input1PM").css("background-color", "green");
            $("#input2PM").css("background-color", "green");
            $("#input3PM").css("background-color", "green");
            $("#input4PM").css("background-color", "green");
            $("#input5PM").css("background-color", "green");
        }
        else if(currentHour === 13) {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "red");
            $("#input11AM").css("background-color", "red");
            $("#input12PM").css("background-color", "red");
            $("#input1PM").css("background-color", "gray");
            $("#input2PM").css("background-color", "green");
            $("#input3PM").css("background-color", "green");
            $("#input4PM").css("background-color", "green");
            $("#input5PM").css("background-color", "green");
        }
        else if(currentHour === 14) {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "red");
            $("#input11AM").css("background-color", "red");
            $("#input12PM").css("background-color", "red");
            $("#input1PM").css("background-color", "red");
            $("#input2PM").css("background-color", "gray");
            $("#input3PM").css("background-color", "green");
            $("#input4PM").css("background-color", "green");
            $("#input5PM").css("background-color", "green");
        }
        else if(currentHour === 15) {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "red");
            $("#input11AM").css("background-color", "red");
            $("#input12PM").css("background-color", "red");
            $("#input1PM").css("background-color", "red");
            $("#input2PM").css("background-color", "red");
            $("#input3PM").css("background-color", "gray");
            $("#input4PM").css("background-color", "green");
            $("#input5PM").css("background-color", "green");
        }
        else if(currentHour === 16) {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "red");
            $("#input11AM").css("background-color", "red");
            $("#input12PM").css("background-color", "red");
            $("#input1PM").css("background-color", "red");
            $("#input2PM").css("background-color", "red");
            $("#input3PM").css("background-color", "red");
            $("#input4PM").css("background-color", "gray");
            $("#input5PM").css("background-color", "green");
        }
        else if(currentHour === 17) {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "red");
            $("#input11AM").css("background-color", "red");
            $("#input12PM").css("background-color", "red");
            $("#input1PM").css("background-color", "red");
            $("#input2PM").css("background-color", "red");
            $("#input3PM").css("background-color", "red");
            $("#input4PM").css("background-color", "red");
            $("#input5PM").css("background-color", "gray");
        }
        else {
            $("#input9AM").css("background-color", "red");
            $("#input10AM").css("background-color", "red");
            $("#input11AM").css("background-color", "red");
            $("#input12PM").css("background-color", "red");
            $("#input1PM").css("background-color", "red");
            $("#input2PM").css("background-color", "red");
            $("#input3PM").css("background-color", "red");
            $("#input4PM").css("background-color", "red");
            $("#input5PM").css("background-color", "red");
        }
    }

    populateTable();
    setData();
    getData();
    formatRows();
    displayTime();
    clearRows();
    
    
    
});