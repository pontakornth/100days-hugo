---
title: Sort Visualizer but it is a Discord bot
link: https://github.com/pontakornth/algorithm-bot
day: 32
date: 2021-05-17
---
You expect another web but it was me. Kono Discord Bot Da!!<!--more-->


Instead of a web, I make a Discord bot instead. I haven't use Python for anything more than studying.
Also, I need to use Python for further studying into algorithm anyway. The library that I use to generate
image is called Pillow, which is a fork of PIL. Pillow and JavaScript canvas works differently. So, I
port the easy to implement such as bubble sort and selection sort first. Pillow works on a file-like
object so I can use <code class="language-python">io.BytesIO</code> to simulate it in memory. It cannot
store large file for obvious reason.


I apply a design pattern similar to command pattern that I used in Computer Programming class. I am
happy that I can apply the knowledge in the classroom into the "real" project. I wish I can do something
like this more.