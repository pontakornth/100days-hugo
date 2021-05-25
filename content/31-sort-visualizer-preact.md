---
title: Sort Visualizer but in Preact
link: https://pontakornth.github.io/sort-visualizer-preact/
day: 31
date: 2021-05-15
---
This is the same project I created using vanilla js two day ago. However, I add more algorithm and
make length customization.<!--more-->


The porting process is tedious but not a headache. I tried to use React state to implement the queue but
it does not work the way I intended. Why? Because <code class="language-javascript">setState</code> is 
async by default. It means it will batch the update process. You cannot receive new value immediately
after calling statei change. It queue the process and you need to wait for it to complete or use callback.
This behavior is to prevent synchronously update large state and freeze the site.


I added merge sort and quick sort using the code I found on the tutorial site with some adaptation. 
The merge sort code is somehow incorrect and I need to correct it. There is a bug when using 32 items
sort. The highest bar appears to be floating.