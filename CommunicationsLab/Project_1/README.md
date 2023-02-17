# Project #1 - Communications Lab
Project #1 using HTML, CSS, and JavaScript

Working Link: [Transitions](https://abraiz01.github.io/CommunicationsLab/Project_1/index.html)

## Description:

During our first class at Communications Lab, we were asked to pair up with a partner from class and we were given 30 minutes to come up with an idea for a 90-second video, shoot it, and edit it - The 30 Minute Film Festival (30MFF). It was quite a lot of stuff to do in 30 minutes but me and my partner Majid managed to come up with our "masterpiece" at the end. Our task for this assignment was to create a website for our 30MFF video using HTML, CSS, and JavaScript. 

Being a big fan of Dark Theme, I thought why not go on implementing that in my first website for this class. I feel like it gives a very professional feel to a weebsite and it really adds to the "cinematic" theme that I was going for in this project. For that, I was very careful in choosing the right colors for the dark theme so that it neither becomes too overwhelming nor very subtle. Once I got a hang of the theme, I decided that the kind of user interactions I was going to implement on my website were scrolling animations. I am always intrigued by websites that make good use of scrolling animations like the one at [Dbrand](https://dbrand.com/) or [Apple](https://www.apple.com/iphone-14-pro/), and I thought I'd go on and implement that in my own website as well to make the website's experience appear more smooth and professional. Furthermore, I wanted to give a sarcastiic, funny feel to the story of our film as well so I crafted the stories and cast descriptions in that manner as well.<br/><br/>


<p align="center">
  <img 
    width="450"
    height="300"
    src="https://github.com/Abraiz01/Abraiz01.github.io/blob/main/CommunicationsLab/Project_1/photos/homepage.png"
  >
</p>

## Process:

I started off by making a basic wireframe of my website and then implementing that in HTML and CSS. Then I went on to add placeholder text and images to the skeleton of my webpage so I could go on to start working on the scrolling animation part of my website. The wireframe of the 4 pages that made up my website are shown below:

<p align="center">
  <img 
    width="450"
    height="600"
    src="https://github.com/Abraiz01/Abraiz01.github.io/blob/main/CommunicationsLab/Project_1/photos/wireframe-1.png"
  >
  <img 
    width="450"
    height="600"
    src="https://github.com/Abraiz01/Abraiz01.github.io/blob/main/CommunicationsLab/Project_1/photos/wireframe-2.png"
  >
</p>

When all the divs and elements of my webpage were placed where I wanted them, I started working on the scrolling animations. I tend to spend more time working on the final theme of my website so I left that at the end so I could focus on getting the scrolling animations right first. To implement the animations, I made use of a combination of [Greensock] and [Scrollmagic] JavaScript libraries along with some help from a few YouTube videos which are mentioned in the [References] section.The main challenge I faced here was to figure out how each attribute in the library functioned. Once I was able to do that, I reproduced the idea to create animations throughout the entire website. For instance, in the following code snippet:

```js
  tl2.from('#story-1', .5, {x:200, opacity: 0});
```

The ‘story-1’ object will appear for a duration of 0.5 units, 200 pixels from the right of the final position where the object is to be placed, and it’s opacity will increase from 0 to 1 as the user scrolls through the website. I added vertical and horizontal scrolling animations for various elements on my website in the same way and kept on reproducing the results. The idea was a bit hard to grasp at first since implementing something like this was new to me, but once I got the hang of it, everything tuirned out exactly as I wanted it to be.

When the scrolling animations were set, all I had to do was to place the real text and images in place of the placeholder elements and then finalize the theme of the website. Once I was done placing my elements using HTML and CSS, I looked up several websites to come up with a suitable dark theme for my website. Then I came across a very helpful section on [Material UI](https://m2.material.io/design/color/dark-theme.html)'s website. Not only does it make us familiar with the color schema that is followed by most dark-themed websites, it provides the logic behind them as well. I found this site very useful. I used it to choose the background color and title color schema for my website. At the end, I believe my website gives the vibe of a well designed, standard dark-themed page. I got to know that the standard background for dark-themed apps is #121212 and that the rest of the elements have a lighter grey with more opacity so that they would appear to pop into the window.

Another small but very important part of my website was the scroll-to-top button. For this, I created a `scrollFunction()` that detects when the user has scrolled past 300 pixels vertically, and when they have, it makes the scroll button visible. I did this since I didn't want the scroll to top button visible on the homepage since it had no use there.

```js

function scrollFunction() {
  // the button only appears after 300 pixels have been scrolled down
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}
```

Then I went on to implement the actual scrolling by getting the scroll button and making it scroll to the topmost placeholder element when clicked. I used an invisible placeholder so that it would make sure it scrolls to the very top.

```js
document.getElementById("back-to-top").addEventListener("click", function() {
  const target = document.querySelector("#placeholder-2");
  target.scrollIntoView({ behavior: "smooth" });
});
```

## Reflection / Evaluation:

My initial concept for this project was to make a website for our film that would have a funny story and sarcastic feel to it while also maintaining a balance of looking professional and being smooth to use as well. I am very happy with how the dark theme turned out and how everything in the website feels like it was supposed to be there, like the scroll to top button. However, most of all, I think the scrolling animations really made the website come to life and these were exactly the kind of animations I was going for initially as well. 

I feel like this website was a good foundational project to start with. There is a lot more I can build upon it as well. Next time, I would like to learn and add more user interactions, experiment with more themes, and pay more attention to small details like button animations when they are clicked, and making use of front-end libraries like BootStrap to make positioning of elements easier.

