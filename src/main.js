let food=undefined;
let numberOfRows=60;
let numberOfCols=120;
let score=0;
let animator=undefined;


const animateSnake=function() {
  let oldHead=game.getSnake().getHead();
  let oldTail=game.getSnake().move();
  let head=game.getSnake().getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if(head.isSameCoordAs(food)) {
    game.increaseScore()
    game.getSnake().grow();
    createFood(numberOfRows,numberOfCols);
    drawFood(food);
  }
  displayScore(game.getScore());
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      game.getSnake().turnLeft();
      break;
    case "KeyD":
      game.getSnake().turnRight();
      break;
    case "KeyC":
      game.getSnake().grow();
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
  return new Snake(head,body);
}

let snake = createSnake();
const game = new Game(snake,numberOfRows,numberOfCols);

const startGame=function() {
  drawGrids(game.getNoOfRows(),game.getNoOfCols());
  drawSnake(game.getSnake());
  createFood(game.getNoOfRows(),game.getNoOfCols());
  drawFood(food);
  addKeyListener();
  animator=setInterval(animateSnake,140);
}


window.onload=startGame;
