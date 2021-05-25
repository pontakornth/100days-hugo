---
title: Mini Chat App (Chat Room)
day: 20
link: https://github.com/pontakornth/mini-chat-app
date: 2021-04-13
---
This is a retrospective update because I am mistaken that I already upload the content.
That day, I add a feature to validate chat room number. It will contain 6 numeral digits
because I think it is easy to remember for a mini chat app.<!--more-->


Regular expression is one of the topics that I always have to search with Google. I do
remember basic stuffs such as starting and ending characters. It is a universally 
accepted way to detect some pattern on a string. That is why it is called regular 
expression. Regular expression is built into JavaScript. It can be used like this
<code class="language-ts">/regular$/i</code>. It is a regular expression that will match
string that have the word "regular" at the end of a line. The letter "i" at the end means
it is case-insensitive. REGULAR, regular, REgular are the same in this pattern.