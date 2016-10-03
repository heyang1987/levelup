function submitenter(myfield, e)
    {
        var keycode;
        if (window.event) keycode = window.event.keyCode;
        else if (e) keycode = e.which;
        else return true;

        if (keycode == 13)
        {
            readInput(myfield);
            return false;
        }
        else
            return true;
    }
function splitCode(textareaID){
	var code = document.getElementById(textareaID).value.split("\n");
	var i = 0;
	selectTextareaLine(document.getElementById(textareaID), 1);
	loopArray(code, i);

}
function loopArray(arr, i){
	displayCode(arr[i], i, function(){
		i++;
		if(i < arr.length + 1){
			
			selectTextareaLine(code,i+1);
			loopArray(arr, i);
			
			
		}
	});		
}

var variables = new Array(3);
var othervariables = new Array(21);

function displayCode(stuff, i, callback){
	var code = stuff;
    
	if (code.indexOf("cin >>") != -1) {
		var newcode = code.replace('cin >>', '').replace(';', '');
		newcode = newcode.toLowerCase();
		if (newcode.indexOf("=") != -1) {
			substring = newcode.substr(newcode.indexOf("="), newcode.length);
			prevsubstring = newcode.substr(newcode[0], newcode.indexOf("="));
			
			if (substring.search(/[A]/gi) != -1) {
				var a = variables[0];
				substring = substring.replace(/a/gi, '' + a);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[B]/gi) != -1) {
				var b = variables[1];
				substring = substring.replace(/b/gi, '' + b);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[C]/gi) != -1) {
				var c = variables[2];
				substring = substring.replace(/c/gi, '' + c);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[D]/gi) != -1) {
				var d = variables[3];
				substring = substring.replace(/d/gi, '' + d);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[E]/gi) != -1) {
				var e = othervariables[0];
				substring = substring.replace(/e/gi, '' + e);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[F]/gi) != -1) {
				var f = othervariables[1];
				substring = substring.replace(/f/gi, '' + f);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[G]/gi) != -1) {
				var g = othervariables[2];
				substring = substring.replace(/g/gi, '' + g);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[H]/gi) != -1) {
				var h = othervariables[3];
				substring = substring.replace(/h/gi, '' + h);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[I]/gi) != -1) {
				var i = othervariables[4];
				substring = substring.replace(/i/gi, '' + i);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[J]/gi) != -1) {
				var j = othervariables[5];
				substring = substring.replace(/j/gi, '' + j);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[K]/gi) != -1) {
				var k = othervariables[6];
				substring = substring.replace(/k/gi, '' + k);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[L]/gi) != -1) {
				var l = othervariables[7];
				substring = substring.replace(/l/gi, '' + l);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[M]/gi) != -1) {
				var m = othervariables[8];
				substring = substring.replace(/m/gi, '' + m);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[N]/gi) != -1) {
				var n = othervariables[9];
				substring = substring.replace(/n/gi, '' + n);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[O]/gi) != -1) {
				var o = othervariables[10];
				substring = substring.replace(/o/gi, '' + o);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[P]/gi) != -1) {
				var p = othervariables[11];
				substring = substring.replace(/p/gi, '' + p);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[Q]/gi) != -1) {
				var q = othervariables[12];
				substring = substring.replace(/q/gi, '' + q);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[R]/gi) != -1) {
				var r = othervariables[13];
				substring = substring.replace(/r/gi, '' + r);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[S]/gi) != -1) {
				var s = othervariables[14];
				substring = substring.replace(/s/gi, '' + s);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[T]/gi) != -1) {
				var t = othervariables[15];
				substring = substring.replace(/t/gi, '' + t);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[U]/gi) != -1) {
				var u = othervariables[16];
				substring = substring.replace(/u/gi, '' + u);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[V]/gi) != -1) {
				var v = othervariables[17];
				substring = substring.replace(/v/gi, '' + v);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[W]/gi) != -1) {
				var w = othervariables[18];
				substring = substring.replace(/w/gi, '' + w);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[X]/gi) != -1) {
				var x = othervariables[19];
				substring = substring.replace(/x/gi, '' + x);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[Y]/gi) != -1) {
				var y = othervariables[20];
				substring = substring.replace(/y/gi, '' + y);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[Z]/gi) != -1) {
				var z = othervariables[21];
				substring = substring.replace(/z/gi, '' + z);
				newcode = prevsubstring + substring;
			}
		
		if (prevsubstring.toLowerCase().indexOf("a") != -1) {
			var obj = document.getElementById("registerA");
			newcode = newcode.replace("a = ", '').replace("a=", '');
			var eq = owenge.equation.parse('' + newcode);
			variables[0] = eq.answer;
			obj.value =  " "
			codeSparks("a",function(){
				obj.value = eq.answer;
				
			});
			var canvasCodeA = document.getElementById("mycanvas");
			var sketchCodeA = function(processing) {
				/* @pjs preload="Circuit_Board.png"; */
				var x = 565; 
				var y = 120;
				var bg;
				var speed = 2;
				//
				processing.setup = function() {
					processing.size(1920, 1080);
					bg = processing.loadImage("Circuit_Board.png");
				};

				processing.draw = function() {
					if (x < 690){
						x = x + speed;
					}
					else if ( y < 200) {
						y = y + speed;
					}
					if ( (x>690)&&(y>200)){
						processing.noLoop();
					}
					processing.background(bg);
					processing.stroke(0);
					processing.fill(255,0,0);
					processing.ellipse(x,y,10,10);
				};
			};
			var CodeA = new Processing(canvasCodeA, sketchCodeA);
			// CodeA.exit();
			setTimeout(function(){callback()}, 2000);
			}
		
		
		if (prevsubstring.toLowerCase().indexOf("b") != -1) {
			var obj = document.getElementById("registerB");
			newcode = newcode.replace("b = ", '').replace("b=", '');
			var eq = owenge.equation.parse('' + newcode);
			variables[1] = eq.answer;
			obj.value =  " "
			codeSparks("b",function(){
				obj.value = eq.answer;
				
				
			});
			var canvasCodeB = document.getElementById("mycanvas");
			var sketchCodeB = function(processing) {
				/* @pjs preload="Circuit_Board.png"; */
				var x = 565; 
				var y = 120;
				var bg;
				var speed = 3;
				//
				processing.setup = function() {
					processing.size(1920, 1080);
					bg = processing.loadImage("Circuit_Board.png");
				};

				processing.draw = function() {
					if (x < 845){
						x = x + speed;
					}
					else if ( y < 200) {
						y = y + speed;
					}
					if ( (x>845)&&(y>200)){
						processing.noLoop();
					}
					processing.background(bg);
					processing.stroke(0);
					processing.fill(255,0,0);
					processing.ellipse(x,y,10,10);
				};
			};
			var CodeB = new Processing(canvasCodeB, sketchCodeB);
			// CodeB.exit();
			setTimeout(function(){callback()}, 2000);
		}

		if (prevsubstring.toLowerCase().indexOf("c") != -1) {
			var obj = document.getElementById("registerC");
			newcode = newcode.replace("c = ", '').replace("c=", '');
			var eq = owenge.equation.parse('' + newcode);
			variables[2] = eq.answer;
			obj.value =  " "
			codeSparks("c",function(){
				obj.value = eq.answer;
				
				
			});
			var canvasCodeC = document.getElementById("mycanvas");
			var sketchCodeC = function(processing) {
				/* @pjs preload="Circuit_Board.png"; */
				var x = 565; 
				var y = 120;
				var bg;
				var speed = 4.5;
				//
				processing.setup = function() {
					processing.size(1920, 1080);
					bg = processing.loadImage("Circuit_Board.png");
				};

				processing.draw = function() {
					if (x < 1000){
						x = x + speed;
					}
					else if ( y < 200) {
						y = y + speed;
					}
					if ( (x>1000)&&(y>200)){
						processing.noLoop();
					}
					processing.background(bg);
					processing.stroke(0);
					processing.fill(255,0,0);
					processing.ellipse(x,y,10,10);
				};
			};
			var CodeC = new Processing(canvasCodeC, sketchCodeC);
			// CodeC.exit();
			setTimeout(function(){callback()}, 2000);	
		}
		if (prevsubstring.toLowerCase().indexOf("d") != -1) {
			var obj = document.getElementById("registerD");
			newcode = newcode.replace("d = ", '').replace("d=", '');
			var eq = owenge.equation.parse('' + newcode);
			variables[3] = eq.answer;
			obj.value =  " "
			codeSparks("d",function(){
				obj.value = eq.answer;
				
				
			});
			var canvasCodeD = document.getElementById("mycanvas");
			var sketchCodeD = function(processing) {
				/* @pjs preload="Circuit_Board.png"; */
				var x = 565; 
				var y = 120;
				var bg;
				var speed = 6;
				//
				processing.setup = function() {
					processing.size(1920, 1080);
					bg = processing.loadImage("Circuit_Board.png");
				};

				processing.draw = function() {
					if (x < 1155){
						x = x + speed;
					}
					else if ( y < 200) {
						y = y + speed;
					}
					if ( (x>1155)&&(y>200)){
						processing.noLoop();
					}
					processing.background(bg);
					processing.stroke(0);
					processing.fill(255,0,0);
					processing.ellipse(x,y,10,10);
				};
			};
			var CodeD = new Processing(canvasCodeD, sketchCodeD);
			// CodeD.exit();
			setTimeout(function(){callback()}, 2000);	
		}
		
		if (prevsubstring.toLowerCase().indexOf("e") != -1) {
			newcode = newcode.replace("e = ", '').replace("e=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[0] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("f") != -1) {
			newcode = newcode.replace("f = ", '').replace("f=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[1] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("g") != -1) {
			newcode = newcode.replace("g = ", '').replace("g=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[2] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("h") != -1) {
			newcode = newcode.replace("h = ", '').replace("h=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[3] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("i") != -1) {
			newcode = newcode.replace("i = ", '').replace("i=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[4] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("j") != -1) {
			newcode = newcode.replace("j = ", '').replace("j=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[5] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("k") != -1) {
			newcode = newcode.replace("k = ", '').replace("k=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[6] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("l") != -1) {
			newcode = newcode.replace("l = ", '').replace("l=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[7] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("m") != -1) {
			newcode = newcode.replace("m = ", '').replace("m=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[8] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("n") != -1) {
			newcode = newcode.replace("n = ", '').replace("n=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[9] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("o") != -1) {
			newcode = newcode.replace("o = ", '').replace("o=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[10] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("p") != -1) {
			newcode = newcode.replace("p = ", '').replace("p=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[11] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("q") != -1) {
			newcode = newcode.replace("q = ", '').replace("q=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[12] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("r") != -1) {
			newcode = newcode.replace("r = ", '').replace("r=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[13] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("s") != -1) {
			newcode = newcode.replace("s = ", '').replace("s=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[14] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("t") != -1) {
			newcode = newcode.replace("t = ", '').replace("t=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[15] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("u") != -1) {
			newcode = newcode.replace("u = ", '').replace("u=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[16] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("v") != -1) {
			newcode = newcode.replace("v = ", '').replace("v=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[17] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("w") != -1) {
			newcode = newcode.replace("w = ", '').replace("w=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[18] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("x") != -1) {
			newcode = newcode.replace("x = ", '').replace("x=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[19] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("y") != -1) {
			newcode = newcode.replace("y = ", '').replace("y=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[20] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		
		if (prevsubstring.toLowerCase().indexOf("z") != -1) {
			newcode = newcode.replace("z = ", '').replace("z=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[21] = eq.answer;
			setTimeout(function(){callback()}, 500);
		}
		}
		else if (newcode.indexOf("=") == -1) {
			
			var obj = document.getElementById("input");
			if (newcode.indexOf("a") != -1) {
				fillInputA(obj);
				
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 4500);};
				}
				
			if (newcode.indexOf("b") != -1) {
				fillInputB(obj);
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 4500);};
				}
			if (newcode.indexOf("c") != -1) {
				fillInputC(obj);
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 4500);};
				}
			if (newcode.indexOf("d") != -1) {
				fillInputD(obj);
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 4500);};
				}
			if (newcode.indexOf("e") != -1) {
				obj.inputbox.value = " e = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("f") != -1) {
				obj.inputbox.value = " f = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("g") != -1) {
				obj.inputbox.value = " g = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("h") != -1) {
				obj.inputbox.value = " h = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("i") != -1) {
				obj.inputbox.value = " i = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("j") != -1) {
				obj.inputbox.value = " j = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("k") != -1) {
				obj.inputbox.value = " k = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("l") != -1) {
				obj.inputbox.value = " l = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("m") != -1) {
				obj.inputbox.value = " m = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("n") != -1) {
				obj.inputbox.value = " n = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("o") != -1) {
				obj.inputbox.value = " o = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("p") != -1) {
				obj.inputbox.value = " p = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("q") != -1) {
				obj.inputbox.value = " q = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				
				}
			if (newcode.indexOf("r") != -1) {
				obj.inputbox.value = " r = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("s") != -1) {
				obj.inputbox.value = " s = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("t") != -1) {
				obj.inputbox.value = " t = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("u") != -1) {
				obj.inputbox.value = " e = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("v") != -1) {
				obj.inputbox.value = " v = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("w") != -1) {
				obj.inputbox.value = " w = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("x") != -1) {
				obj.inputbox.value = " x = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("y") != -1) {
				obj.inputbox.value = " y = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
			if (newcode.indexOf("z") != -1) {
				obj.inputbox.value = " z = ";
				obj.inputbox.focus();
				document.getElementById("enter").onclick = function () {readInput(this.form); setTimeout(function(){callback()}, 500);};
				}
		}
		
		}
	
	
	else if (code.indexOf("cout <<") != -1) {
		
		var newcode = code.replace('cout <<', '').replace(';', '');
		var obj = document.getElementById("output");
		if (newcode.indexOf("=") != -1) {
		substring = newcode.substr(newcode.indexOf("="), newcode.length);
			
			if (substring.search(/[A]/gi) != -1) {
				var a = variables[0];
				substring = substring.replace(/a/gi, '' + a);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[B]/gi) != -1) {
				var b = variables[1];
				substring = substring.replace(/b/gi, '' + b);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[C]/gi) != -1) {
				var c = variables[2];
				substring = substring.replace(/c/gi, '' + c);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[D]/gi) != -1) {
				var d = variables[3];
				substring = substring.replace(/d/gi, '' + d);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[E]/gi) != -1) {
				var e = othervariables[0];
				substring = substring.replace(/e/gi, '' + e);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[F]/gi) != -1) {
				var f = othervariables[1];
				substring = substring.replace(/f/gi, '' + f);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[G]/gi) != -1) {
				var g = othervariables[2];
				substring = substring.replace(/g/gi, '' + g);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[H]/gi) != -1) {
				var h = othervariables[3];
				substring = substring.replace(/h/gi, '' + h);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[I]/gi) != -1) {
				var i = othervariables[4];
				substring = substring.replace(/i/gi, '' + i);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[J]/gi) != -1) {
				var j = othervariables[5];
				substring = substring.replace(/j/gi, '' + j);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[K]/gi) != -1) {
				var k = othervariables[6];
				substring = substring.replace(/k/gi, '' + k);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[L]/gi) != -1) {
				var l = othervariables[7];
				substring = substring.replace(/l/gi, '' + l);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[M]/gi) != -1) {
				var m = othervariables[8];
				substring = substring.replace(/m/gi, '' + m);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[N]/gi) != -1) {
				var n = othervariables[9];
				substring = substring.replace(/n/gi, '' + n);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[O]/gi) != -1) {
				var o = othervariables[10];
				substring = substring.replace(/o/gi, '' + o);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[P]/gi) != -1) {
				var p = othervariables[11];
				substring = substring.replace(/p/gi, '' + p);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[Q]/gi) != -1) {
				var q = othervariables[12];
				substring = substring.replace(/q/gi, '' + q);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[R]/gi) != -1) {
				var r = othervariables[13];
				substring = substring.replace(/r/gi, '' + r);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[S]/gi) != -1) {
				var s = othervariables[14];
				substring = substring.replace(/s/gi, '' + s);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[T]/gi) != -1) {
				var t = othervariables[15];
				substring = substring.replace(/t/gi, '' + t);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[U]/gi) != -1) {
				var u = othervariables[16];
				substring = substring.replace(/u/gi, '' + u);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[V]/gi) != -1) {
				var v = othervariables[17];
				substring = substring.replace(/v/gi, '' + v);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[W]/gi) != -1) {
				var w = othervariables[18];
				substring = substring.replace(/w/gi, '' + w);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[X]/gi) != -1) {
				var x = othervariables[19];
				substring = substring.replace(/x/gi, '' + x);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[Y]/gi) != -1) {
				var y = othervariables[20];
				substring = substring.replace(/y/gi, '' + y);
				newcode = prevsubstring + substring;
			}
			if (substring.search(/[Z]/gi) != -1) {
				var z = othervariables[21];
				substring = substring.replace(/z/gi, '' + z);
				newcode = prevsubstring + substring;
			}
		trimmed = newcode.replace('=', '');
		var eq = owenge.equation.parse('' + trimmed);
		obj.value += "\n" + neweq.answer;
		}
		
		else if (newcode.indexOf("=") == -1) {
			if (newcode.search(/[A-z]/gi) != -1) {
			if (newcode.search(/[A]/gi) != -1) {
				var a = variables[0];
				newcode = newcode.replace(/a/gi, '' + a);
			}
			if (newcode.search(/[B]/gi) != -1) {
				var b = variables[1];
				newcode = newcode.replace(/b/gi, '' + b);
			}
			if (newcode.search(/[C]/gi) != -1) {
				var c = variables[2];
				newcode = newcode.replace(/c/gi, '' + c);
			}
			if (newcode.search(/[D]/gi) != -1) {
				var d = variables[3];
				newcode = newcode.replace(/d/gi, '' + d);
			}
			if (newcode.search(/[E]/gi) != -1) {
				var e = othervariables[0];
				newcode = newcode.replace(/e/gi, '' + e);
			}
			if (newcode.search(/[F]/gi) != -1) {
				var f = othervariables[1];
				newcode = newcode.replace(/f/gi, '' + f);
			}
			if (newcode.search(/[G]/gi) != -1) {
				var g = othervariables[2];
				newcode = newcode.replace(/g/gi, '' + g);
			}
			if (newcode.search(/[H]/gi) != -1) {
				var h = othervariables[3];
				newcode = newcode.replace(/h/gi, '' + h);
			}
			if (newcode.search(/[I]/gi) != -1) {
				var i = othervariables[4];
				newcode = newcode.replace(/i/gi, '' + i);
			}
			if (newcode.search(/[J]/gi) != -1) {
				var j = othervariables[5];
				newcode = newcode.replace(/j/gi, '' + j);
			}
			if (newcode.search(/[K]/gi) != -1) {
				var k = othervariables[6];
				newcode = newcode.replace(/k/gi, '' + k);
			}
			if (newcode.search(/[L]/gi) != -1) {
				var l = othervariables[7];
				newcode = newcode.replace(/l/gi, '' + l);
			}
			if (newcode.search(/[M]/gi) != -1) {
				var m = othervariables[8];
				newcode = newcode.replace(/m/gi, '' + m);
			}
			if (newcode.search(/[N]/gi) != -1) {
				var n = othervariables[9];
				newcode = newcode.replace(/n/gi, '' + n);
			}
			if (newcode.search(/[O]/gi) != -1) {
				var o = othervariables[10];
				newcode = newcode.replace(/o/gi, '' + o);
			}
			if (newcode.search(/[P]/gi) != -1) {
				var p = othervariables[11];
				newcode = newcode.replace(/p/gi, '' + p);
			}
			if (newcode.search(/[Q]/gi) != -1) {
				var q = othervariables[12];
				newcode = newcode.replace(/q/gi, '' + q);
			}
			if (newcode.search(/[R]/gi) != -1) {
				var r = othervariables[13];
				newcode = newcode.replace(/r/gi, '' + r);
			}
			if (newcode.search(/[S]/gi) != -1) {
				var s = othervariables[14];
				newcode = newcode.replace(/s/gi, '' + s);
			}
			if (newcode.search(/[T]/gi) != -1) {
				var t = othervariables[15];
				newcode = newcode.replace(/t/gi, '' + t);
			}
			if (newcode.search(/[U]/gi) != -1) {
				var u = othervariables[16];
				newcode = newcode.replace(/u/gi, '' + u);
			}
			if (newcode.search(/[V]/gi) != -1) {
				var v = othervariables[17];
				newcode = newcode.replace(/v/gi, '' + v);
			}
			if (newcode.search(/[W]/gi) != -1) {
				var w = othervariables[18];
				newcode = newcode.replace(/w/gi, '' + w);
			}
			if (newcode.search(/[X]/gi) != -1) {
				var x = othervariables[19];
				newcode = newcode.replace(/x/gi, '' + x);
			}
			if (newcode.search(/[Y]/gi) != -1) {
				var y = othervariables[20];
				newcode = newcode.replace(/y/gi, '' + y);
			}
			if (newcode.search(/[Z]/gi) != -1) {
				var z = othervariables[21];
				newcode = newcode.replace(/z/gi, '' + z);
			}
		}
		var eq = owenge.equation.parse('' + newcode);
		obj.value += "\n" + eq.answer;
		
				
		}
		setTimeout(function(){callback()}, 500);					
	}

	else
		setTimeout(function(){callback()});	
} 

function readInput (form) {
    input = form.inputbox.value;
	
	if (input.toLowerCase().indexOf(document.getElementById("registerA").name) != -1) {
		var obj = document.getElementById("registerA");
		newcode = input.replace('a = ', '');
		var eq = owenge.equation.parse('' + newcode);
		obj.value =  " "
		inputSparks("a", function(){
			obj.value = eq.answer;
			variables[0] = eq.answer;
		});
		var canvas = document.getElementById("mycanvas");
		gl = initWebGL(canvas);      // Initialize the GL context

		// Only continue if WebGL is available and working

		if (gl) {
		gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Set clear color to black, fully opaque
		gl.enable(gl.DEPTH_TEST);                               // Enable depth testing
		gl.depthFunc(gl.LEQUAL);                                // Near things obscure far things
		gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Clear the color as well as the depth buffer.
		}
	}
	
	if (input.toLowerCase().indexOf(document.getElementById("registerB").name) != -1) {
		var obj = document.getElementById("registerB");
		newcode = input.replace('b = ', '');
		var eq = owenge.equation.parse('' + newcode);
		obj.value =  " "
		inputSparks("b", function(){
			obj.value = eq.answer;
			variables[1] = eq.answer;
		});
		var canvasB = document.getElementById("mycanvas");
		var sketchB = function(processing) {
			/* @pjs preload="Circuit_Board.png"; */
			var x = 565; 
			var y = 473;
			var bg;
			var speed = 3;
			//
			processing.setup = function() {
				processing.size(1920, 1080);
				bg = processing.loadImage("Circuit_Board.png");
			};

			processing.draw = function() {
				if (x < 845){
					x = x + speed;
				}
				else if ( y > 200) {
					y = y - speed;
				}
				if ( (x>=845)&&(y<200)){
					processing.noLoop();
				}
				processing.background(bg);
				processing.stroke(0);
				processing.fill(255,0,0);
				processing.ellipse(x,y,10,10);
			};
		};
		var inputB = new Processing(canvasB, sketchB);
		// inputB.exit();	
	}
	if (input.toLowerCase().indexOf(document.getElementById("registerC").name) != -1) {
	var obj = document.getElementById("registerC");
	newcode = input.replace('c = ', '');
	var eq = owenge.equation.parse('' + newcode);
	obj.value =  " "
	inputSparks("c", function(){
		obj.value = eq.answer;
		variables[2] = eq.answer;
	});
	var canvasC = document.getElementById("mycanvas");
	var sketchC = function(processing) {
		/* @pjs preload="Circuit_Board.png"; */
		var x = 565; 
		var y = 473;
		var bg;
		var speed = 3;
		//
		processing.setup = function() {
			processing.size(1920, 1080);
			bg = processing.loadImage("Circuit_Board.png");
		};

		processing.draw = function() {
			if (x < 1000){
				x = x + speed;
			}
			else if ( y > 200) {
				y = y - speed;
			}
			if ( (x>1000)&&(y<200)){
				processing.noLoop();
			}
			processing.background(bg);
			processing.stroke(0);
			processing.fill(255,0,0);
			processing.ellipse(x,y,10,10);
		};
	};
	var inputC = new Processing(canvasC, sketchC);
	// inputC.exit();
}
	if (input.toLowerCase().indexOf(document.getElementById("registerD").name) != -1) {
	var obj = document.getElementById("registerD");
	newcode = input.replace('d = ', '');
	var eq = owenge.equation.parse('' + newcode);
	obj.value = " "
	inputSparks("d", function(){
		obj.value = eq.answer;
		variables[3] = eq.answer;
	});	
	var canvasD = document.getElementById("mycanvas");
	var sketchD = function(processing) {
		/* @pjs preload="Circuit_Board.png"; */
		var x = 565; 
		var y = 473;
		var bg;
		var speed = 4;
		//
		processing.setup = function() {
			processing.size(1920, 1080);
			bg = processing.loadImage("Circuit_Board.png");
		};

		processing.draw = function() {
			if (x < 1155){
				x = x + speed;
			}
			else if ( y > 200) {
				y = y - speed;
			}
			if ( (x>1155)&&(y<200)){
				processing.noLoop();
			}
			processing.background(bg);
			processing.stroke(0);
			processing.fill(255,0,0);
			processing.ellipse(x,y,10,10);
		};
	};
	var inputD = new Processing(canvasD, sketchD);
	// inputD.exit();
}

	if (input.toLowerCase().indexOf("e") != -1) {
			newcode = input.replace("e = ", '').replace("e=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[0] = eq.answer;
			
		}
		
	if (input.toLowerCase().indexOf("f") != -1) {
			newcode = input.replace("f = ", '').replace("f=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[1] = eq.answer;
		}
	if (input.toLowerCase().indexOf("g") != -1) {
			newcode = input.replace("g = ", '').replace("g=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[2] = eq.answer;
		}
	if (input.toLowerCase().indexOf("h") != -1) {
			newcode = input.replace("h = ", '').replace("h=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[3] = eq.answer;
		}
	if (input.toLowerCase().indexOf("i") != -1) {
			newcode = input.replace("i = ", '').replace("i=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[4] = eq.answer;
		}
	if (input.toLowerCase().indexOf("j") != -1) {
			newcode = input.replace("j = ", '').replace("j=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[5] = eq.answer;
		}
	if (input.toLowerCase().indexOf("k") != -1) {
			newcode = input.replace("k = ", '').replace("k=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[6] = eq.answer;
		}
	if (input.toLowerCase().indexOf("l") != -1) {
			newcode = input.replace("l = ", '').replace("l=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[7] = eq.answer;
		}
	if (input.toLowerCase().indexOf("m") != -1) {
			newcode = input.replace("m = ", '').replace("m=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[8] = eq.answer;
		}
	if (input.toLowerCase().indexOf("n") != -1) {
			newcode = input.replace("n = ", '').replace("n=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[9] = eq.answer;
		}
	if (input.toLowerCase().indexOf("o") != -1) {
			newcode = input.replace("o = ", '').replace("o=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[10] = eq.answer;
		}
	if (input.toLowerCase().indexOf("p") != -1) {
			newcode = input.replace("p = ", '').replace("p=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[11] = eq.answer;
		}
	if (input.toLowerCase().indexOf("q") != -1) {
			newcode = input.replace("q = ", '').replace("q=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[12] = eq.answer;
		}
	if (input.toLowerCase().indexOf("r") != -1) {
			newcode = input.replace("r = ", '').replace("r=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[13] = eq.answer;
		}
	if (input.toLowerCase().indexOf("s") != -1) {
			newcode = input.replace("s = ", '').replace("s=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[14] = eq.answer;
		}
	if (input.toLowerCase().indexOf("t") != -1) {
			newcode = input.replace("t = ", '').replace("t=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[15] = eq.answer;
		}
	if (input.toLowerCase().indexOf("u") != -1) {
			newcode = input.replace("u = ", '').replace("u=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[16] = eq.answer;
		}
	if (input.toLowerCase().indexOf("v") != -1) {
			newcode = input.replace("v = ", '').replace("v=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[17] = eq.answer;
		}
	if (input.toLowerCase().indexOf("w") != -1) {
			newcode = input.replace("w = ", '').replace("w=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[18] = eq.answer;
		}
	if (input.toLowerCase().indexOf("x") != -1) {
			newcode = input.replace("x = ", '').replace("x=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[19] = eq.answer;
		}
	if (input.toLowerCase().indexOf("y") != -1) {
			newcode = input.replace("y = ", '').replace("y=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[20] = eq.answer;
		}
	if (input.toLowerCase().indexOf("z") != -1) {
			newcode = input.replace("z = ", '').replace("z=", '');
			var eq = owenge.equation.parse('' + newcode);
			othervariables[21] = eq.answer;
		}
		
	form.inputbox.value = " ";
	return false;
}

function inputButtonClicked() {
	var obj=document.getElementById("code");
	if (obj.value != '') {
		obj.value += "\ninput ";
	}
	else
		obj.value = "input ";
	document.getElementById("status").innerHTML = "Choose A INPUT Register";
	document.getElementById("A").className  = 'RegClickable';
	document.getElementById("B").className  = 'RegClickable';
	document.getElementById("C").className  = 'RegClickable';
	document.getElementById("D").className  = 'RegClickable';
	document.getElementById("inputButton").style.pointerEvents = "none";
	document.getElementById("outputButton").style.pointerEvents = "none";
	document.getElementById("assignmentButton").style.pointerEvents = "none";
	document.getElementById("ifButton").style.pointerEvents = "none";
	document.getElementById("whileButton").style.pointerEvents = "none";
}

function outputButtonClicked() {
	var obj=document.getElementById("code");
	if (obj.value != '') {
		obj.value += "\noutput ";
	}
	else
		obj.value = "output ";
	document.getElementById("status").innerHTML = "Choose A OUTPUT Register";
	document.getElementById("A").className  = 'RegClickable';
	document.getElementById("B").className  = 'RegClickable';
	document.getElementById("C").className  = 'RegClickable';
	document.getElementById("D").className  = 'RegClickable';
	document.getElementById("inputButton").style.pointerEvents = "none";
	document.getElementById("outputButton").style.pointerEvents = "none";
	document.getElementById("assignmentButton").style.pointerEvents = "none";
	document.getElementById("ifButton").style.pointerEvents = "none";
	document.getElementById("whileButton").style.pointerEvents = "none";
}

function assignmentButtonClicked() {
	var obj=document.getElementById("code");
	document.getElementById("status").innerHTML = "Write An assignment Expression";
	obj.value += "\n";
	obj.focus();
}

function ifButtonClicked() {
	var obj=document.getElementById("code");
	document.getElementById("status").innerHTML = "Write An if Expression";
	obj.value += "if (){\n\n}\n";
	obj.focus();
}

function whileButtonClicked() {
	var obj=document.getElementById("code");
	document.getElementById("status").innerHTML = "Write An While Expression";
	obj.value += "while (){\n\n}\n";
	obj.focus();
}

function add_A_To_Code() {
	var obj=document.getElementById("code");
	obj.value += "A";
	document.getElementById("A").className  = 'RegUnclickable';
	document.getElementById("B").className  = 'RegUnclickable';
	document.getElementById("C").className  = 'RegUnclickable';
	document.getElementById("D").className  = 'RegUnclickable';
	document.getElementById("status").innerHTML = "";
	document.getElementById("inputButton").style.pointerEvents = "auto";
	document.getElementById("outputButton").style.pointerEvents = "auto";
	document.getElementById("assignmentButton").style.pointerEvents = "auto";
	document.getElementById("ifButton").style.pointerEvents = "auto";
	document.getElementById("whileButton").style.pointerEvents = "auto";
}

function add_B_To_Code() {
	var obj=document.getElementById("code");
	obj.value += "B";
	document.getElementById("A").className  = 'RegUnclickable';
	document.getElementById("B").className  = 'RegUnclickable';
	document.getElementById("C").className  = 'RegUnclickable';
	document.getElementById("D").className  = 'RegUnclickable';
	document.getElementById("status").innerHTML = "";
	document.getElementById("inputButton").style.pointerEvents = "auto";
	document.getElementById("outputButton").style.pointerEvents = "auto";
	document.getElementById("assignmentButton").style.pointerEvents = "auto";
	document.getElementById("ifButton").style.pointerEvents = "auto";
	document.getElementById("whileButton").style.pointerEvents = "auto";
}

function add_C_To_Code() {
	var obj=document.getElementById("code");
	obj.value += "C";
	document.getElementById("A").className  = 'RegUnclickable';
	document.getElementById("B").className  = 'RegUnclickable';
	document.getElementById("C").className  = 'RegUnclickable';
	document.getElementById("D").className  = 'RegUnclickable';
	document.getElementById("status").innerHTML = "";
	document.getElementById("inputButton").style.pointerEvents = "auto";
	document.getElementById("outputButton").style.pointerEvents = "auto";
	document.getElementById("assignmentButton").style.pointerEvents = "auto";
	document.getElementById("ifButton").style.pointerEvents = "auto";
	document.getElementById("whileButton").style.pointerEvents = "auto";
}

function add_D_To_Code() {
	var obj=document.getElementById("code");
	obj.value += "D";
	document.getElementById("A").className  = 'RegUnclickable';
	document.getElementById("B").className  = 'RegUnclickable';
	document.getElementById("C").className  = 'RegUnclickable';
	document.getElementById("D").className  = 'RegUnclickable';
	document.getElementById("status").innerHTML = "";
	document.getElementById("inputButton").style.pointerEvents = "auto";
	document.getElementById("outputButton").style.pointerEvents = "auto";
	document.getElementById("assignmentButton").style.pointerEvents = "auto";
	document.getElementById("ifButton").style.pointerEvents = "auto";
	document.getElementById("whileButton").style.pointerEvents = "auto";
}

function fillInputA() {
	var inputDiv = document.getElementById("inputArea");
	var outputDiv = document.getElementById("outputArea");
	var form = document.getElementById("input");
	outputDiv.style.display = "none";
	inputDiv.style.display = "block";
	form.inputbox.value = " a = ";
	form.inputbox.focus();
}

function fillInputB(form) {
	var inputDiv = document.getElementById("inputArea");
	var outputDiv = document.getElementById("outputArea");
	outputDiv.style.display = "none";
	inputDiv.style.display = "block";
	form.inputbox.value = " b = ";
	form.inputbox.focus();
}

function fillInputC(form) {
	var inputDiv = document.getElementById("inputArea");
	var outputDiv = document.getElementById("outputArea");
	outputDiv.style.display = "none";
	inputDiv.style.display = "block";
	form.inputbox.value = " c = ";
	form.inputbox.focus();
}

function fillInputD(form) {
	var inputDiv = document.getElementById("inputArea");
	var outputDiv = document.getElementById("outputArea");
	outputDiv.style.display = "none";
	inputDiv.style.display = "block";
	form.inputbox.value = " d = ";
	form.inputbox.focus();
}


function fillCodeCIN(textareaID) {
	var obj = document.getElementById(textareaID);
	var cin = "cin >> ";
	if (obj.value == " ") {
		obj.value += cin;
		obj.focus();
		tmpStr = obj.value;
		obj.value = '' ;
		obj.value = tmpStr;
	}
	else if (obj.value == obj.defaultValue) {
		obj.value = "";
		obj.value += cin;
		obj.focus();
		tmpStr = obj.value;
		obj.value = '';
		obj.value = tmpStr;
	}
		
	else {
		obj.value += "\n" + cin;
		obj.focus();
		tmpStr = obj.value;
		obj.value = '';
		obj.value = tmpStr;
	}
	return false;
}


function fillCodeCOUT(textareaID) {
	var obj = document.getElementById(textareaID);
	var cout = "cout << ";
	if (obj.value == " ") {
		obj.value += cout;
		obj.focus();
		tmpStr = obj.value;
		obj.value = '' ;
		obj.value = tmpStr;
	}
	else if (obj.value == obj.defaultValue) {
		obj.value = " ";
		obj.value += cout;
		obj.focus();
		tmpStr = obj.value;
		obj.value = '';
		obj.value = tmpStr;
	}
		
	else {
		obj.value += "\n" + cout;
		obj.focus();
		tmpStr = obj.value;
		obj.value = '';
		obj.value = tmpStr;
	}
	return false;
}


function fillCodeIF(textareaID) {
	var obj = document.getElementById(textareaID);
	var ifstatement = " if ";
	if (obj.value == "") {
		alert("Please click 'cin >>' if the statement is input\n or click 'cout >>' if the statement is output");
	}
	else if (obj.value == obj.defaultValue) {
		
		alert("Please click 'cin >>' if the statement is input\n or click 'cout >>' if the statement is output.");
	}
		
	else {
		obj.value += ifstatement;
		obj.focus();
		tmpStr = obj.value;
		obj.value = '';
		obj.value = tmpStr;
	}
	return false;
}


function fillCodeWHILE(textareaID) {
	var obj = document.getElementById(textareaID);
	var whilestatement = "while ";
	if (obj.value == "") {
		alert("Please click 'cin >>' if the statement is input\n or click 'cout <<' if the statement is output.");
	}
	else if (obj.value == obj.defaultValue) {
		
		alert("Please click 'cin >>' if the statement is input\n or click 'cout <<' if the statement is output.");
		
	}
		
	else {
		obj.value += whilestatement;
		obj.focus();
		tmpStr = obj.value;
		obj.value = '';
		obj.value = tmpStr;
	}
	return false;
}

//Below is an opensource mathematical parser and evaluator for javascript.

/*
Author: Chris Ongsuco a.k.a. "owenge"
Blog: http://owenge.blogspot.com (a link to my blog would be nice)
Version: Beta
License: New BSD License
Summary: A simple equation parser that computes string-based equation like in MS Excel
*/

var owenge = function() {
	var symbol = {
		mul: '*',
		div: '/',
		add: '+',
		sub: '-',
		grpbeg: '(',
		grpend: ')'
	};
	
	var ex = {
		divZero: 'divZero',
		isNan: 'isNan',
		invalidArgument: 'invalidArgument'
	};
	
	var operator = [symbol.mul, symbol.div, symbol.add, symbol.sub];
	var group = [symbol.grpbeg, symbol.grpend];
	
	// Just another way I want to make a namespace. I
	// don't want to have another js file that has to
	// be referenced just to make this parser works!
	var ns = {
		equation: {
			parse: function(s) {}
		}
	};
	
	// Function for parsing the string-based equation.
	//
	// Returns: Object with properties - "answer" and "error"
	ns.equation.parse = function(s) {
		// Function for splitting operators and numbers
		// into valid elements.
		//
		// Returns: Array of numbers and operators
		var split = function(s) {
			var ar = [];
			var len = s.length;
			var i = 0;
			var start = 0;
			
			for (i = 0; i < len; i++) {
				// Get the current character of the formula.
				var ch = s.charAt(i);
				
				// Get the left character of the current character.
				var left = i == 0 ? '' : s.charAt(i - 1);
				
				// Ignore if it is not an operator so letters
				// and numbers will be skipped.
				if (!Array.contains(operator, ch)) {
					continue;
				}

				// Evaluate if the operator is actually a "sign".
				// This is for negative numbers where the left
				// character is usually a math operator.
				if (Array.contains(operator, ch) && Array.contains(operator, left)) {
					continue;
				}
				
				// Parse the number starting from the index of the
				// previous operator upto the current one.
				Array.add(ar, s.substr(start, i - start));
				
				// Add the operator to the array.
				Array.add(ar, ch);
				
				// Track the index of the current operator. This
				// will be used for the next numeric parsing.
				start = i + 1;
			}

			// If the array has no elements it only means
			// that the formula doesn't have any operator(s)
			// so we have to assume that the value is a
			// number.
			if (ar.length == 0) {
				return s;
			}
			
			// The right most number of the formula will NOT be
			// included when parsing so we have to add it to the
			// array based on the last index of the last operator.
			if (start > 0) {
				Array.add(ar, s.substr(start));
			}
			
			// Return the parsed array values.
			return mdas(ar);
		};
	
		// Function for eliminating equation groups.
		//
		// Returns: Number as the answer of the equation
		var recurse = function(s) {
			var len = s.length;
			var i = 0;
			var start = 0;
			var prevGrp;
			var parsed = '';
			
			for (i = 0; i < len; i++) {
				var ch = s.charAt(i);
				
				// Update the starting index with the latest value.
				if (ch === symbol.grpbeg) {
					start = i + 1;
				}
				
				// Update the new parsed formula
				parsed += ch;
				
				// Ignore other characters that is not a group symbol.
				if (!Array.contains(group, ch)) {
					continue;
				}
				
				if (prevGrp === symbol.grpbeg && ch === symbol.grpend) {
					// Get the inner formula with the parenthesis
					var formula = s.substr(start, i - start);
					
					// Compute the inner formula using MDAS
					var ans = split(formula);
					
					// Compute the length of the new formula
					var clen = parsed.length - (formula.length + 2);
					parsed = parsed.substr(0, clen);
					
					// Add the answer of the parsed inner formula.
					parsed += ans;
				}
				
				// Track the group symbols
				prevGrp =  ch;
			}
			
			// If the newly concatenated formula still has 
			// groupings then we recurse until all groups
			// are eliminated.
			if ((parsed.indexOf(symbol.grpbeg) != -1) || (parsed.indexOf(symbol.grpend) != -1)) {
				return recurse(parsed);
			}
			
			// If you reach this part it only means that
			// all groups were eliminated and the final
			// result is ready for the last computation.
			return split(parsed);
		};
		
		var error = '';
		var ans;
		
		try {
			ans = recurse(s);

			if (isNaN(ans)) {
				throw ex.isNan;
			}
		}
		catch (e) {
			ans = 'n/a';
			
			if (e == ex.divZero) {
				error = 'Cannot perform division by zero';
			}
			else if (e == ex.isNan) {
				error = 'Invalid formula';
			}
			else if (e == ex.invalidArgument) {
				error = 'Invalid argument';
			}
		}
		
		return {
			error: error,
			answer: ans
		};
	};
	
	// Function for computing equation based on MDAS.
	//
	// Returns: Numeric value as result of computation
	var mdas = function(ar) {
		// Function for computing basic math operation.
		//
		// Returns: Numeric value as result computation
		var compute = function(n1, n2, op) {
			switch (op) {
				case symbol.add:
					return Number(n1) + Number(n2);
				case symbol.sub:
					return Number(n1) - Number(n2);
				case symbol.mul:
					return Number(n1) * Number(n2);
				case symbol.div:
					if (Number(n2) == 0) {
						throw ex.divZero;
					}
					
					return Number(n1) / Number(n2);
			}
			
			// You're not suppose to reach this point. If you
			// do then you are passing the wrong values!
			throw ex.invalidArgument;
		};
		
		// Function for computing equation applying
		// MDAS rule. Operators that are passed in
		// the parameter will be basis of computation.
		// Operators not passed will be ignored.
		//
		// Returns: Array of COMPUTED numbers and operators
		var applyRule = function(ar, ops) {
			var len = ar.length;
			var i = 0;
			var prevOp;
			var parsed = [];
			
			for (i = 0; i < len; i++) {
				var mod = i % 2;
				
				// Skip if it is not an operator.
				if (mod == 0) {
					continue;
				}
				
				// If the equation is 2+3 then
				// num1 is 2
				// num2 is 3
				// op is +
				var num1 = ar[i - 1];
				var num2 = ar[i + 1];
				var op = ar[i];

				// If the current operator is the one
				// that will be used for computation then
				// we ignore it.
				if (!Array.contains(ops, op)) {
					// Check if the previous operator is used
					// for the calculation. If not then we
					// add the current number to the parsed array.
					if (!Array.contains(ops, prevOp)) {
						Array.add(parsed, num1);
					}
					
					// Add ignored operator to the parsed array.
					Array.add(parsed, op);
				}
				else {
					// If the previous operator is found in
					// the list of operators to be used for 
					// computation, then we get the previous
					// oomputed value in the array.
					if (Array.contains(ops, prevOp)) {
						num1 = parsed[parsed.length - 1];
					}
					
					// Compute the equation.
					var ans = compute(num1, num2, op);
					
					// Replace the last value in the array
					// with the new parsed value.
					if (Array.contains(ops, prevOp)) {
						parsed[parsed.length - 1] = ans;
					}
					else {
						Array.add(parsed, ans);
					}
				}
				// Track the previous operator.
				prevOp = op;
			}
			
			// We have to add the last value of the formula if the
			// last operator it used for computation.
			if (!Array.contains(ops, prevOp)) {
				// Get the last operator in the array.
				Array.add(parsed, ar[len - 1]);
			}
			
			return parsed;
		};
		
		// Apply MDAS rules to the equation
		ar = applyRule(ar, ['*', '/']);
		ar = applyRule(ar, ['+', '-']);
		
		// Return the final answer of the computation
		return ar.length == 0 ? 0 : ar[0];
	};
	
	// Array extensions
	if (!Array.contains) {
		Array.contains = function(array, o) {
			var len = array.length;
			var i = 0;
			
			for (i = 0; i < len; i++) {
				if (array[i] === o) {
					return true;
				}
			}
			
			return false;
		};
	}

	if (!Array.add) {
		Array.add = function(array, o) {
			array[array.length] = o;
		};
	}
	
	return ns;
}();

function selectTextareaLine(tarea,lineNum) {
    lineNum--; // array starts at 0
    var lines = tarea.value.split("\n");

    // calculate start/end
    var startPos = 0, endPos = tarea.value.length;
    for(var x = 0; x < lines.length; x++) {
        if(x == lineNum) {
            break;
        }
        startPos += (lines[x].length+1);

    }

    var endPos = lines[lineNum].length+startPos;

    // do selection
    // Chrome / Firefox

    if(typeof(tarea.selectionStart) != "undefined") {
        tarea.focus();
        tarea.selectionStart = startPos;
        tarea.selectionEnd = endPos;
        return true;
    }

    // IE
    if (document.selection && document.selection.createRange) {
        tarea.focus();
        tarea.select();
        var range = document.selection.createRange();
        range.collapse(true);
        range.moveEnd("character", endPos);
        range.moveStart("character", startPos);
        range.select();
        return true;
    }

    return false;
}
