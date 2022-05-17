/**
 * Author: Shao Chen and Laiy Joshi
 * Created: 05.11.2022
 * License: Public Domain
 **/

// Input an array to sort the length/number of letters into the name
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
// Specify and organize which amount belongs to which category of the house.
if (mod == 0) {
    return("Gryffindor");
}
else if (mod == 1) {
  return("Ravenclaw");
}
else if (mod == 2) {
  return("Slytherin");
}
else {
    return("Hufflepuff");
  }
}

// Recieve the results back.
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = ("You have been sorted to the Hogwarts house " + house);
  document.getElementById("output").innerHTML = newText;
})
