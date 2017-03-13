console.log("JS is linked");



var heightElem = document.getElementById("myRange").value;

var selectid = document.getElementById("selectid");
var symbolChosen = selectid.options[selectid.selectedIndex].value;

console.log(symbolChosen + " is symbol chosen");
console.log(heightElem + " is height element");

// set a handler function for the form's submission event
// heightElem.on = function(event) {
//
//     // QUIZ
//     // what happens if we don't do this?
//     event.preventDefault();
//
//     // QUIZ
//     // what happens if we don't do this?
//     clearError();
//
//     // figure out the height the user typed
//     heightStr = heightElem.value;
//
//     // TODO 1
//     // if they didn't type anything at all, give a different error message,
//     // something like "Please provide a height"
//
//     if(!heightStr){
//       displayError("Please provide a height");
//       return;
//     }
//
//     // convert the string to an int
//     height = parseInt(heightStr);
//
//
//     // if the height is not-a-number, yell at them and exit early
//     // TODO 2
//     // negative numbers and zero should also be rejected here
//     if (isNaN(height) || height < 1 ) {
//         displayError("That's not a valid height.");
//         return;
//     }
//
//     // if the height is absurdly tall, yell at them and exit early
//     var tooTall = 23;
//     if (height > tooTall) {
//         displayError("Are you cray? I can't build a pyramid that tall.");
//         return;
//     }
//
//     // draw pyramid with the specified height
//     drawPyramid(height);
// }
//
//
// /**
//  * displayError
//  *
//  * Displays an error message on the text input, and colors it red
//  */
// function displayError(message) {
//     heightElem.className = "invalid-field";
//     document.querySelector(".error-message").innerHTML = message;
// }
//
//
// /*
//  * clearError
//  *
//  * Undisplays the error message and removes the red CSS style
//  */
// function clearError() {
//     // TODO 3
//     // implement this function.
//     heightElem.className = "";
//     document.querySelector(".error-message").innerHTML = "";
//
// }
//
//
//
// /**
//  * drawPyramid
//  *
//  * Renders, in the HTML document, a Mario pyramid of the specified height
//  */
function drawPyramid(heightElem, symbolChosen) {

    // first, clear the old content
    document.getElementById("bottom").innerHTML = "";
    document.getElementById("rangeNumber").innerHTML = heightElem;

    // for each row....
    symbolChosen = selectid.options[selectid.selectedIndex].value;



    for (var row = 0; row < heightElem; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = heightElem - row - 1;

        // build up a string for this row
        var rowStr = "";
        rowElem = document.createElement("p");
        rowElem.className = 'pClass';
        rowElem.innerHTML = rowStr;
        document.getElementById("bottom").appendChild(rowElem);

        for (var i = 0; i < numSpaces; i++) {
          span = document.createElement("span");
          span.className = "spanClass";
          span.innerHTML = "&nbsp";
          var spaceChar = span.innerHTML; // this is the HTML encoding for a space " "
          rowStr += spaceChar;
          document.querySelectorAll(".pClass")[row].appendChild(span);
          // document.querySelectorAll('.titanic')[1]

        }

        for (var i = 0; i < numBricks; i++) {
          span = document.createElement("span");
          span.className = "spanClass";
          span.innerHTML = symbolChosen;
          rowStr += span;
          document.querySelectorAll(".pClass")[row].appendChild(span);

        }
        // make a <p> element for this row, and insert it into the #pyramid container
        // rowElem = document.createElement("p");
        // rowElem.className = 'pClass';
        // rowElem.innerHTML = rowStr;
        // document.getElementById("bottom").appendChild(rowElem);
    }
}
