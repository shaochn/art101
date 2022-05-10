/**
 * Author: Shao Chen and Laiy Joshi
 * Created: 05.09.2022
 * License: Public Domain
 **/

 // Borrowing the nameSort() function from Wes Modes (lab 7)
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        // Select a random element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // Swap the selected element with another random element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Using sortUserName in order to change the way the letters are swapped
function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

// Returning string in the Title Case
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// Locate button element
  buttonEl = document.getElementById("my-button");
  console.log("button element:", buttonEl);
// Locate form element
  inputEl = document.getElementById("user-name");
  console.log("input element:", inputEl);
// Locate output element
  outputEl = document.getElementById("output");
  console.log("output element:", outputEl);

// Attach an event listener to button
  buttonEl.addEventListener("click", function(){
  // Recieve value from the name element
    var userName = inputEl.value;
  // Reording value
    var newName = toTitleCase(reorderUserName(userName));
  // Inserting value into output
    outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});

// Glitch effect
// Thanks to https://stackoverflow.com/questions/64816798/glitch-effect-with-javascript
  const text = 'BOO! Did\'ja scare ya?!!%'

// Select the letters that will move around as a "glitch"
  const alphaCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?', '!', ' ', "'"];

  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '?', '!', ' ', "'"];
  var output = "";
  var progress = 0;
  const len = text.length;


function glitch() {
    if (progress >= len) {
      return;
  }
  var randomNums = Math.floor(Math.random() * alpha.length)
  if (alpha[randomNums] == text[progress] || alphaCaps[randomNums] == text[progress]) {
    output += text[progress];
    document.getElementById("text").innerHTML = `${output}`
    progress++;
  } else {
    document.getElementById("text").innerHTML = `${output}${alpha[randomNums]}`
  }
  requestAnimationFrame(glitch);
}

// Button function for the glitch effect
window.addEventListener("load",function() {
  document.getElementById("but").addEventListener("click",function() {
    this.hidden=true;
    glitch();
  });
})
