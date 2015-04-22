# Easing and Delays

Next we're going to learn about Easing, and Delays. Two very important features of our tweening engine that give us a lot of power over how our animation feels and controls timing of it when combined with other functions and animations.

## Easing

Easings are one of the most important settings to motion designers as it controls how an animation feels and add a lot of "Punch" to the animation. You'll see very quickly that if you go back to using a default ease like we did in the last couple of examples it doesn't seem very interesting to the eye. 

```javascript
var Tween = require('gsap');

var popUpTitle = document.getElementById('popUpAndFade');

Tween.fromTo(popUpTitle, 0.5, 
    {x: -20, autoAlpha: 0, ease: Bounce.easeIn},
    {y: 0, autoAlpha: 1, ease: Bounce.easeIn}
);
```

Using an ease is easy once you learn the syntax of the object. `[EaseName].[easeDirection]` First is the name of the Ease, which is pretty standard across a lot of libraries you can see the most common eases here (http://easings.net/). In this case we use Bounce for our ease with an easeIn direction. The direction controls how the graph set as our ease sits in the timeline. Your options are `easeIn`, `easeOut`, or `easeInOut`. `easeIn` means that your tween will adjust it's velocity right before the end accorind go the ease you set. In our case the object we're animating should bounce when nears it's final values (in this case `y:0`, and `autoAlpha: 1`) then settle to those values. With `easeOut` the change in velocity is adjusted at the beggining of the animation. So our animation would bounce a bit then smoothly animate out.
And finally you'll have likely guessed that `easeInOut` will bounce at both the begining AND the end of our animation.

>One production "gotcha" to remember when working with motion designers is that they need to know that you are limited to the list of Eases avaialable in GSAP. It is possible to create custom easing graphs in After Effects so they might have done so. Simply send them the link to easings.net and tell them to select which they'd like to use.



## Delays

Delays are simply that, delaying a tween. So far we've only ever been animating one thing at a time but you may want to combine many tweens together with other functions or other tweens. Controlling when a Tween starts is important and many motions designs will call for it.

```
var Tween = require('gsap');

var Title =  document.getElementById('Title');
var Subtitle = document.getElementById('Subtitle')
var Button =  document.getElementById('Button');

Tween.from(Title, 0.5, {delay: 0, autoAlpha:0, x: -20, ease: Expo.easeIn});
Tween.from(Subtitle, 0.5, {delay: 0.3, autoAlpha: 0, y: 20, ease: Expo.easeIn})
Tween.from(Button, 0.5, {delay: 0.6, autoAlpha: 0, z: 20, ease: Expo.easeIn})
```

In our example we have 3 elements to animate in. We're going to use the `from()` function here for simplicity sake. The important thing to remember with Tweens is that if you list them one after another like this they will all be called at the same time (from a Human standpoint anyway) and start at the same time unless we add delays. So in this case a delay is really just saying that you want you tween to start a number of seconds after you call it. None of these Tweens know about the other ones, we'll learn about how to stack and stagger tweens in a later lesson, which is a lot more powerful and easier to manage when your list of animations starts to grow.

To go through this, 
1. Title's tween starts at 0 seconds and takes 0.5 seconds to finish.
2. Subtitle's tween starts at 0.3 seconds and takes 0.5 seconds to finish, it will finish at 0.8 seconds.
3. Button's tween starts at 0.6 seconds and takes 0.5 seconds to finish, it will finish at 1.1 seconds.

Now what if we want them to start one after the other? Would be pretty easy with all of our durations being 0.5 seconds but once you start getting into diferent timings that requirement to add all of these numbers grows.

So remember to be careful with delays, it's fine for some simple tweens here in there but if you're trying to make a motion designers dreams come true you're going to need some much stronger methods to keep things organized.


## Get to work!

No go and try and animate some things with an eases and a delay. Open the folder you ran `jam3-tween-lesson` in, in your editor of choice. There you'll see a folder called `/3- Easing and Delays`. In that folder you'll see a `practice` and `solution` folder. Inside the `practice` folder go ahead and create a solution. If you need to "cheat" you can always take a look at the `solution` folder.