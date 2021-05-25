---
title: Ruby Discord Bot
day: 26
link: https://github.com/pontakornth/ruby-discord-bot
date: 2021-04-21
---
I created a Discord bot with Ruby instead of JavaScript or Python just to see how it would work.
It's very interesting.<!--more-->


Ruby is a programming language similar to the Python. It is more dynamic that Python but saner
than JavaScript (Ruby has actual int and float while JavaScript does not have the actual number.)
Ruby language aims at the developer happiness for development. The syntax is expressive. One
of the most famous application of Ruby is Ruby on Rails.


I use Discordrb to implement a bot with Ruby. Its dynamic nature makes intellisense difficult
to the point that I used RubyMine instead of my beloved VSCode. I can't really find a sane way
to do autocomplete and type hinting in Ruby. Unlike Python, Ruby variable name can conflict with
existing name. Ruby use import string path without namespace (like `http.get`). But, it can
be avoided using module.


```ruby
module Bot
 require 'discordrb'
 bot = Discordrb::Commands::CommandBot(token: "insert token", prefix: "insert prefix")

 bot.command :nice do |event|
   'Nice'
 end

 bot.run
end
```

As you can see, the syntax is weird but expressive. It would be nice to implement things in Ruby.
However, the Ruby libraries outside of web development (Rails) are not as plenty as other languages.
You may need to write more code than you do in other languages. Its dynamic nature make it harder
to debug. If your project is small to medium, Ruby is a great choice.