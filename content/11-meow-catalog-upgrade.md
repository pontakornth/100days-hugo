---
title: Meow Catalog Upgrade
day: 11
link: https://github.com/pontakornth/meow-catalog
date: 2021-04-02
---
I blog this a bit early because I have to travel tomorrow. It is an upgrade to current Meow
CATalog. I add selecting breed feature and skeleton loading.<!--more-->


Selecting a breed is a feature provided by TheCatApi for anyone with API key. Because it is
dynamic. I am forced to change my code to adapt it. Turn out that I need to set the API key
in the fetcher in order to make SWRV dynamic. I also add a bit more code so I can fetch breed
from the cat api. The select element is a standalone so I don't need a form element to wrap it
as it automatically change the request when the value changed. In the future, I might consider
add better styling and refactor it.


Also I add the skeleton loading. The skeleton loading is a technique to display a "skeleton" 
component to make it feel faster. For example, when you use Facebook app, you might notice a
block of gray color before the actual content is loaded. Because TheCatApi is fast, you might
not notice any change. WindiCSS's custom attribute is really useful here. I can set the height
of the skeleton to be whatever I want without writing CSS code. I just need to provide the 
class according to the semantic. This feature is also available in Tailwind JIT.