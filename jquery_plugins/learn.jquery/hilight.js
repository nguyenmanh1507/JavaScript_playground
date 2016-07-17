;(function($) {

  $.fn.hilight = function(options) {
    const opts = $.extend({}, $.fn.defautls, options);
    const elem = $(this);

    let markup = elem.html();
    markup = $.fn.hilight.format(markup);
    elem.html(markup);
    
    return this.css({
      color: opts.foreground,
      background: opts.background
    });
  };

  $.fn.hilight.format = function(txt) {
    retun `<strong>${txt}</strong>`;
  };

  $.fn.defautls = {
    foreground: '#f00',
    background: '#ff0'
  };

}(jQuery))
