/**
 * Author: Shao Chen and Laiy Joshi
 * Created: 05.11.2022
 * License: Public Domain
 **/

// Give a seperate button for each section
// A button called "Click me!" for the About section
$("#about").append("<button id='c-button'>Click me!</button>");
// A button called "Click me..." for the Problem section
$("#problem").append("<button id='p-button'>Click me...</button>");
// A button called "Click me?" for the Results section
$("#results").append("<button id='r-button'>Click me?</button>");

// Assign an event for each button to do
$("#c-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
  $(this).parent().toggleClass("special");;
})

$("#r-button").click(function(){
  $(this).parent().toggleClass("special");
})

// Task X: Change the color of every button using a single button
$(document).on('ready',function(){
$('button').click(function() {
    $('button').not($(this)).toggleClass("yoYo");
    $(this).css('background','none');
  });
});
