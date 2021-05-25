---
title: Responsive Navbar
link: https://codepen.io/pontakornth/pen/LYxjyPB
day: 14
date: 2021-04-06
---
This one is a small project to practice what I already know about. I don't implement a responsive navbar anywhere. My personal blog has only 3 navigation link and a webring.
It is not needed much. But, some websites have lots of functionalities. There are so many
links to be navigated. Responsive navbar is a must because mobile cannnot render all links
in the same line.<!--more-->


I use media query to accomplish the responsive part. Because the navbar is so small, so I use
[Alpine.js](https://github.com/alpinejs/alpine) to make it interactive. I believe that there is
a pure CSS implementation too but I just use JavaScript. Alpine.js is so light. It can be used
just like how jQuery is used. Because it does not have convienent way to communicate with other
components. It is more suited for a small part of interactive interface such as a dropdown, tooltips.


Also I use Pug in the template because I want to save keystroke for HTML. With Pug, you don't need to close HTML tag, or write a long nested HTML. You only need indents to accomplish same task. Also Pug provides condition and loop, making it suitable for server-side web application.
You might not see Pug often because the web turns to SPA or SSR with frontend framework. Pug
is useful for static site generation without any frontend framework such as Eleventy.