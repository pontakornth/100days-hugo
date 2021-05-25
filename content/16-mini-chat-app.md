---
title: Mini Chat App (Setup and Test)
day: 16
link: https://github.com/pontakornth/mini-chat-app
date: 2021-04-09
---
After I already partially designed the chat app, I begin to work on this project. I use Next.js
because I want to learn about Recoil state management. The state is going to be used across 
components so I think it is a perfect job for new library.<!--more-->


I use Chakra UI not Tailwind because I want to focus more on the implementation not styling.
Also, the test-driven development is used here. Test-driven development is a way to develop
a software by making tests, fail tests, make it pass, and then refactor. TDD required developers to design about its behavior before creating a software because you need to test
if it does things as expected. For example, you would expect an error message if you type 
E-mail wrong. You create a test that expect that action but not implement it yet. The test
failed. You make the program be able to validate the email. It passed the test. You refactor
to make code better and test it again and again. It is an oversimplified description of TDD.


In TDD, I use React testing library because the library test things by imiatate how user
would use it. It is combined with Jest, the testing framework for JavaScript. I hope
you enjoy reading and testing.