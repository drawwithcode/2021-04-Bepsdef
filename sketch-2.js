let richard;
let myTitle;
let myButton;
let myButton2;
let iterator = 0;

//myButton position

var x = 250;
var y = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //upload video
  richard = createVideo(["assets/richard.mp4"]);
  richard.hide();

  myButton = createElement("button", "click to stop the music");
  myButton.position(x, y);
  //when mouse is over myButton, run the random Location function
  myButton.mouseOver(randomLocation);

  myButton2 = createElement("button", "ehi click me I m the good one");

  myButton2.mouseClicked(function () {
    window.open("https://www.youtube.com/watch?v=ifWqe3o3O3U");
  });
}

//the position of the mouse changes so you cant click it
function randomLocation() {
  x = random(windowWidth);
  y = random(windowHeight);
  myButton.position(x, y);
}

function draw() {
  background("red");

  //richard moves randomly and with the mouse
  let xr = noise((iterator + 1 * iterator) / 100) * windowWidth;
  let yr = noise((iterator - 15 * iterator) / 300) * windowHeight;

  image(richard, xr, yr);
  image(richard, mouseX, yr);
  image(richard, xr, mouseY);

  //myButton2 moves randomly
  iterator = iterator + 0.25;
  let x1 = noise((iterator + 15 * iterator) / 500) * windowWidth;
  let y1 = noise((iterator - 15 * iterator) / 300) * windowHeight;
  myButton2.position(x1, y1);

  textSize(100);
  text("click everywhere to enjoy", 30, 100);
}

function mousePressed() {
  richard.loop();
}
