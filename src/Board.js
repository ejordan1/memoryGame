export function Board(cardArray) {
  //take in user input, do calculations, update database
  this.cardArray = cardArray;
}

Board.prototype.makeBoard = function () {
  var cloneArray = this.cardArray.concat(this.cardArray);
  this.cardArray = getRandom(cloneArray);

};

export function getRandom(array){
  var cloneArray = array.splice("");
  var ra = [];
  while(cloneArray.length > 0){
    debugger;
    var randy = Math.floor(Math.random() * cloneArray.length);
    ra.push(cloneArray[randy]);
    cloneArray.splice(randy, 1);
  }
  return ra;
}


//board: returns true if change: randomly place images in the board, if returns false: means you clicked on something that would have no effect

//updateForSquare

//card object, image, turn over or not

//check match: are images equal

//when you click, checks the board array: cards, sees if one is turned over already, checks if they are equal,

//getBoard

//
