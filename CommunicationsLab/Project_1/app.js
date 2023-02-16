
/* --- code for GSAP and ScrollMagic starts here --- */

// storing window height and width in their respective variables
let height = window.innerHeight;
let width = window.innerWidth;

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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.getElementById("back-to-top").addEventListener("click", function() {
  const target = document.querySelector("#placeholder-2");
  target.scrollIntoView({ behavior: "smooth" });
});


// creating tween instances and defining parameters for the initial state of the animated object,
// its speed, timing, opacity, and direction of motion
tl2.from('#story-1', .5, {x:200, opacity: 0});

tl2.from('#storypic-1', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.5");
tl2.from('#story-3', .5, {x:-200, opacity: 0})
tl2.from('#storypic-3', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.5");
tl2.from('#story-2', .5, {x:200, opacity: 0});
tl2.from('#storypic-2', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.5");


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

/* the same approach is followed for pages 3-5, 
 to avoid redundancy, comments for page 2 are not repeated, but pages are labelled
 when their code begins */

/* --- PAGE 3 --- */

var tl3 = new TimelineMax({onUpdate:updatePercentage3});

tl3.from('#video-div', .5, {y:300, opacity: 0});
tl3.from('#blockquote-4', .5, {x:200, opacity: 0});
tl3.from('#curiosity-1', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-1");
tl3.from('#button4', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
tl3.from('#blockquote-3d', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
tl3.from('#rocket-2', 1, {y:-700, opacity: 0, ease: Power4.easeInOut}, "=-0.7");

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

tl4.from('#cast-container1', .5, {x:200, opacity: 0});
tl4.from('#cast-container2', .5, {x:-200, opacity: 0});
tl4.from('#blockquote-6', .5, {x:200, opacity: 0});
tl4.from('#cruise-pic1', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-1");
tl4.from('#cruise-pic2', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
tl4.from('#cruise-1', 1, {y:-700, opacity: 0, ease: Power4.easeInOut}, "=-0.7");

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

tl5.from('#blockquote-7', .5, {x:200, opacity: 0});
tl5.from('#blockquote-8', .5, {x:200, opacity: 0});
tl5.from('#land-1', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-1");
tl5.from('#land-2', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
tl5.from('#cruise-2', 1, {y:-500, opacity: 0, ease: Power4.easeInOut}, "=-.7");

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

/* --- code for GSAP and ScrollMagic ends here --- */

// initializing 'teleport to mars' and 'game' buttons
let button1;
button1 = document.getElementById("button1").addEventListener("click", function() {
  const target = document.querySelector("#cast-container2");
  target.scrollIntoView({ behavior: "smooth" });
});

let button2;
button2 = document.getElementById("button2").addEventListener("click", function() {
  const target = document.querySelector("#video-div");
  target.scrollIntoView({ behavior: "smooth" });
});

let button3;
button3 = document.getElementById("button3").addEventListener("click", function() {
  const target = document.querySelector("#placeholder-1");
  target.scrollIntoView({ behavior: "smooth" });
});



















