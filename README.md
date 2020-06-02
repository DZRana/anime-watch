# Anime Watch

A full-stack application that allows the user to create and maintain their own anime watchlist. Users can search for anime, add them to their watchlist, then organize them with a drag-and-drop interface similar to Trello to track what they're currently watching and what they've finished.

Built with: `Postgres`, `Express`, `React`, `Node.js`

[API repo](https://github.com/DZRana/anime-watch-api)

## Live Demo

https://dzrana.github.io/anime-watch/#/

#### Sample:

![Anime Watch Demo](demo/a-w_demo.gif)

## Purpose

#### Overview:

This project was meant to be a more fleshed out full-stack application than my [previous](https://github.com/DZRana/celebrity-likeness/) one. The goal was to build a more complex and interactive front-end, while trying to keep track of user data dictated by their interactions with it.

#### Challenges:

The biggest challenge that came with a more complex front-end was the handling of the back-end, particularly with users' watchlists. With the drag-and-drop interface, I had to come up with a viable way to store the state of the user's watchlist. My initial solution was to call my endpoint to update the watchlist every time the user made any edits to it. After taking into consideration how many actions a user could possibly make to their watchlist in a single session, this solution felt a little naive. What I ended up doing was having the Sign Out button update the user's watchlist, ultimately condensing it down to a single call being made after the user is through making all their edits to it. As for the storage of watchlists in the back-end, I stored the entirety of it as a JSONB data type in `Postgres` as it was simpler than creating different tables for specific parts of it.

Aside from the back-end, experimenting with more involved front-end libraries coupled with state was also a bit of a challenge. I also decided to use `React-Router` this time around as opposed to routing with state which I opted for in my [previous project](https://github.com/DZRana/celebrity-likeness/). If you look closely, you'll notice that I use `HashRouter` instead of `BrowserRouter`. This was needed to host all my routes on `GitHub Pages` as it serves them from a sub-folder.

#### Conclusion:

This was an exercise in creating a more involved full-stack application than my last and learning to handle the challenges that came with it. Planning all of the functionality before-hand cut down on future headaches as I had a clear outline of how the back-end would be built out in relation to the front-end. With the front-end hosted on `GitHub Pages` and the back-end hosted on `Heroku`, I built a full-stack application that I personally use quite often.
