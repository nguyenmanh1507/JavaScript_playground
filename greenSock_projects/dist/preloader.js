'use strict';

var $circles = $('.circle');
var tl = new TimelineMax();

TweenMax.set($circles, { scale: 0 });
tl.insert(TweenMax.staggerTo($circles.toArray(), 1, {
  opacity: 1,
  scale: 1,
  ease: Power1.easeIn
}, 0.2));

tl.insert(TweenMax.staggerTo($circles.toArray(), 1, {
  scale: 1.2,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeOut
}, 0.2), '-=.4');