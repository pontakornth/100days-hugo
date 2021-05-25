---
title: Vue + SWR => Meow CATalog
day: 9
link: https://github.com/pontakornth/meow-catalog
date: 2021-03-31
---
I haven't played with API lately. The last project before this happen is the overengineered dog.
It is an overengineered website just to display images of dogs. This project has different goal
for learning.
<!--more-->


I build this project for learning SWR or stale-while-revalidate. It is a technique that keep the
data fresh but it's acceptable to be stale for a period of time. I am not good at explaining this
thing. So, please read it from. [web.dev](https://web.dev/stale-while-revalidate/).


In Vue.js, I use <code class="language-ts">useSWRV</code> to manage it. SWR is not useful in this
situation. There is no need to refetch the whole data as it changes every request. But, the library is still good for making managing error and loading state easier. SWR would be more useful in the application that need updated data but it's OK to be stale for a period of time such as weather forecast, news, or classroom.