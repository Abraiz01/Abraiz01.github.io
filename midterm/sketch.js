let layer1 = true; // cafe exterior
let layer2 = false; // cafe interior
let layer3 = false; // zoomed boombox
let layer4 = false; // zoomed frame1
let layer5 = false; // zoomed frame2
let layer6 = false; // zoomed frame3
let layer7 = false; // zoomed book
let layer8 = false; // zoomed menu
let layer9 = false; // tbd

// sound array
let sounds = [];
let currentsound;
let currentsoundIndex;
let knocking;

// image variables
let cafeoutside;
let board;
let isHovering = false;

// for detecting mouse hover over objetcs
let onDoor = false;
let onSmallBoombox = false;
let onFrame1 = false;
let onFrame2 = false;
let onFrame3 = false;
let onMenu = false;
let onBook1 = false;
let onBook2 = false;
let onBook3 = false;
let onPlayButton = false;
let onPauseButton = false;
let onNextButton = false;
let onBackButton = false;
let onOutsideButton= false;

function preload() {
  soundFiles = ['/sounds/music1.mp3', '/sounds/music2.mp3', '/sounds/music3.mp3'];
  // loop through the sound files and load each one as objects into the sounds[] array
  for (let i = 0; i < soundFiles.length; i++) {
    sounds[i] = loadSound(soundFiles[i]);
  }
  knocking = loadSound('/sounds/knocking.mp3');
  cafeoutside = loadImage('photos/outside.png');
  cafeinside = loadImage('photos/inside.png');
  board = loadImage('photos/board.png');
  smallboombox = loadImage('photos/boombox-small.png');
  bigboombox = loadImage('photos/boomzoom.png');
  boomplay = loadImage('photos/boomplay.png');
  boompause = loadImage('photos/boompause.png');
  boomnext = loadImage('photos/boomnext.png');
  boomback = loadImage('photos/boomback.png');
  frame1 = loadImage('photos/frame1.png');
  frame2 = loadImage('photos/frame2.png');
  frame3 = loadImage('photos/frame3.png');
  frame1white = loadImage('photos/frame1-white.png');
  frame2white = loadImage('photos/frame2-white.png');
  frame3white = loadImage('photos/frame3-white.png');
  bookzoom = loadImage('photos/bookzoom.png');
  book1white = loadImage('photos/book1-white.png');
  book2white = loadImage('photos/book2-white.png');
  book3white = loadImage('photos/book3-white.png');
  boardwhite = loadImage('photos/board-white.png');
  doorwhite = loadImage('photos/door-white.png');
  bgimage = loadImage('photos/background.png');
  previousbutton = loadImage('photos/previousbutton.png');
  previousbuttonwhite = loadImage('photos/previousbutton-white.png');
  frame1zoom = loadImage('photos/frame1zoom.png');
  frame2zoom = loadImage('photos/frame2zoom.png');
  frame3zoom = loadImage('photos/frame3zoom.png');
}


function setup() {
  createCanvas(1000, 600);
  rectMode(CENTER);
  console.log(sounds);
}

function cafeExterior() {
  if (onDoor) {
    image(doorwhite, 0, 0);
  }
  else {
    image(cafeoutside, 0, 0);
  }
  
  // image(board, 150, 400);
}

function cafeInterior() {
  image(bgimage, 0, 0);
  if (!onOutsideButton) {
    image(previousbutton, 0, 0);
  }
  else if (onOutsideButton) {
    image(previousbuttonwhite, 0, 0);
  }
  if (onFrame1) {
    image(frame1white, 0, 0);
  }
  else if (onFrame2) {
    image(frame2white, 0, 0);
  }
  else if (onFrame3) {
    image(frame3white, 0, 0);
  }
  else if (onBook1) {
    image(book1white, 0, 0);
  }
  else if (onBook2) {
    image(book2white, 0, 0);
  }
  else if (onBook3) {
    image(book3white, 0, 0);
  }
  else if (onMenu) {
    image(boardwhite, 0, 0);
  }
  else {
    image(cafeinside, 0, 0);
  }
}

function zoomedBoombox() {
  // image(bigboombox, 0, 0);
  // onPlayButton = true;
  if (onPlayButton) {
    image(boomplay, 0, 0);
  }
  else if (onPauseButton) {
    image(boompause, 0, 0);
  }
  else if (onNextButton) {
    image(boomnext, 0, 0);
  }
  else if (onBackButton) {
    image(boomback, 0, 0);
  }
  else {
    image(bigboombox, 0, 0);
  }
  if (!onOutsideButton) {
    image(previousbutton, 0, 0);
  }
  else if (onOutsideButton) {
    image(previousbuttonwhite, 0, 0);
  }
}

function zoomedBook() {
  if (!onOutsideButton) {
    image(bgimage, 0, 0);
  }
  else if (onOutsideButton) {
    image(bgimagewhite, 0, 0);
  }
  image(bookzoom, 0, 0);
  if (!onOutsideButton) {
    image(previousbutton, 0, 0);
  }
  else if (onOutsideButton) {
    image(previousbuttonwhite, 0, 0);
  }
}

function zoomedFrame1() {
  image(frame1zoom, 0, 0);
  if (!onOutsideButton) {
    image(previousbutton, 0, 0);
  }
  else if (onOutsideButton) {
    image(previousbuttonwhite, 0, 0);
  }
}

function zoomedFrame2() {
  image(frame2zoom, 0, 0);
  if (!onOutsideButton) {
    image(previousbutton, 0, 0);
  }
  else if (onOutsideButton) {
    image(previousbuttonwhite, 0, 0);
  }
}

function zoomedFrame3() {
  image(frame3zoom, 0, 0);
  if (!onOutsideButton) {
    image(previousbutton, 0, 0);
  }
  else if (onOutsideButton) {
    image(previousbuttonwhite, 0, 0);
  }
}


function draw() {
  background(220);

  checkInteractions()

  if (layer1) {
    cafeExterior();
  }
  else if (layer2) {
    cafeInterior();
  }
  else if (layer3) {
    zoomedBoombox();
  }
  else if (layer4) {
    // draw japanese tree
    zoomedFrame1();
  }
  else if (layer5) {
    zoomedFrame2();
  }
  else if (layer6) {
    zoomedFrame3();
  }
  else if (layer7) {
    zoomedBook();
  }

  if (onDoor) {
    // highlight the door
    // ellipse(350,350,50)
    // knocking.play();
  }
  else if (!onDoor) {
    // show the normal door
  }

  if (onSmallBoombox) {
    // highlight boombox
    // ellipse(550, 420, 20);
  }
  else if (!onSmallBoombox) {
    // show the normal boombox
  }



  showPoint();
}

function mouseClicked() {
  // Check if the user clicked the door and the layer is 1
  if (onDoor) {
    console.log('Door clicked!');
    // if yes move inside the cafe
    layer1 = false;
    layer2 = true;

    // start playing the music
    knocking.play();
    sounds[0].play();
    currentsound = sounds[0];
    currentsoundIndex = 0;
  }
  if (onSmallBoombox) {
    console.log('boombox clicked!');
    // if yes zoom into boombox
    // layer 1 is already false is we're in layer 2
    layer2 = false;
    layer3 = true;
  }
  if (onFrame1) {
    console.log('frame1 clicked!');
    // if yes zoom into boombox
    // layer 1 is already false is we're in layer 2
    layer2 = false;
    layer4 = true;
  }
  if (onFrame2) {
    console.log('frame2 clicked!');
    // if yes zoom into boombox
    // layer 1 is already false is we're in layer 2
    layer2 = false;
    layer5 = true;
  }
  if (onFrame3) {
    console.log('frame3 clicked!');
    // if yes zoom into boombox
    // layer 1 is already false is we're in layer 2
    layer2 = false;
    layer6 = true;
  }
  if (onMenu) {
    console.log('menu clicked!');
    // if yes zoom into boombox
    // layer 1 is already false is we're in layer 2
    layer2 = false;
    layer8 = true;
  }
  if (onBook1) {
    console.log('book1 clicked!');
    // if yes zoom into book
    // layer 1 is already false is we're in layer 2
    layer2 = false;
    layer7 = true;
  }
  if (onBook2) {
    console.log('book2 clicked!');
    // if yes zoom into book
    // layer 1 is already false is we're in layer 2
    layer2 = false;
    layer7 = true;
  }
  if (onBook3) {
    console.log('book3 clicked!');
    // if yes zoom into book
    // layer 1 is already false is we're in layer 2
    layer2 = false;
    layer7 = true;
  }
  if (onPlayButton) {
    // play the sound
    console.log('play clicked!');
    // for (let i = 0; i < sounds.length; i++) {
    //   currentsound = sounds[i]
    //   if (currentsound.isPaused()) {
    //     currentsound.play();
    //   }
    // }
    if (currentsound.isPaused()) {
        currentsound.play();
    }
  }
  if (onPauseButton) {
    // pause the sound
    console.log('pause clicked!');
    // for (let i = 0; i < sounds.length; i++) {
    //   currentsound = sounds[i]
    //   if (currentsound.isPlaying()) {
    //     currentsound.pause();
    //   }
    // }
    if (currentsound.isPlaying()) {
      currentsound.pause();
    }
  }
  if (onNextButton) {
    // forward the sound
    console.log('next clicked!');

    if (currentsound.isPlaying()) {
      currentsound.pause();
      sounds[(currentsoundIndex + 1) % sounds.length].play();
      currentsoundIndex = (currentsoundIndex + 1) % sounds.length;
      currentsound = sounds[currentsoundIndex]; 
      
    }
    else if (currentsound.isPaused) {
      sounds[(currentsoundIndex + 1) % sounds.length].play();
      currentsoundIndex = (currentsoundIndex + 1) % sounds.length;
      currentsound = sounds[currentsoundIndex];
    }
  }
  if (onBackButton) {
    // back the sound
    console.log('back clicked!');
    console.log(currentsoundIndex);
    if (currentsound.isPlaying()) {
      currentsound.pause();
      if(currentsoundIndex == 0){
        console.log("inside if");
        sounds[sounds.length -1].play();
        currentsoundIndex = sounds.length - 1;
        currentsound = sounds[currentsoundIndex]; 
      }
      else {
        sounds[(currentsoundIndex - 1) % sounds.length].play();
        currentsoundIndex = (currentsoundIndex - 1) % sounds.length;
        currentsound = sounds[currentsoundIndex]; 
      }   
    }
    else if (currentsound.isPaused) {
      if(currentsoundIndex == 0){
        sounds[sounds.length - 1].play();
        currentsoundIndex = sounds.length - 1;
        currentsound = sounds[currentsoundIndex]; 
      }
      else {
        sounds[(currentsoundIndex - 1) % sounds.length].play();
        currentsoundIndex = (currentsoundIndex - 1) % sounds.length;
        currentsound = sounds[currentsoundIndex]; 
      } 
    }
  }
  if (onOutsideButton && layer2) {
    layer1 = true
    layer2 = false;
  }
  if (onOutsideButton && layer3) {
    layer2 = true
    layer3 = false;
  }
  if (onOutsideButton && layer4) {
    layer2 = true
    layer4 = false;
  }
  if (onOutsideButton && layer5) {
    layer2 = true
    layer5 = false;
  }
  if (onOutsideButton && layer6) {
    layer2 = true
    layer6 = false;
  }
  if (onOutsideButton && layer7) {
    layer2 = true
    layer7 = false;
  }
  if (onOutsideButton && layer8) {
    layer2 = true
    layer8 = false;
  }
}

// function to check for mousehovers over interactables using coordinates
function checkInteractions() {
  // need to make everything false back again before we check for hover
  // else they stay true
  onDoor = false;
  onSmallBoombox = false;
  onFrame1 = false;
  onFrame2 = false;
  onFrame3 = false;
  onMenu = false;
  onBook1 = false;
  onBook2 = false;
  onBook3 = false;
  onPlayButton = false;
  onPauseButton = false;
  onNextButton = false;
  onBackButton = false;
  onOutsideButton= false;

  // Check if the user clicked the door and the layer is 1
  if (mouseX > 308 && mouseX < 430 && mouseY > 305 && mouseY < 495 && layer1) {
    onDoor = true;
  }
  else if (mouseX > 638 && mouseX < 689 && mouseY > 278 && mouseY < 307 && layer2) {
    onSmallBoombox = true;
  }
  else if (mouseX > 244 && mouseX < 281 && mouseY > 213 && mouseY < 262 && layer2) {
    onFrame1 = true;
  }
  else if (mouseX > 289 && mouseX < 328 && mouseY > 183 && mouseY < 235 && layer2) {
    onFrame2 = true;
  }
  else if (mouseX > 310 && mouseX < 363 && mouseY > 245 && mouseY < 279 && layer2) {
    onFrame3 = true;
  }
  // else if (mouseX > 429 && mouseX < 482 && mouseY > 385 && mouseY < 441 && layer2) {
  //   onMenu = true;
  // }
  // else if (mouseX > 688 && mouseX < 698 && mouseY > 171 && mouseY < 204 && layer2) {
  //   onBook1 = true;
  // }
  // else if (mouseX > 701 && mouseX < 711 && mouseY > 171 && mouseY < 204 && layer2) {
  //   onBook2 = true;
  // }
  // else if (mouseX > 714 && mouseX < 725 && mouseY > 179 && mouseY < 204 && layer2) {
  //   onBook3 = true;
  // }
  else if (mouseX > 507 && mouseX < 526 && mouseY > 310 && mouseY < 321 && layer3) {
    onPlayButton = true;
  }
  else if (mouseX > 483 && mouseX < 500 && mouseY > 304 && mouseY < 327 && layer3) {
    onPauseButton = true;
  }
  else if (mouseX > 507 && mouseX < 527 && mouseY > 355 && mouseY < 367 && layer3) {
    onNextButton = true;
  }
  else if (mouseX > 479 && mouseX < 501 && mouseY > 355 && mouseY < 367 && layer3) {
    onBackButton = true;
  }
  else if (mouseX > 34 && mouseX < 87 && mouseY > 547 && mouseY < 572 && (layer2 || layer3 || layer4 || layer5 || layer6 || layer7 || layer8)) {
    onOutsideButton = true;
  }
}

function showPoint() {
  text(mouseX, 10, 20);
  text(mouseY, 10, 40);
}