// getting button elements
let unlockButton = document.getElementById("unlock-button");
let attendButton = document.getElementById("attend-button");
let restartButton = document.getElementById("restart-button");
let playButton = document.getElementById("bPlayPause");

// play/pause button image that will alternate
let playButtonImage = document.getElementById("imgPlayPause");

// getting image elements
let uaeCallImg = document.getElementById("uae-call");
let uaeRingingImg = document.getElementById("phone-ringing");
let dubaiCallImg = document.getElementById("dubai-call");
let lockscreen = document.getElementById("lockscreen");

// audio elements for ringtone, scam call, and bank official
let ringtone = document.getElementById("ringtone");
const audioScam = document.getElementById("audio-scam");
const bankAudio = document.getElementById("bank-audio");
let audio = new Audio("sounds/ringing.mp3");

// boolean variables to check if scam/bank audio is playing or not
let scamAudioPlaying = true;
let bankAudioPlaying = true;

// if the play/pause button is clicked
playButton.addEventListener("click", function () {
  console.log("play pause pressed");

  // if we are on the scam call and the scam audio is not playing, play the scam audio and change the image to pause
  if (!scamAudioPlaying && getComputedStyle(uaeCallImg).display === "block") {
    playButtonImage.src = "images/pause.png";
    audioScam.play();
    scamAudioPlaying = true;
  // else if we are on the scam call and the scam audio is playing, pause the scam audio and change the image to play
  } else if (
    scamAudioPlaying &&
    getComputedStyle(uaeCallImg).display === "block"
  ) {
    playButtonImage.src = "images/play.png";
    audioScam.pause();
    scamAudioPlaying = false;
  }

  // if we are on the bank call and the bank audio is not playing, play the bank audio and change the image to pause
  if (!bankAudioPlaying && getComputedStyle(dubaiCallImg).display === "block") {
    playButtonImage.src = "images/pause.png";
    bankAudio.play();
    bankAudioPlaying = true;
  // else if we are on the bank call and the bank audio is playing, pause the bank audio and change the image to play
  } else if (
    bankAudioPlaying &&
    getComputedStyle(dubaiCallImg).display === "block"
  ) {
    playButtonImage.src = "images/play.png";
    bankAudio.pause();
    bankAudioPlaying = false;
  }
});

// checking if the scam audio has ended to change the phone screen, background, and start the bank audio
audioScam.addEventListener("ended", function () {
  changeBackgroundImage("images/red-bg.jpg");
  console.log("Scam Audio ended");
  uaeCallImg.style.display = "none";
  alert(
    "Purchase of AED 5000 on your account XXX748360 was successful. Available balance is 11.34 AED"
  );
  // this is to know when the user has clicked the ok button on the alert
  setTimeout(function () {
    console.log("okay clicked");
    lockscreen.style.display = "none";
    dubaiCallImg.style.display = "block";
    bankAudio.play();
  }, 0);
});

// checking if the bank audio has ended to change the phone screen, background, and display the restart button
bankAudio.addEventListener("ended", function () {
  changeBackgroundImage("images/blue-bg.jpg");
  console.log("Bank Audio ended");
  dubaiCallImg.style.display = "none";
  playButton.style.display = "none";
  lockscreen.style.display = "block";
  restartButton.style.display = "block";
});

// checking if the unlock button is clicked to change the phone screen, and start the scam call ringtone
document.getElementById("unlock-button").addEventListener("click", function () {
  console.log("Unlock button clicked");
  lockscreen.style.display = "none";
  uaeRingingImg.style.display = "block";
  unlockButton.style.display = "none";
  attendButton.style.display = "block";
  ringtone.play();
});

// checking if the attend button is clicked to change the phone screen, and start the scam call
document.getElementById("attend-button").addEventListener("click", function () {
  console.log("Attend button clicked");
  ringtone.pause();
  attendButton.style.display = "none";
  uaeRingingImg.style.display = "none";
  uaeCallImg.style.display = "block";
  playButton.style.display = "block";
  audioScam.play();
});

// function to change the background image
function changeBackgroundImage(imageUrl) {
  document.body.style.backgroundImage = `url(${imageUrl})`;
}
