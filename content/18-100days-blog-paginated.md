---
title: 100 Days Blog Paginated
link: https://100days-pontakorn.vercel.app/
day: 18
date: 2021-04-11
---
The Mini App Chat is still under development. I just want to make a new improvement of this
blog. Because the totals projects goes 10+, I don't think having everything in 1 page would
be wise. So I decide to paginate them.<!--more-->


Pagination is not simple as I thought. Nuxt content does not support pagination by default.
But, it can be implemented using `limit` and `skip`. `limit` limits how many projects can
be in one page. `skip` tells how many projects you need to skip to start the pagination.
I didn't come up with this solution myself but I use [their solution](https://redfern.dev/articles/adding-pagination-nuxt-content-blog/) (I don't know author's pronoun.). I need
to modify the variable names to fit in my project.  I think it is for today.