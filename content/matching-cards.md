---
title: Matching Cards
link: https://github.com/pontakornth/matching-card
day: 3
date: 2021-03-23
---
Currently there is no live demo at the time I post this. I don't think that it's worth
creating another domain (obviously on [vercel.com](https://vercel.com)) just to host a simple project like this.
<!--more-->

I learned Vue composition API with this project. It's quite difficult to setup but it's worth
if your app is going to be composed of resuable modules. I can encapsulate the game algorithm in the <code class="language-js">useXXX</code> similar to the React hook. It doesn't work the same but it's similar for me. The downside is about the array. It cannot be set directly. So, I make it a children of another <code class="language-js">reactive</code> property. Then, I use <code class="language-js">computed</code> to make it look like normal array. It's a bit hacky.

Yesterday, there is no syntax hightlighting in this blog. It should be present in this article now.

```js
computed()
```