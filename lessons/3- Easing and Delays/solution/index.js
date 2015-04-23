var Tween = require('gsap');

// For the following practice we're going to Tween 3 objects.
// Here are the rules.
// 1. All 3 objects must finish their tween in 3 seconds
// 2. The first tween for 'toTween.object1' should have duration of 2 seconds.
// 3. The second tween for 'toTween.object2' should have a duration of 1.3 seconds.
// 4. The second tween for 'toTween.object3' should have a durction of 0.5 seconds.
// 5. All 3 objects should use the Quint ease.
// 6. Each Tween needs to call thier respetive onTweenFnished calls. (i.e. onTweenFinished.object1)


// Once the 3rd tween has finished call the `onTweenFinished` function
module.exports = function(toTween, onTweenFinished) {
	Tween.from(toTween.object1, 2, {delay: 1, x: -100, autoAlpha: 0, ease: Expo.easeOut, onComplete: onTweenFinished.object1 });
	Tween.from(toTween.object2, 1.3, {delay: 1.7, x: 100, autoAlpha: 0, ease: Expo.easeOut, onComplete: onTweenFinished.object2 });
	Tween.from(toTween.object3, 0.5, {delay: 2.5, z: -100, autoAlpha: 0, ease: Expo.easeOut, onComplete: onTweenFinished.object3 });
};