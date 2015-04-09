# Animating the DOM

One of the most common uses of a Tweening engine like GSAP is to animate a DOM element via the style attribute. Any style attribute can be changed through generally it's one with a number value. If a style property has a string as it's value you'll want to change it either before the Tween starts or when it ends. Classes can be changed by GSAP as well but again usually best to do this either before or after an animation starts or completes.

## Pop up and fade

To get you started here's an example of a common animation that you'll be asked to create. This makes use of a couple of GSAP's alias variables that are included with the `CSSPlugin` 

```javascript
var Tween = require('gsap');

var slideButton = document.getElementById('coolButton');

// Syntax Tween.to(object, time, {vars})
Tween.fromTo(slideButton, 0.5, {y: -20, autoAlpha: 0},{y: 0, autoAlpha: 1});
```

There are a couple new things in this example. First off we're animating a DOM element. GSAP is pretty flexible with what you tell it to tween. You can provide a pure javascript element like we're doing here, it will also except a jQuery selector. As well you can provide an array of objects and it will animate each of them at the same time.

Second you'll notice we're using a new GSAP function called `fromTo`. You'll use this a lot because you'll want to be specific about what the start state is for your animation. For `fromTo` we have two variable objects, one for the start and one for the end. So our start state in this instance has a `y` value of `-20` and an `autoAlpha` value of `0`.

If you don't care about what GSAP does with these values then you don't need to worry about it much. But understanding how `autoAlpha` differs from using `opacity` is important. `autoAlpha` translates to `opacity:0; visibility: hidden;` in the style attibute. These means that not only is our element invisible on the screen but it can't be selected or clicked on by any event listeners that may have been applied. When `autoAlpha` is animated from `0` to `1` is sets `visibility` to `visible` when it starts the tween.

## Why we use X,Y,Z

There are a lot of ways to position a DOM element. Depending on your needs you may use any number of combinations of `top,right,bottom,left`, `padding`, `margin` or `float` to get the desired result in your layout. That's all fine for layout purposes but when it comes to animating in the DOM all of those attributes are dead slow and will cause a lot of [Jank](http://jankfree.org/). In addition, messing with these properties in an animation can have adverse effects on your layout if you're using relative positioning.

This is where CSS Transforms come in and it's what GSAP is using when we use `x,y,z`. GSAP translates these properties into the approperiate CSS Transform attribute depending on what needs to be animated. If it's just `y` for example it will use `transform: translateY(y)` or if it's `x` and `y` it will move up to using `transform: translate(x,y)`. If you start throwing `z` into the mix and other properties like `scaleX` or `scaleY` it will make use of `transform: matrix3d()`.

>If you know how to use Matrices then you know how powerful they can be but also very hard to learn. Though if you don't know how to use them, you don't need to worry about it as GSAP does the calculations for you. 

This is great for animation for a few reasons.
1. All values start at `0`. It means that you're always controling your animation from the object's root position so that you don't have to keep track of where you starting position is because your starting position is always `0`
2. It will sometimes make use of the GPU which is extremely powerful compared to using the CPU. I say sometimes because for 2D animations by default GSAP uses `translateX` or `translateY` which doesn't render using the GPU. However, GSAP has a `force3d` variable which if set to `true` will use `transform: matrix3d` in your animation which does render using the GPU for super smooth animations. It's not a huge difference if you're just animating one button, but can be a big deal when you start animating a ton of elements on the screen at once. 
3. It seperates your layout from your animation, which simply put just makes for cleaner code easier to be debug code.


## Get to work!

No go and try and animate your own DOM element. Open the folder you ran `jam3-tween-lesson` in, in your editor of choice. There you'll see a folder called `2- Animating the DOM`. In that folder you'll see a `practice` and `solution` folder. Inside the `practice` folder go ahead and create a solution. If you need to "cheat" you can always take a look at the `solution` folder.