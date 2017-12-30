let food=undefined;
let numberOfRows=60;
let numberOfCols=120;
let score=0;
let animator=undefined;


const animateSnake=function() {
  let details=game.move();
  paintBody(details.oldHead);
  unpaintSnake(details.oldTail);
  paintHead(details.head);
  if(game.hasSnakeEatenFood()) {
    game.increaseScore()
    game.grow();
    game.createFood();
    drawFood(game.getFood());
  }
  displayScore(game.getScore());
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      game.turnLeft();
      break;
    case "KeyD":
      game.turnRight();
      break;
    case "KeyC":
      game.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  snake=new Snake(head,body);
  game.addSnake(snake);
}

const createGame=function() {
  let topLeft=new Position(0,0,"east");
  let bottomRight=new Position(numberOfCols,numberOfRows,"east");
  game=new Game(topLeft,bottomRight,0);
}

const startGame=function() {
  createGame();
  createSnake();
  drawGrids(game.getNoOfRows(),game.getNoOfCols());
  drawSnake(game.getSnake());
  game.createFood();
  drawFood(game.getFood());
  addKeyListener();
  animator=setInterval(animateSnake,140);
}


window.onload=startGame;
