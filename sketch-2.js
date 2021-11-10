let richard;
let myTitle;
let myButton;
let myButton2;
let iterator = 0;

var x = 250;
var y = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
  richard = createVideo(["assets/richard.mp4"]);
  richard.hide();

  myButton = createElement("button", "click to stop the music");
  myButton.position(x, y);

  myButton.mouseOver(randomLocation);

  myButton2 = createElement("button", "ehi click me I m the good one");

  myButton2.mouseClicked(function () {
    window.open("https://www.youtube.com/watch?v=ifWqe3o3O3U");
  });
}

function randomLocation() {
  x = random(windowWidth);
  y = random(windowHeight);
  myButton.position(x, y);
}

function draw() {
  background("red");

  let xr = noise((iterator + 1 * iterator) / 100) * windowWidth;
  let yr = noise((iterator - 15 * iterator) / 300) * windowHeight;

  image(richard, xr, yr);
  image(richard, xr, yr);
  image(richard, xr, yr);
  image(richard, xr, yr);

  iterator = iterator + 0.25;
  let x1 = noise((iterator + 15 * iterator) / 500) * windowWidth;
  let y1 = noise((iterator - 15 * iterator) / 300) * windowHeight;
  myButton2.position(x1, y1);

  textSize(100);
  text("click to enjoy", 30, 100);
}

function mousePressed() {
  richard.loop();
}
