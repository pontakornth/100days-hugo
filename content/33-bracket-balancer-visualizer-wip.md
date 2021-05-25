---
title: Bracket Balancer Visualizer (WIP)
link: https://github.com/pontakornth/bracket-balancer-visualizer
day: 33
date: 2021-05-18
---
I did not complete the project because I started it really late this day. This is a part of data structure
and algorithm learning. This project focused on an abstract data structure called stack.<!--more-->


A stack in computer science is like a stack of clothings or plates. You can add an item to the top of the
stack easily and you can remove the top easily as well. However, removing the middle or the bottom is 
difficult and it is not recommended. One of the most common application of stack is the undo 
feature. The program push the commmand into a stack. If you want to undo thing, the program reverse the
command on the top of the stack and pop it out.


In this program, we can balance the bracket by using stack. The open brackets such as \(, \[, or \{ will be pushed into a stack. If we found the matching close bracket, we pop the latest item out of the stack. If the brackets are not balanced, the causes can be either the top of the stack does not match the following close bracket, or there is a opening bracket in the stack left after all characters are inspected.


I will do the implementation of such method tomorrow.