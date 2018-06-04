var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var random = document.querySelector("#random");
var body = document.querySelector("body");

function setBGColor()
{
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function generateColor()
{
	var red1 = Math.floor(Math.random() * 256);
	var green1 = Math.floor(Math.random() * 256);
	var blue1 = Math.floor(Math.random() * 256);
	var rgb1 = rgbToHex(red1, green1, blue1);

	var red2 = Math.floor(Math.random() * 256);
	var green2 = Math.floor(Math.random() * 256);
	var blue2 = Math.floor(Math.random() * 256);
	var rgb2 = rgbToHex(red2, green2, blue2);

	color1.value=rgb1;
	color2.value=rgb2;

	setBGColor();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

color1.addEventListener("input", setBGColor);
color2.addEventListener("input", setBGColor);
random.addEventListener("click", generateColor);

setBGColor();