---
title: Stacking Cards
day: 22
link: https://codepen.io/pontakornth/pen/NWdBWLo
date: 2021-04-16
---
I haven't play with HTML for a very long time since I've left the ELS for good. I was in charge
of the website. But, the other person is actually the one who done most of the code. I am still feel
sorry for him. I do the website in the last generation. This might be the last time I was tweaking
with the advance CSS to acheive the design.<!--more-->


Just like the most CSS art in the codepen. It is not intended to be responsive. I fix the height
and width in pixels so I can work on them easily. CSS Positioning plays important role in this art.

```css
.parent {
    position: relative;
    /* Other css */
}
.children {
    position: absolute;
    /* Other css */
}
```

We can now define the position the position of the children inside the parent manually. Without any
position setup, the children will be at the top-left corner of the parent. Then we can use something
like this

```css
.children {
    position: absolute;
    top: 20px; /* 20px away from the top */
    left: 20px; /* 20px away from the left */
}
```

I use iteration in Stylus to reduce duplication about stacking position. Last but not least, the 
z-index is a property to define how "top" of the element. It is used like this

```css
/* Assume these elements already have children class */
.children-1 {
    z-index: 1;   
}
.children-2 {
    z-index: 2; /* This element will stack over the lower z-index one */
}