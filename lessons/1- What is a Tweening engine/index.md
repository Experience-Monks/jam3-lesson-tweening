# What is a Tweening engine?

A Tweening Engine is function that moves a numeric value from one number to another over a period of time. This can be useful for a bunch of reasons but mainly we use it to animate an object's visual properties. This could be anything from the css style properties of an HTML element to the properties of a PIXI object in the Canvas.

## To tween or not To tween

Below is an example of a Tween that is using a tweening library called Greensock or GSAP (http://greensock.com/) that we commonly use here at Jam3. GSAP provides a series of methods for creating tweens but we're going to start with the basics here.

```javascript
var Tween = require('gsap');
var toTween = {
    x: 0,
    y: 0
};
// Syntax Tween.to(object, time, {vars})
Tween.to(toTween, 0.5, {x: 5, y: 5});
```

The `to` function is the most common, simply it tweens a variable of an object 'to' a another value. In this case we provide it with an object with x and y variables which are both 0 and we set the `to` function to tween both of those variables to 5 in 0.5 seconds. `to` doesn't care what the variables are before it tweens, they could be 0 or they could be 10 it doesn't matter. This is useful if your object has many different states or has complex movement. The `to` function will always put it where you want to be and it will be a smooth transition from what it is currently.

## I heard you liked callbacks...

One of main reasons we use a tweening engine as apposed to CSS transitions and the like is that it allows us to know when the animation is complete and execute some code when it's finished. This is extremely powerful and useful as it allows us to either chain animations or setup events to ensure a smooth transition throughout our experince.

```javascript
var Tween = require('gsap');
var toTween = {
    x: 0,
    y: 0
};

function onCompleteFunction(){
	console.log('Done!')
}

Tween.to(toTween, 0.5, {x: 100, y: 100, onComplete: onCompleteFunction });
```

`onComplete` is a special variable in our vars object that accepts a function to fire on the tweens completion. There are more special variables like this and we'll talk about them later. Even `x` and `y` have their own special properties when used to a DOM element. Stay tuned!

## Get to work!

Now go and try to write your own Tween. Open the folder you ran `jam3-tween-lesson` in, in your editor of choice. There you'll see a folder called `1- What is a Tweening engine`. In that folder you'll see a `practice` and `solution` folder. Inside the `practice` folder go ahead and create a solution. If you need to "cheat" you can always take a look at the `solution` folder.