(function($) {

  $.fn.accordion = function() {
    this.find('h3')
      .addClass('accordion-header')
      .next()
      .addClass('accordion-panel')
      .slideUp()
    ;

    this.on('click', '.accordion-header', function(e) {
      const next = $(e.target).next();

      next.slideToggle();
    });

    return this;
  };

}(jQuery))
