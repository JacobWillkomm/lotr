# Lord of the Rings Anywhere

# Introduction
Lord of the Rings Anywhere is inspired by browser extensions like Dictionary anywhere, and necessitated by references to character names in forums and reddit comments. The dictionary extensions allow users to double-click on a word, and a definition will appear without needing to leave the page. Lord of the Rings Anywhere will add similar functionality to the browser that provides a brief biography when a name from J. R. R. Tolkien’s work is double-clicked. 

# How It's Made:
**Tech used:** HTML, CSS, JavaScript
As this functionality will eventually live inside of a browser extension, JavaScript does the heavy lifting.

# Packages/Dependencies used

Browserify, fuzzysort, underscore.string

# Lessons Learned

I wanted to implement a fuzzy-search for character names, as character names are frequently misspelled in comments. Fuzzy-searches are a form of approximate string matching, and there are many node packages that implement some form of fuzzy-search. Because these are node packages and we are trying to use them as regular JavaScript in the browser, and package bundler like Browserify is required.

# Current Roadblocks and Future Optimizations

While fuzzy-searching helps solve the problem of slightly misspelled names, it highlights another issue, Tolkien’s work spans centuries in-universe and names are often reused, so getting the most relevant character is important as well. For example, searching for just Bilbo returns “Bilbo Gamgee” before “Bilbo Baggins,” and searching for Aragorn returns “Aragorn I” before the Aragorn we see in the trilogy, “Aragorn II Elessar.” 

In a slightly separate issue, characters go by shortened forms of their names, the hobbits Merry and Pippin are actually named, Meriadoc and Peregrin respectively, so the fuzzy searching on formal names alone will not solve all of our problems
