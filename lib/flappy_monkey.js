import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var game = new Game(ctx, canvas);
});
