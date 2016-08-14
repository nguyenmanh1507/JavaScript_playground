'use strict';

var $circles = $('.circle');
var tl = new TimelineMax();
var imgUrls = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/valley.jpg'];
var imgUrlsLength = imgUrls.length;
var imgs = [];
var counter = 0;

for (var i = 0; i < imgUrlsLength; i++) {
  imgs.push($('<img>'));
  imgs[i].load(loaderOut);
  imgs[i].attr('src', imgUrls[i]);
}

function loaderOut() {
  counter++;
  console.log('Image is done loading', counter);
  if (counter >= imgUrlsLength) {
    tl.pause();
  }
}

TweenMax.set($circles, { scale: 0 });
tl.insert(TweenMax.staggerTo($circles.toArray(), 1, {
  opacity: 1,
  scale: 1,
  ease: Power1.easeIn
}, 0.2));

tl.insert(TweenMax.staggerTo($circles.toArray(), 1, {
  scale: 1.2,
  boxShadow: '0 25px 25px rgba(0, 0, 0, 0.4)',
  repeat: -1,
  yoyo: true,
  ease: Power1.easeOut
}, 0.2), '-=.4');