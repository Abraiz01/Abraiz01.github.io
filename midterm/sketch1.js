let img; // declare variable to hold the image

function preload() {
  img = loadImage('photos/outside.png'); // load the image
}

function setup() {
  createCanvas(1000, 600);
  image(img, 0, 0); // display the original image
  img.resize(img.width/2, img.height/2); // scale down the image
  image(img, 10, 0); // display the scaled down image
}