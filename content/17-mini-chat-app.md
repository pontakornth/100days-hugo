---
title: Mini Chat App (Continued)
day: 17
link: https://github.com/pontakornth/mini-chat-app
date: 2021-04-10
---
Today, I don't really do much. I implemented authentication and make tests about it. It's 
actually not that much. But I think I learn about mocking in JavaScript.<!--more-->


Mocking is a way to "fake" a function to make it easier to test. It likes a fire drill.
The alarm goes off despite there is no fire. No one would think about burning actual
building to make a fire drill unless thery are insane. Mocking is about "if it works, this
thing should be called" or "That should happen after this happen". When I test, I mock 
the authentication detail so the test won't need to get the actual firebase authentication
process. If the email is invalid, the error message should appear. If we successfully login,
the page should redirect. In Python, it is in the standard library called <code class="language-python">unittest</code>. It is called MagicMock. But, in Javascript, it is
from Jest library I use for the testing.