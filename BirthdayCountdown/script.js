/*
 As I'm starting to learn Javascript and I wanted to make my acquired knowledge ( which is just a little bit now ) to practive and wanted to make a countdown timer to my Birthday.
 The code was mainly extracted from "https://www.w3schools.com/howto/howto_js_countdown.asp" with a bit of changes to make it work fine with my HTML document.
 It is not that original of idea but after understanding this code I got to learn many things and make it to practice hoping to start making these codes alone after getting more familiar with the language.
 */

// Set the date we're counting down to
var birthday = new Date("Aug 19, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = birthday - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + " d ";
  document.getElementById("hours").innerHTML = hours + " h ";
  document.getElementById("minutes").innerHTML = minutes + " m ";
  document.getElementById("seconds").innerHTML = seconds + " s ";
}, 1000);
