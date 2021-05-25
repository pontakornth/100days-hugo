---
title: Sort Visualizer with Vanilla JS
link: https://github.com/pontakornth/sort-visualizer-vanilla/
day: 30
date: 2021-05-13
---
After the previous project that only has insertion sort, I created a visualizer with 3 alogrithms. <!--more-->
You can find the live demo here [https://github.com/pontakornth/sort-visualizer-vanilla/](https://github.com/pontakornth/sort-visualizer-vanilla/) .


I use vanilla javascript this time because it is not complex enough to use React or Vue. I use same old
canvas API but with refactoring and optimization. Those 3 algorithms have O(n^2)  complexity. They are
not the most efficient one to use. The quick sort is preferred and it is implemented as the standard 
sorting algorithm.


I use Normalize.css to make the style sane enough to display same thing in different browser. I did not 
test on Chromium-based browser yet but I am pretty sure that it will have same or very similar display. I
wish to add more alogorithm and customization in the future sort visualizer.