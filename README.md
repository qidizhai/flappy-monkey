# flappy-monkey
[Live](https://qidizhai.github.io/flappy-monkey/)

## Background
![alt text](https://github.com/qidizhai/flappy-monkey/blob/master/monkeysurfing.png "Logo Title Text 1")
Flappy monkey is a classic example of the concept of flappy bird. There are several pipes along the way, the goal is to let monkey pass the pipes as many as possible.

## Functionality & MVP

With this Flappy monkey's simulator, users are able to
1. Start, reset the game board
2. Check the scores

In addition, this project includes:
1. An About modal describing the background and rules of the game
2. A production README
3. Links to the github, Live demo, LinkedIn


## Architecture and Technologies:
This project is implemented with the following technologies:
1: JavaScript for game logic
2: Canvas for animation

## Feature Highlights:
### Control Schemes and Key Handlers
Flappy monkey uses the keymaster.js library to link key presses and game activity. Keymaster exposes one method called 'key', which takes a key and a callback method as arguments, which can be mapped to any press of that key.
![alt text](https://github.com/qidizhai/flappy-monkey/blob/master/keyhandler.png "Logo Title Text 1")

### Pipes Generation
Pipes are generated at the right side of the canvas every time. Math.random() has been used for randomizing the gap between each pipes and the height of pipes.
![alt text](https://github.com/qidizhai/flappy-monkey/blob/master/pipes.png "Logo Title Text 1")
