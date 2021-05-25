---
title: Mini Chat App (Authentication)
day: 19
link: https://github.com/pontakornth/mini-chat-app
date: 2021-04-12
---
I am back to the mini chat app now. I discovered that some of the test is not properly done.
So, I modified and add authentication logic.<!--more-->


Firebase authentication is one of the way to authenticate people without writing your own 
authentication logic. I used to write Django app and I found that if I need to write 
it myself. I have to setup tons of things. So, I gave up. But, we have Firebase today.
It is easier to do authentication, authorization, hosting, and storing data with it.
I use Firebase authentication and realtime database in this project because they are
only part I need to use.


Firebase integration with TypeScript is not really good. I found that some part of my app
become `any` type. This behavior is undesired because it defeats type safety. I could use
ReasonML if there is library that have concrete documentation and community.
