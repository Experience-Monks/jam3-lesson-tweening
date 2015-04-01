# What is a Tweening engine?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis leo nunc. Nunc pellentesque in mauris sit amet tempor. Duis id vehicula felis. Vivamus euismod lorem in quam accumsan, id maximus quam semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam tristique ipsum in vestibulum faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec fermentum erat eu odio tempus congue. Etiam facilisis dui vestibulum ligula auctor, a gravida turpis dapibus. Nam ultrices eget odio ac ornare. Nunc sit amet enim justo. Phasellus lobortis aliquet elit, eu malesuada risus finibus at. Maecenas pretium, felis sit amet mollis efficitur, nunc elit sagittis sapien, a aliquam sapien mauris et diam. Donec convallis, orci eu viverra porttitor, leo libero viverra leo, nec posuere nisl diam sed risus. Etiam eget volutpat sem.

```javascript
var Tween = require('gsap');
var toTween = {
    x: 0,
    y: 0
};

Tween.to(toTween, 0.5, {x: 0, y: 0});
```

This is how you'd call a callback once the Tween has completed:
```javascript
var Tween = require('gsap');
var toTween = {
    x: 0,
    y: 0
};

Tween.to(toTween, 0.5, {x: 0, y: 0});
```

No go and try to write your own Tween. Open the folder you ran `jam3-tween-lesson` in your editor of choice. There you'll see a folder called `1- What is a Tweening engine`. In that folder you'll see a `practice` and `solution` folder. Inside the `practice` folder go ahead and create a solution. If you need to "cheat" you can always take a look at the `solution` folder.