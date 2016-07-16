(function($) {

  if (!$.tutsplus) {
    $.tutsplus = {};
  }

  $.extend($.tutsplus, {
    postJSON: function(url, data) {

      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }

      return $.ajax(url, {
        type: 'POST',
        data: data,
        contentType: 'application/json'
      })
    }
  });

}(jQuery));
