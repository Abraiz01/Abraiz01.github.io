# Project #3 - Sound Project
Project #3 creating a sound-based story using Audacity, HTML, CSS, and JavaScript

Working Link: [Not a Scam](https://abraiz01.github.io/CommunicationsLab/soundProject/)

Teammates: Aibar, Soumen, Abraiz, Tarek

## Project Description

"Not a Scam" is a project that takes the form of a 2-3 minute sound piece designed to be hosted on a website. The overall concept of the project is to raise awareness about the dangers of online scamming by taking the listener on a journey that simulates a real-life experience of being scammed. The project aims to create an immersive experience that showcases the prevalence and impact of online scamming while also educating the audience on how to protect themselves against such scams. The theme of the project is centered around online scamming, a serious issue that has become increasingly prevalent in today's digital age. 

The story follows the journey of a protagonist who is scammed by someone pretending to be a UAE bank manager. Through this narrative, the project aims to highlight the danger of online scamming, how it can happen to anyone, and the importance of being vigilant about online security. The experience that the project strives to create is one that is both engaging and informative. The sound piece is structured as a story with a clear beginning, middle, and end, and is designed to take the listener on a journey that evokes emotions such as fear, anxiety, and ultimately, relief. The sound effects and descriptive language used in the piece aim to create a realistic and immersive experience that allows the listener to put themselves in the shoes of the protagonist and feel the impact of being scammed.

<br/><br/>

<p align="center">
  <img 
    width="200"
    height="400"
    src="https://github.com/Abraiz01/Abraiz01.github.io/blob/main/CommunicationsLab/soundProject/images/phone-ringing.png"
  >
</p>


## Process

### Asset Making Process (Audacity and Adobe Photoshop)

All of the dialogues were recorded as original sound pieces, which then were modified on Audacity audio editing software. We have spent a significant amount of time and effort to leverage different effects, plug-ins and extra features to manipulate and remix the audio to achieve the immersive effect. Fade out and fade in are audio techniques we used in our sound project to transition between different segments of a composition, or to create a particular atmosphere or effect. We also used normalization to adjust the different volumes and characteristics of the sound. Additionally, the envelope tool in Audacity was used to adjust the volume of an audio track over time. It allows the user to create a smooth transition between different volume levels, and can be used to add dynamics and depth to an audio recording. The envelope tool works by creating a "control line" that represents the volume level of the audio track at different points in time. By adjusting the control line, the user can increase or decrease the volume of the audio track at specific points in the recording. Another important feature was Noise Reduction which allowed us to remove the background noise of AC and any other unnecessary noise sources to achieve the high quality audio.

### Design, UX, and Web Implementation 

There were certain design choices that we made during the creation of the website which we would like to highlight here. Firstly, we decided to make the website simple and easy to navigate so that the user could get the full experience without having to fiddle around too much or get distracted by unnecessary elements. The first screen is a simple phone with a button to unlock it which the user will eventually press, and once they press it, the phone screen changes to a ringing phone screen with a familiar silent-mode ringtone which the user will be compelled to attend. We made the audio loop for this part so that the user can only proceed if they attend the call. We implemented changing phone screens in this way to match with the audio that was playing and the current situation the story was in to progress though the website and make it as seemless as possible. Deciding to use the ubnlock button before the attend call button was done on purpose because we didn't want the user to experience any sound as soon as they landed on the first page, so we allowed them to unlock the phone first and then play the ringtone and subsequent audios. 

Moreover, we also picked the background colors to match with the emotions of the customer who was being scammed. The initial green color was used to indicate they were calm and that everything was normal, the red background pops up after they get scammed and call their bank for help, indicating a sense of anxiousness. The blue color at the final stage indicates sadness after the customer got scammed.

Finally, we implemented pause / play buttons to give the user some control over the sound that was being played so that they could pause it whenever they felt like it and resume it whenever they wanted to. IMplementing this was a bit of a challenge because we had to take into account the two different audio files that were playing / pausing depending on the stage the story was in, and pause the relevant audio. For example, if the user was on the phone with the scammer and they pressed the pause button, we had to pause the audio of the scammer and not the audio of the bank official. We implemented this by using state variables to store the current state of both the audio files and check which screen the user was on by checking which calling-screen image was currently displayed.

### Contributions

Soumen: Script writing, Audio Editing on Audacity, Coming up with Scam Call Idea.<br/>
Aibar: Script writing, Customer Voice Actor, Audio Editing on Audacity.<br/>
Tarek: Script writing, Scammer Voice Actor, Image Editing on Adobe Photoshop<br/>
Abraiz: Script writing, Bank Official Voice Actor, Coding HTML, CSS, JavaScript. <br/><br/>

<p align="center">
  <img 
    width="500"
    height="350"
    src="https://github.com/Abraiz01/Abraiz01.github.io/blob/main/CommunicationsLab/soundProject/images/blue-bg.jpg"
  >
</p>

## Reflection/Evaluation

In our opinion through "Not a Scam" project we are pushing ourselves creatively by approaching the issue of online scamming in a new and engaging way. We can confidently say that our expectations and goals were met in the process of building the final working version. We were able to fully achieve the set goals of our initial concept and even enhance it with additional features like better UI/UX, more web interaction and better sound effects. Instead of just presenting facts and figures about the problem, we are using a story-based approach to create an emotional connection with the audience. This approach requires creative storytelling techniques that can keep the audience engaged throughout the journey. We had to come up with a compelling story that would not only capture the listener's attention but also make them emotionally invested in the outcome. This involves careful planning, writing, and scripting of the sound piece to create a cohesive and engaging narrative. In addition to storytelling, we are also pushing ourselves creatively by using sound design to create an immersive experience for the listener. This includes creating soundscapes, sound effects, and music that complement the story and help to create a realistic and believable environment. This requires technical expertise and creativity to come up with sounds that accurately reflect the story's setting and atmosphere. We also added a couple of “funny sound elements” which suit the different kinds of atmospheres present in our project. Finally, we designed a site that perfectly aligns with the tone and content of the audio. It allows a user to experience it from a personal perspective which is essential to raising awareness.

<br/>

<p align="center">
  <img 
    width="75"
    height="75"
    src="https://github.com/Abraiz01/Abraiz01.github.io/blob/main/CommunicationsLab/soundProject/images/attend.png"
  >
</p>

