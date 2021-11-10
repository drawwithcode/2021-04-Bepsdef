const urlString = window.location.href;
let url = new URL(urlString);
console.log(urlString);

let myButton3;

function setup() {
  myButton3 = createElement("button", "hey");
  myButton3.position(100, 100);

  myButton3.mouseClicked(function () {
    window.open(url + "second-page.html", "_self");
  });
}
