var Tween = require('gsap');

// In the following function create a Tween which will modify
// the x and y values of `toTween` to be 133 and 120 in 3 seconds
// 
// Once the tween has finished call the `onTweenFinished` function
module.exports = function(toTween, onTweenFinished) {
	Tween.to(toTween, 3, {x: 133, y: 120, onComplete: onTweenFinished });
};