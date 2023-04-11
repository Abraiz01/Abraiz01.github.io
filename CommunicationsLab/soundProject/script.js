let unlockButton = document.getElementById("unlock-button");
let attendButton = document.getElementById("attend-button");
var ringtone = document.getElementById("ringtone");
// var audioScam = document.getElementById("audio-scam");

let audio = new Audio("sounds/ringing.mp3");

const audioScam = document.getElementById("audio-scam");
audioScam.addEventListener("ended", function () {
  // Do something when the audio playback has ended
  console.log("Audio ended");
  alert("Purchase of AED 5000 on your account XXX748360 was successful. Available balance is 11.34 AED");
  // this is to know when the user has clicked the ok button on the alert
  setTimeout(function() {
    console.log("okay clicked")
  }, 0);
});

document.getElementById("unlock-button").addEventListener("click", function () {
  console.log("Unlock button clicked");
  ringtone.play();
});

document.getElementById("attend-button").addEventListener("click", function () {
  console.log("Attend button clicked");
  ringtone.pause();
  audioScam.play();
});
