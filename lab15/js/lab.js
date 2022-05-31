/**
 * Author: Shao Chen and Laiy Joshi
 * Created: 05.25.2022
 * License: Public Domain
 **/

 // Using the core $.ajax() method
 var endpoint = ""

$("#api-button").click(doAPIStuff);

 function getAjax() {
 $.ajax({
     // The URL for the request (from the api docs)
     url: "https://yourapiendpoint.com/",
     // The data to send (will be converted to a query string)
     data: {
       "answer": "yes",
       "forced": false,
       "image": "https://yesno.wtf/assets/yes/2.gif"
           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         console.log(data);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })
}
