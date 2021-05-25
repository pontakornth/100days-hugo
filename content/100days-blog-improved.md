---
title: 100 Days Blog Improved
link: https://100days-pontakorn.vercel.app/
day: 5
date: 2021-03-25
---
I don't have much enegy just like the yesterday. I intended to do a coin flip with rotation but
it turns out to be more complicated than I think. I think I can finish it tomorrow or later.
Today, I have a meeting and the application just freeze. I had no idea that it's frozen and I
just wait people to answer my question. 
<!--more-->


Today I implement the navigation of this blog. There is no nested posts so I don't need to worry about nesting. To fetch in TypeScript, I use a bit of hack like this.

```typescript
const day = Number.parseInt(route.params.day)
const project = ((await $content('/')
    .where({ day: { $eq: day } })
    .fetch()) as unknown) as IContentDocument[]
return { project: project[0] }
```

This is not considered a good practice for me. <code class="language-typescript">fetch()</code> returns either array or object in the specification. I tried it and it returned array. I cannot
use `[]` to get the data inside so I need to hack this. The parameter day comes from the file being name `_day`. Nuxt uses file structure for routing. I hope I will have energy to do more complex project.