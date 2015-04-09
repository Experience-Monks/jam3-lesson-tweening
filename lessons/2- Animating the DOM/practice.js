var usersExport = require('usersExport');
var rafLoop = require('raf-loop');
var test = require('tape');
var gsap = require('gsap');
require('browser-lessons/test-out');

var toTween = document.createElement('button');
var elOut = document.createElement('pre');
var startTime = Date.now();

var engine = rafLoop( function(dt) {
	// tweenlite adds a wierd property called _gsTweenID we'll just temporarily remove it
	var tweenID = toTween._gsTweenID;
	delete toTween._gsTweenID;
	elOut.innerHTML = JSON.stringify(toTween, undefined, '  ');
	toTween._gsTweenID = tweenID;
});

gsap.set(toTween, {bgColor: '#333333', color: "#ffffff"});

document.body.appendChild(elOut);
document.body.appendChild(toTween);
engine.start();



test('Testing your tween', function(t) {

	t.timeoutAfter(4000);

	usersExport(toTween, function() {
		
		t.pass('Called callback');
		t.ok(Math.floor(( Date.now() - startTime ) / 1000 ) === 3, 'Tween finished in 3 seconds');
		t.equal(toTween.x, 133, 'x is 133');
		t.equal(toTween.y, 120, 'y is 120');
		t.end();
	});
});
