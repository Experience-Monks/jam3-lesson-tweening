var usersExport = require('usersExport');
var rafLoop = require('raf-loop');
var test = require('tape');
var gsap = require('gsap');
require('browser-lessons/test-out');

var toTween = document.createElement('button');
var elOut = document.createElement('pre');
var startTime = Date.now();


var engine = rafLoop( function(dt) {

	var propertiesToDisplay = [
		toTween.style.transform,
		toTween.style.opacity
	];
		
	// tweenlite adds a wierd property called _gsTweenID we'll just temporarily remove it
	var tweenID = toTween._gsTweenID;
	delete toTween._gsTweenID;
	elOut.innerHTML = JSON.stringify(propertiesToDisplay, undefined, '  ');
	toTween._gsTweenID = tweenID;
});

toTween.innerHTML = 'Awesome sauce!';
gsap.set(toTween, {
	backgroundColor: '#333333',
	// border: "1px solid #000",
	borderTop: "0px solid #000",
	borderRight: "0px solid #000",
	borderBottom: "0px solid #000",
	borderLeft: "4px solid rgb(151, 239, 217)",
	color: "#ffffff", 
	fontSize: "20px",
	padding: "7px",
	cursor: "pointer",
	marginLeft: "20px"
});

document.body.appendChild(elOut);
document.body.appendChild(toTween);
engine.start();


test('Testing your tween', function(t) {

	t.timeoutAfter(4000);

	usersExport(toTween, function() {
		
		t.pass('Called callback');
		t.equal(Math.floor(( Date.now() - startTime ) / 1000 ), 1 , 'Tween finished in 1 seconds');
		t.equal(toTween.style.transform, 'matrix(1, 0, 0, 1, 0, 0)', 'Matrix is (1, 0, 0, 1, 0 ,0)');
		t.equal(toTween.style.opacity, '1', 'opacity is 1');
		t.equal(toTween.style.visibility, 'inherit', 'visibility is set to inherit');
		t.end();
	});
});
