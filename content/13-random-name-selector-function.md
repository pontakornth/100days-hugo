---
title: Random Name Selector (Functionality)
day: 13
link: https://github.com/pontakornth/random-name-selector
date: 2021-04-05
---
Today, I add the functionlities to the random name selector. Because there is no limitation
of the circle, it might random better than wheel of names (**WARNING**: Not tested yet.)
The algorithm is to shuffle the name and iterate in at random interval. I use `for` loop
combined with `setTimeout`.<!--more-->


The project goal is to implement the subset of the wheels of names features. It is considered
deliverable. There is always a room for improvement. I might consider adding saving result,
delete choosen name. I don't really learn something new from this project. But, it is good
for practice concept I already know.


Also, I would like to recommend you to search for exising algorithm before creating a new one.
That algorithm is probably proven before it becomes an answer in Stackoverflow. I use 
Durstenfeld shuffle from the Stackoverflow.

```ts
// Credit to Laurens Holst (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

There is an arguement in the reply section about this answer but I will ignore it for now.
It is random enough for the simple app. If I implement my own shuffling, it might be more
biased unless I know about math and testing enough to remove them.