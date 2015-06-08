// An example scene, which is a game state. This just puts a red square on the screen until
// there is a touch, then it converts to a text message.

var Platino = require(' co.lanica.platino');

var ExampleScene = function(game) {
	var scene = Platino.createScene();

	// Construct a red square
	var ball = null;
	ball = Platino.createSpriteSheet({
		image: "ball_anim.png",
		width: 64,
		height: 64
	});
	
	ball.animate(0,4, 100, -1);
	
	// Place the square center screen
	ball.center = {
		x: game.screen.width * 0.5, 
		y: game.screen.height * 0.5
	};
	scene.add(ball);

	// Construct a red square
	var red = null;
	red = Platino.createTextSprite({
		text: 'Ball',
		fontSize: 48
	});
	red.color(1.0, 0, 0);
	ball.addChildNode(red);
	
	red.y = 100;
	
	ball.addEventListener('touchstart', function(e) {
		ball.color(0,0,1.0);
	});
	
	game.enableOnDrawFrameEvent = true;
	game.addEventListener('enterframe', function(e) {
		ball.x += 2;
	});
	
	// scene 'activated' event listener function (scene entry-point)
	var onSceneActivated = function(e) {
		Ti.API.info("HomeScene has been activated.");
	};
/*
	// When the user touches the screen, replace the square with a message
	scene.addEventListener('touchstart', function(e) {
		var textsprite = Platino.createTextSprite({
			text : 'Now you\'re gaming with Platino!',
			fontSize : 24
		});
		textsprite.color(1.0, 1.0, 1.0);
		textsprite.center = {
			x: game.screen.width * 0.5, 
			y: game.screen.height * 0.5
		};
		scene.remove(ball);
		scene.add(textsprite);
	});*/

	// scene 'deactivated' event listener function (scene exit-point)
	var onSceneDeactivated = function(e) {
		Ti.API.info("HomeScene has been deactivated.");
	};

	// Scene activation events here
	scene.addEventListener('activated', onSceneActivated);
	scene.addEventListener('deactivated', onSceneDeactivated);

	return scene;
};

module.exports = ExampleScene; 
