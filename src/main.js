import { Board } from './Board';
import './styles.css';
import {getRandom} from './Board'
$(document).ready(function() {
  // var c = document.getElementById("myCanvas");
  // var ctx = c.getContext("2d");
  // ctx.beginPath();
  // ctx.canvas.width  = w;
  // ctx.canvas.height = h;
  // for (x=0;x<=w;x+=20) {
  //       for (y=0;y<=h;y+=20) {
  //           ctx.moveTo(x, 0);
  //           ctx.lineTo(x, h);
  //           ctx.stroke();
  //           ctx.moveTo(0, y);
  //           ctx.lineTo(w, y);
  //           ctx.stroke();
  //       }
  //   }
  // ctx.stroke();
  //send user input to backend
  var ra = [1,2,3,4,5,6,7,8,9,11,14];
  // console.log(getRandom(ra) + "\n" + getRandom(ra));

  //alert(getRandom(ra));
  //board size
  //click: findthesquare,

  //represent current board
  //place image in place
  //array of, where, what, turned over or not

  //map: images, and urls

  var myboard = new Board(ra);
  myboard.makeBoard();
  alert(myboard.cardArray);


});
