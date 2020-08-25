console.log("Start JS");
console.log("Random color: "+getRandomColor());

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var color1 = document.querySelectorAll("input")[0];
var color2 = document.querySelectorAll("input")[1];
var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var buttonRandom = document.querySelector("button");

buttonRandom.onclick = function() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	changeBackground();
}

//h3.innerHTML="The background is "+color1.value+" and "+color2.value
body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
h3.textContent="The background is "+color1.value+" and "+color2.value;

console.log("color1: "+color1.value+" "+color2.value);

function changeBackground() {
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	h3.textContent="The background is "+color1.value+" and "+color2.value;
	//h3.textContent="The background is "+body.style.background;
}

//color1.addEventListener("input", changeBackground);
//color2.addEventListener("input", changeBackground);

color1.oninput = changeBackground;
color2.oninput = changeBackground;