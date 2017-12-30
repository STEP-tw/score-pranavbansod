const Game = function(snake,rows,cols) {
  this.score = 0;
  this.rows = rows;
  this.cols = cols;
  this.snake = snake;
}

Game.prototype.increaseScore = function () {
  this.score += 10;
};

Game.prototype.getScore = function() {
  return this.score;
};

Game.prototype.getSnake = function() {
  return this.snake;
};

Game.prototype.getNoOfRows = function() {
  return this.rows;
}

Game.prototype.getNoOfCols = function() {
  return this.cols;
}
