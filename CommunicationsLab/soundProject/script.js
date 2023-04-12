let unlockButton = document.getElementById("unlock-button");
let attendButton = document.getElementById("attend-button");
let restartButton = document.getElementById("restart-button");
let playButton = document.getElementById("bPlayPause");
let playButtonImage = document.getElementById('imgPlayPause');
let ringtone = document.getElementById("ringtone");
let uaeCallImg = document.getElementById("uae-call");
let uaeRingingImg = document.getElementById("phone-ringing");
let dubaiCallImg = document.getElementById("dubai-call");
let lockscreen = document.getElementById("lockscreen");
const audioScam = document.getElementById("audio-scam");
const bankAudio = document.getElementById("bank-audio");

let audio = new Audio("sounds/ringing.mp3");
let scamAudioPlaying = true;
let bankAudioPlaying = true;

playButton.addEventListener("click", function () {
    console.log("play pause pressed")
  if (!scamAudioPlaying && getComputedStyle(uaeCallImg).display === 'block') {
    playButtonImage.src = "images/pause.png";
    audioScam.play();
    scamAudioPlaying = true;
  } 
  else if (scamAudioPlaying && getComputedStyle(uaeCallImg).display === 'block') {
    playButtonImage.src = "images/play.png";
    audioScam.pause();
    scamAudioPlaying = false;
  }

  if (!bankAudioPlaying && getComputedStyle(dubaiCallImg).display === 'block') {
    playButtonImage.src = "images/pause.png";
    bankAudio.play();
    bankAudioPlaying = true;
  } 
  else if (bankAudioPlaying && getComputedStyle(dubaiCallImg).display === 'block') {
    playButtonImage.src = "images/play.png";
    bankAudio.pause();
    bankAudioPlaying = false;
  }
});

audioScam.addEventListener("ended", function () {
  // Do something when the audio playback has ended
  changeBackgroundImage('images/red-bg.jpg');
  console.log("Scam Audio ended");
  uaeCallImg.style.display = "none";
//   lockscreen.style.display = "block";
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

bankAudio.addEventListener("ended", function () {
  // Do something when the audio playback has ended
  changeBackgroundImage('images/blue-bg.jpg');
  console.log("Bank Audio ended");
  dubaiCallImg.style.display = "none";
  playButton.style.display = "none";
  lockscreen.style.display = "block";
  restartButton.style.display = "block";
});

document.getElementById("unlock-button").addEventListener("click", function () {
  console.log("Unlock button clicked");
  lockscreen.style.display = "none";
  uaeRingingImg.style.display = "block";
  unlockButton.style.display = "none";
  attendButton.style.display = "block";
  ringtone.play();
});

document.getElementById("attend-button").addEventListener("click", function () {
  console.log("Attend button clicked");
  ringtone.pause();
  attendButton.style.display = "none";
  uaeRingingImg.style.display = "none";
  uaeCallImg.style.display = "block";
  playButton.style.display = "block";
  audioScam.play();
});

function changeBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
}
