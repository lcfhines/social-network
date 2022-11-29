# Social Network

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This application is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. 

The app uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo: Users](#users)
- [Demo: Thoughts](#thoughts)
- [Demo: Reactions](#reactions)
- [Demo: Friends](#friends)
- [Credits](#credits)
- [License](#license)

## Installation

Make sure you have MongoDB installed and set up on your machine. 

To install Express.js and mongoose, run ```npm i```.

## Usage

To start the server, run ```node index```.

Since the app isn't deployed, in order to see the functionality of the API, you'll need to test routes.

The following routes should be tested:  
 - GET routes: return all users and all thoughts  
 - GET routes: return a single user and a single thought  
 - POST routes: create a user and thought, add a friend and reaction  
 - PUT routes: update a user and thought  
 - DELETE routes: remove a user, thought, friend, and reaction  

 The walkthrough videos below show these routes being tested in Insomnia.

 ### Users
 This video shows starting the application's server, navigating to Insomnia and finding all users, creating a user, finding a single user, updating a user, and deleting a user.

https://user-images.githubusercontent.com/113798073/204405140-3e4454da-29e1-43dc-bb09-dddf64d4bffb.mp4

 This video demonstrates that when a user is deleted, their associated thoughts are also deleted. 

https://user-images.githubusercontent.com/113798073/204405182-5dc4ab3c-e5fd-4f89-a517-cf075dbc174d.mp4

 ### Thoughts
 This video shows finding all thoughts, creating a thought, finding a single thought, updating a thought, and deleting a thought.

https://user-images.githubusercontent.com/113798073/204405218-4f30d7cb-32d4-4f34-8e16-d21a65d44829.mp4

 ### Reactions
 This video shows creating a reaction to a thought and deleting a reaction.

https://user-images.githubusercontent.com/113798073/204405246-12b11e34-f8ff-48fa-919b-c7591420f811.mp4

 ### Friends
 This video shows adding a friend to a user's friend list and remove a friend from a user's friend list.

https://user-images.githubusercontent.com/113798073/204405259-e098b370-f051-49e6-8a5c-fe0dfce0f2f8.mp4

## Technologies

 - Express.js
 - MongoDB
 - Mongoose ODM


## Credits

[lcfhines](https://github.com/lcfhines)

## License

This application is covered by [MIT License](https://choosealicense.com/licenses/mit/).
