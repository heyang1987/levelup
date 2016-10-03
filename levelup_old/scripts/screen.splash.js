level.screens["splash-screen"] = (function() {
	var game = level.game,
	dom = level.dom,
	$ = dom.$,
	firstRun = true;
function setup(getLoadProgress) {
	var scr = $("#splash-screen") [0];
	function checkProgress() {
		var p = getLoadProgress() * 100;
		$(".indicator", scr) [0].style.display = "block";
		dom.bind(scr, "click", function() {
			level.game.showScreen("main-menu");
		});
		
		} else {
			setTimeout(checkProgress, 30);
			
		}
		
	}
	checkProgress();
}
function run(getLoadProgress) {
	if (firstRun) {
		setup(getLoadProgress);
		firstRun = false;
	}
	}
	return {
		run : run
	};
})();