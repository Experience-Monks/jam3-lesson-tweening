var usersExport = require('usersExport');
var rafLoop = require('raf-loop');
var test = require('tape');
var gsap = require('gsap');
require('browser-lessons/test-out');

var toTween = {};

toTween.object1 = document.createElement('div');
toTween.object2 = document.createElement('div');
toTween.object3 = document.createElement('div');

var elOut = document.createElement('pre');
var startTime = Date.now();


var engine = rafLoop( function(dt) {

	var propertiesToDisplay = [
		toTween.object1.style.transform,
		toTween.object2.style.transform,
		toTween.object3.style.transform
	];
		
	// tweenlite adds a wierd property called _gsTweenID we'll just temporarily remove it
	var tweenID = toTween._gsTweenID;
	delete toTween._gsTweenID;
	elOut.innerHTML = JSON.stringify(propertiesToDisplay, undefined, '  ');
	toTween._gsTweenID = tweenID;
});

gsap.set(toTween.object1, {
	backgroundColor: 'rgb(151, 239, 217)',
	padding: "7px",
	width: "50px",
	height: "50px",
	transformPerspective: 200
});

gsap.set(toTween.object2, {
	backgroundColor: 'rgb(100, 239, 100)',
	padding: "7px",
	width: "50px",
	height: "50px",
	transformPerspective: 200
});

gsap.set(toTween.object3, {
	backgroundColor: 'rgb(200, 239, 217)',
	padding: "7px",
	width: "50px",
	height: "50px",
	transformPerspective: 200
});

document.body.appendChild(elOut);
document.body.appendChild(toTween.object1);
document.body.appendChild(toTween.object2);
document.body.appendChild(toTween.object3);
engine.start();


test('Testing your tween', function(t) {

	t.timeoutAfter(4000);

		var Callback = {};

	Callback.object1 = function(){
		t.pass('Called first callback');
		t.equal(Math.floor(( Date.now() - startTime ) / 1000 ), 3 , 'Tween finished in 3 seconds');
		
	};


	Callback.object2 = function(){
		t.pass('Called first callback');
		t.equal(Math.floor(( Date.now() - startTime ) / 1000 ), 3 , 'Tween finished in 3 seconds');
		
	};

	Callback.object3 = function(){
		t.pass('Called first callback');
		t.equal(Math.floor(( Date.now() - startTime ) / 1000 ), 3 , 'Tween finished in 3 seconds');
		t.end();
	};

	usersExport(toTween, Callback);

});
