function splitCode(){
	var canvas = document.getElementById("mycanvas");
	var sketch = function(processing) {
		/* @pjs preload="1.png"; */
		var x = 0; 
		var y = 0;
		var bg;
		//
		processing.setup = function() {
			processing.size(470, 470);
			bg = processing.loadImage("1.png");
		};

		processing.draw = function() {
			//processing.image(bg,0,0);
			//processing.size(470, 470);
			//processing.background(255, 204, 0);
			processing.background(bg);
			//processing.fill(255);
			//processing.rect(x,y,200,200);
		};
	};
	var myp5 = new Processing(canvas, sketch);
}