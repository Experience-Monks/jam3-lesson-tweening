var Tween = require('gsap');

// In the following function animate a button
// The values it should animate are:
// 	1. x from -40 to 0
// 	2. y from -30 to 0
// 	3. opacity from 0 to 1.
// 	4. visibility should be inherit
// It should complete in 1 seconds.
// Once the tween has finished call the `onTweenFinished` function
module.exports = function(toTween, onTweenFinished) {
	Tween.fromTo(toTween, 1, {x: -40, y: -30, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, onComplete: onTweenFinished });
};