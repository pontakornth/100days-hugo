---
title: DEV Mirror (Improvement)
day: 25
link: github.com/pontakornth/dev-mirror
date: 2021-04-20
---
While most of the MVP features are finished on day 24, there are some improvement I can make<!--more-->


The DEV API allow me to query in a page. I can set a limit and they will do the pagination for me.
I just need to specify it in the request. In this project, I use 10 items per page and allowing max
of 10 pages. Thankfully, the `useSWRV` can have dynamic url as a key. I need to specify key as a
function and it will do the monitoring for me. It is similar to the `useEffect` in React.


Because there are sometimes between loading and showing content. Users may think that the loading
is too slow if there is nothing to show them. I use the skeleton techniques just like the cat API
project. The data can be cached easier this time because of the predictability of the DEV content.
The content may load from cache instead.


I also add the tag features. The tag will link to the DEV website showing articles with same tag.
All links will be opened in the new tab because it is easier to get lost when the page change. I 
add the Barlow font to the project as well. It turns out that I cannot import CSS directly in Vite.
But, there is a plugin for it. Remember if you are stuck, there may be someone with the same problem
and create a solution for you. If there is no one, you might be the first one to create such solution.