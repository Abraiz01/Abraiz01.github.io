/* --- code for GSAP and ScrollMagic starts here --- */

// storing window height and width in their respective variables
let height = window.innerHeight;
let width = window.innerWidth;

// /* --- PAGE 1 --- */

// var tl1 = new TimelineMax({onUpdate:updatePercentage3});

// tl1.from('#summon-pic', .5, {y:300, opacity: 0});
// tl1.from('#quote4', .5, {x:200, opacity: 0});

// const scene1 = new ScrollMagic.Scene({
//   triggerElement: "#page-1",
//             triggerHook: "onLeave",
//             duration: "100%"
// })
//   .setPin("#page-3")
//   .setTween(tl1)
// 		.addTo(controller);


// function updatePercentage3() {
//   tl1.progress();
// }

/* --- PAGE 2 --- */
/* working of GSAP and Scrollmagic animation libraries */ 
// initializing timeline variable for the current page
// the timeline acts as a container for every object inside the page and allows us to
// adjust their sequence and time delays using specific parameters
// the argument contains the function updatePercentage, which keeps track of the scroll progress
var tl2 = new TimelineMax({onUpdate:updatePercentage2});

// creating a controller object that would control the scenes for each timeline
// the scenes for each page define the scrolling activity of that page
const controller = new ScrollMagic.Controller();


// creating tween instances and defining parameters for the initial state of the animated object,
// its speed, timing, opacity, and direction of motion
tl2.from('#grassground', 1, {y:200, opacity: 0, ease: Power4.easeInOut}, "=-.5");
tl2.from('#quote3', .5, {x:-200, opacity: 0})


// creating a scene object for page-2 that allows the animations to play
// once the user has scrolled enough to display the page entirely
const scene2 = new ScrollMagic.Scene({
  triggerElement: "#page-2",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#page-2")
  .setTween(tl2)
		.addTo(controller);

// function to keep track of the scrolling progress made by the user
function updatePercentage2() {
  tl2.progress();
  // console.log(tl2.progress());
}

/* the same approach is followed for pages 3 and 4, 
 to avoid redundancy, comments for page 2 are not repeated, but pages are labelled
 when their code begins */

/* --- PAGE 3 --- */

var tl3 = new TimelineMax({onUpdate:updatePercentage3});

tl3.from('#city-background', .5, {y:300, opacity: 0});
tl3.from('#city1', .5, {y:200, opacity: 0});

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#page-3",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#page-3")
  .setTween(tl3)
		.addTo(controller);


function updatePercentage3() {
  tl3.progress();
}

/* --- PAGE 4 --- */

var tl4 = new TimelineMax({onUpdate:updatePercentage4});

tl4.from('#city-background2', .5, {y:300, opacity: 0});
tl4.from('#city2', .5, {y:200, opacity: 0});

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#page-4",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#page-4")
  .setTween(tl4)
		.addTo(controller);


function updatePercentage4() {
  tl4.progress();
}

/* --- PAGE 5 --- */

var tl5 = new TimelineMax({onUpdate:updatePercentage5});

tl5.from('#city-background3', .5, {y:300, opacity: 0});
tl5.from('#city3', .5, {y:200, opacity: 0});

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#page-5",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#page-5")
  .setTween(tl5)
		.addTo(controller);


function updatePercentage5() {
  tl5.progress();
}

/* --- PAGE 6 --- */

var tl6 = new TimelineMax({onUpdate:updatePercentage5});

tl6.from('#city-background3', .5, {y:300, opacity: 0});
tl6.from('#city3', .5, {y:200, opacity: 0});

const scene6 = new ScrollMagic.Scene({
  triggerElement: "#page-5",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#page-5")
  .setTween(tl6)
		.addTo(controller);


function updatePercentage5() {
  tl6.progress();
}

// /* --- code for GSAP and ScrollMagic ends here --- */

var image = document.getElementById("bottle-pic");
// image.addEventListener("click", changeImage);

var scrollButton = document.getElementById("scroll-button");


// function changeImage() {
//   var image = document.getElementById("bottle-pic");
//   var quote1 = document.getElementById("quote1");
//   var quote2 = document.getElementById("quote2");

//   quote1.textContent = "";
//   quote2.textContent = "Click to Throw";
//   image.src = "photos/bottle-laying.png";
//   image.style.height = "20vw";
//   image.style.top = "40vh";
//   image.style.left = "30vw";
//   scrollButton.style.display = "inline";
// }

document.getElementById("bottle-pic").addEventListener("click", function() {
  const target = document.querySelector("#placeholder-1");
  target.scrollIntoView({ behavior: "smooth" });
});






















