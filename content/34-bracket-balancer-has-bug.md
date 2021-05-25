---
title: Bracket Balancer (Still has a bug)
link:  https://github.com/pontakornth/bracket-balancer-visualizer
day: 34
date: 2021-05-20
---
I almost finish the project except the bug that bug me all time (pun intended).<!--more-->


The project's main features are complete. I finish the animation of stack pushing and popping, displaying the 
position of imbalanced bracket, and resetting button. I cannot finish the pausing animatino feature. I assume
that it is related to how state is updated in Vue 3. I use composition API with ref and reactive. The devtool
is not quite stable yet. It is just in the beta channel.


I wish I will eventually find a way to fix that bug or reimplement the pausing feature. In the worst case,
I might need to reimplement the whole animation system. I hope I can do it.