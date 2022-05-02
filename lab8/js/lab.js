/**
 * Author: Shao Chen and Laiy Joshi
 * Created: 04.25.2022
 * License: Public Domain
 **/


function square(x){
    var results = x ** 2
    return results;
}

// test functions
console.log("The number times itself is...", square(1));
console.log("The number times itself is...", square(2));

array = [83, 9, 27, 81, 8];
console.log("My array: ", array);

var result = array.map(square);
// should give out the output of the squared numbers in the array, in order
console.log("The results: ", result);

var result = array.map(function(x){
    var results = x/2
    return results;
})
// should return with [41.5, 4.5, 13.5, 40.5, 4]
console.log("Divided by two: ", result);
