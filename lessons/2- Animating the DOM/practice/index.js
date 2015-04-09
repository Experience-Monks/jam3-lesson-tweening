var Tween = require('gsap');

// In the following function animate a button
// The values it should animate are transformX from -40 to 0, transformY from -30 to 0, and opacity from 0 to 1.
// It should complete in 1 seconds. WOAH!
// Once the tween has finished call the `onTweenFinished` function
module.exports = function(toTween, onTweenFinished) {
	Tween.fromTo(toTween, 1, {x: -40, y: -30, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, onComplete: onTweenFinished });
};