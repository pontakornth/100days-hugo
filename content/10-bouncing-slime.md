---
title: Bouncing Slime
link: https://codepen.io/pontakornth/pen/VwPpvyx
day: 10
date: 2021-04-01
---
Today, I need to study a lot so I don't really have much time for coding. Coding while
studying is not really a good option anyway because it's distracting. I think a small 
animation would be better than nothing.<!--more-->


The slime is built using CSS height and width. The positioning is important too.
`relative` position is required to set children position to be absolute. Otherwise,
it will be absolute to the nearest element that has position. If there is no such element,
the page will be used to calculate position. For animation, translation is used instead.


Animation will look more natural if you can specify timing function correctly. Linear timing
is used for setting things that move in constant velocity such as a steady moving car. Ease-in
is used when you want animation to slow at the start and fast at the end such as a stone falling. Ease-out is an opposite of ease-in. It is used for responsive-looking animation.
You can actually create custom timing function using `cubic-bezier` but I cannot go in detail.


Source about timing function: [Google](https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing)