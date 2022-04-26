/**
 * Author: Shao Chen and Laiy Joshi
 * Created: 04.25.2022
 * License: Public Domain
 **/

 // Defining Variables //
 var myTransport = ['walking', 'bus', 'zipcar']
 var myMainRide = {
    make: 'Toyota',
    model: 'Prius',
    color: 'Purple',
    year: '1995'
};

 // output //
 document.writeln("Usual means of transportation: " + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
