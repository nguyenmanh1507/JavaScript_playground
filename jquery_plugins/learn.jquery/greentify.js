;(function($) {
  $.fn.greentify = function(options) {
    var settings = $.extend({
      color: '#556b2f',
      backgroundColor: '#fff'
    }, options);

    return this.css({
      color: settings.color,
      backgroundColor: settings.backgroundColor
    })
  }
}(jQuery))
