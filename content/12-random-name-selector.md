---
title: Random Name Selector (Layout)
day: 12
link: https://github.com/pontakornth/random-name-selector
date: 2021-04-04
---
Yesterday, I was on vacation. Even I took my computer with me, there is not enough
time for 100 days challenge. So, I do it today. This project is similar to the
wheel of names that my professor use for asking question randomly. I want to implement
a subset of its features.<!--more-->


Because I am a terrible designer, I have to make it as minimal as possible. I move the
text editor in the modal. The modal need to be in absolute position in the body element
to make it work. I use Vue teleport to move the component into the body tag. I learn how
to make a modal from the W3School and I adapt it for WindiCSS. Currently, the only complete
thing is the layout. I will add functionality ASAP.


There is a bug in the website where I rely on Nuxt `date`. It will display same date
because the files are being replaced. I hope I will get to fix it soon.