/**
 * Author: Shao Chen and Laiy Joshi
 * Created: 04.25.2022
 * License: Public Domain
 **/


window.onload = function () {

    // Use getElementById() to find the output <div> and assign it to a variable outputEl
    var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);

    // Create a new element with document.createElement("p") and assign it to a variable new1El
    var new1El = document.createElement("p");

    // Change the html attribute of new1El to say "something new."
    new1El.innerHTML = "Something new";

    // Create a new element with document.createElement("p") and assign it to a variable new1El
    var new2El = document.createElement("p");

    // Change the html attribute of new1El to say "something else."
    new2El.innerHTML = "Something else";

    // Append both new elements one at a time using appendChild()
    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);


    new1El.style.color = "#CBC3E3";
    new2El.style.color = "#CF9FFF";
    outputEl.style.border = "dotted 1px lavender";
    outputEl.className = "changed";
    new1El.style.margin = "10px";
    new2El.style.margin = "10px";

}
