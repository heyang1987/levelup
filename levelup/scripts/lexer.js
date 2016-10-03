var userInputDone = false;

function lex(input) {
	var inputFlag = false;
	var pauseFlag = false;
	var isOperator = function (c) { return /[+\-*\/\^%=(),]/.test(c); },
		isDigit = function (c) { return /[0-9]/.test(c); },
		isWhiteSpace = function (c) { return /\s/.test(c); },
		//isInput = function (c) { return /input/.text(c); },
		isIdentifier = function (c) { return typeof c === "string" && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c); };

	var tokens = [], c, i = 0;
	var advance = function () { return c = input[++i]; };
	var addToken = function (type, value) {
		tokens.push({
			type: type,
			value: value
		});
	};
	while (i < input.length) {
		c = input[i];
		if (isWhiteSpace(c)) advance();
		else if (isOperator(c)) {
			addToken(c);
			advance();
		}
		else if (isDigit(c)) {
			var num = c;
			while (isDigit(advance())) num += c;
			if (c === ".") {
				do num += c; while (isDigit(advance()));
			}
			num = parseFloat(num);
			if (!isFinite(num)) throw "Number is too large or too small for a 64-bit double.";
			addToken("number", num);
		}
		else if (isIdentifier(c)) {
			var idn = c;
			while (isIdentifier(advance())) {
				idn += c;
			}
			if (idn == "input"){
				inputFlag = true;
			}
			else if (idn == "A" && inputFlag == true){
				//var valueA = prompt("Please input a value for A:", "a = ");
				waitInputA();
				//alert(idn);
				addToken("identifier", idn);
				inputFlag = false;
			}
			else if (idn == "output"){
				//alert("input detected");
			}
			else {
				addToken("identifier", idn);
			}
			//addToken("identifier", idn);
		}
		else throw "Unrecognized token.";
	}
	addToken("(end)");
	return tokens;
};

function waitInputA() {
	var inputDiv = document.getElementById("inputArea");
	var outputDiv = document.getElementById("outputArea");
	var form = document.getElementById("input");
	outputDiv.style.display = "none";
	inputDiv.style.display = "block";
	form.inputbox.value = " A = ";
	form.inputbox.focus();
	//alert("input A detected");
}




