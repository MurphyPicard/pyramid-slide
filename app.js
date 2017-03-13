var heightElem = document.getElementById("myRange").value;
var selectid = document.getElementById("selectid");
var symbolChosen = selectid.options[selectid.selectedIndex].value;

function drawPyramid(heightElem, symbolChosen) {

    // first, clear the old content
    document.getElementById("bottom").innerHTML = "Secret Code: Show Cat";

    // reset the height on change
    heightElem = document.getElementById("myRange").value;
    document.getElementById("rangeNumber").innerHTML = heightElem;

    // reset the symbol on change
    symbolChosen = selectid.options[selectid.selectedIndex].value;

    // loops for every row
    for (var row = 0; row < heightElem; row++) {
        var numBricks = row + 2;
        var numSpaces = heightElem - row - 1;

        // build up a string for this row
        var rowStr = "";
        rowElem = document.createElement("p");
        rowElem.className = 'pClass';
        rowElem.innerHTML = rowStr;
        document.getElementById("bottom").appendChild(rowElem);

        // loops through the spaces for the current row (in span tags)
        for (var i = 0; i < numSpaces; i++) {
          span = document.createElement("span");
          span.className = "spanClass";
          span.innerHTML = "&nbsp"; // this is the HTML encoding for a space " "
          var spaceChar = span.innerHTML;
          rowStr += spaceChar;
          document.querySelectorAll(".pClass")[row].appendChild(span);
          // document.querySelectorAll('.titanic')[1]
        }

        // loops through the symbols for the current row (in span tags)
        for (var i = 0; i < numBricks; i++) {
          span = document.createElement("span");
          span.className = "spanClass";
          span.innerHTML = symbolChosen;
          rowStr += span;
          document.querySelectorAll(".pClass")[row].appendChild(span);
        }//for
    }// outside for
}//function drawPyramid

// let's do it!
drawPyramid(heightElem, symbolChosen);
