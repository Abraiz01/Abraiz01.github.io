let unlockButton = document.getElementById("unlock-button");
let attendButton = document.getElementById("attend-button");
let restartButton = document.getElementById("restart-button");
let ringtone = document.getElementById("ringtone");
let uaeCallImg = document.getElementById("uae-call");
let uaeRingingImg = document.getElementById("phone-ringing");
const audioScam = document.getElementById("audio-scam");
const bankAudio = document.getElementById("bank-audio");

let audio = new Audio("sounds/ringing.mp3");


audioScam.addEventListener("ended", function () {
  // Do something when the audio playback has ended
  console.log("Scam Audio ended");
  alert(
    "Purchase of AED 5000 on your account XXX748360 was successful. Available balance is 11.34 AED"
  );
  // this is to know when the user has clicked the ok button on the alert
  setTimeout(function () {
    console.log("okay clicked");
    bankAudio.play();
  }, 0);
});

bankAudio.addEventListener("ended", function () {
    // Do something when the audio playback has ended
    console.log("Bank Audio ended");
    restartButton.style.display = "block";
  });

document.getElementById("unlock-button").addEventListener("click", function () {
  console.log("Unlock button clicked");
  unlockButton.style.display = "none";
  ringtone.play();
});

document.getElementById("attend-button").addEventListener("click", function () {
  console.log("Attend button clicked");
  ringtone.pause();
  attendButton.style.display = "none";
  uaeRingingImg.style.display = "none";
  uaeCallImg.style.display = "block";
  audioScam.play();
});
