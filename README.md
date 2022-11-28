# Social Network

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This application is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. 

The app uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Installation

Make sure you have MongoDB installed and set up on your machine. 

To install Express.js and mongoose, run ```npm i```.

## Usage

To start the server, run ```node index```.

Since the app isn't deployed, in order to see the functionality of the API, you'll need to test routes.

The below routes should be tested:  
 - GET routes: return all users and all thoughts  
 - GET routes: return a single user and a single thought  
 - POST routes: create a user and thought, add a friend and reaction  
 - PUT routes: update a user and thought  
 - DELETE routes: remove a user, thought, friend, and reaction  

 The walkthrough video below shows these routes being tested in Insomnia.  



## Technologies

 - Express.js
 - MongoDB
 - Mongoose ODM


## Credits

[lcfhines](https://github.com/lcfhines)

## License

This application is covered by [MIT License](https://choosealicense.com/licenses/mit/).
