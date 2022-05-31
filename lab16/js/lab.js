/**
 * Author: Shao Chen and Laiy Joshi
 * Created: 05.30.2022
 * License: Public Domain
 **/


 /*
  *Author: Makkenzie Zepeda
  *Created: May 26, 2022
  *Lab 16: JSON and APIs
  *License: Public Domain
  */



  var endpoint = "https://xkcd.com/info.0.json";

  function getAjax() {
  	$.ajax({
    	  url: endpoint,
        type: "GET",
        dataType: 'json',


    })
    .done(function(data){
    	console.log("Woohoo!");
      var month = "5";
      var num = 2626;
      var link = "";
      var year = "2022";
      var news = "";
      var safe_title = "d65536";
      var transcript = "";
      var alt = "They're robust against quantum attacks because it's hard to make a quantum system that large.";
      var img = "https://imgs.xkcd.com/comics/d65536.png";
      var title = "d65536";
      var day = 30;

      console.log(month, num, link, year, news, safe_title, transcript);
    	$("#output").append("<h2>Month: " + month + "</h2>");
    	$("#output").append("<img src=" + img + ">");
      $("#output").append("<h1>Number: " + num + "</h1>");
      $("#output").append("<h1>" + link + "</h1>");
      $("#output").append("<h1>Year: " + year + "</h1>");
      $("#output").append("<h1>" + news + "</h1>");
      $("#output").append("<h1>Safe Title: " + safe_title + "</h1>");
      $("#output").append("<h1>" + transcript + "</h1>");
      $("#output").append("<h1>Alt: " + alt + "</h1>");
      $("#output").append("<h1>Title: " + title + "</h1>");
      $("#output").append("<h1>Day: " + day + "</h1>");

    })
    .fail(function(request, error){
    	$("#output").html("Oops, error! Something went wrong :()");
    })
  }

  $("#button").click(getAjax);
