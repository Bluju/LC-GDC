window.onload = function() {
	canvas = document.getElementById("canvas");	
	ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	//document.addEventListener('keydown', keydown);
	//document.addEventListener('keyup', keyup);
	setInterval(main, 100/6);
}

function main() {}
