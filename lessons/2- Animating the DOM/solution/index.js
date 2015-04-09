var Tween = require('gsap');

// In the following function create a Tween which will modify
// the x and y values of `toTween` to be 133 and 120 in 3 seconds
// 
// Once the tween has finished call the `onTweenFinished` function
module.exports = function(toTween, onTweenFinished) {
	Tween.fromTo(toTween, 0.75, {x: -40, y: -30, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, onComplete: onTweenFinished });
};