var level = {}

window.addEventListener("load", function() {

function getLoadProgress() {
	if (numPreload > 0) {
		return numLoaded / numPreload;
	} else {
		return 0;
	}
	}

Modernizr.load([
    {
        load : [
            "scripts/sizzle.js",
            "scripts/dom.js",
            "scripts/game.js"
        ],{
		
		test : Modernizr.standalone,
		yup: "scripts/screen.splash.js",
		nope: "scripts/screen.install.js",
        complete : function() {
            level.game.showScreen("splash-screen", getLoadProgress);
        } else {
	level.game.showScreen("install-screen")
}
}
}
]);

}, false);

var numPreload = 0;
	numLoaded = 0;
	
yepnope.addPrefix("loader", function(resource) {
	// console.log("Loading: " + resource.url)
	var isImage = /.+\.(jpg|png|gif)$/i.test(resource.url);
	resource.noexec = isImage;
	
	numPreload++;
	resource.autoCallback = function(e) {
		//console.log("Finished loading: " + resource.url)
	numLoaded++;
	if (isImage) {
		var image = new Image();
		image.src = resource.url;
		level.images[resource.url] = image;
	}
	};
	return resource;
	});
// loading stage 1	
