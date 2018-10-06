import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  document.getElementById("start").addEventListener("click", ()=>{
     var game = new Game(ctx, canvas);
  })
});
