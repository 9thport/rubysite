$(window).bind('mercury:ready', function() {
  var link = $('#mercury_iframe').contents().find('#edit_link');
  Mercury.saveUrl = link.data('save-url');
  link.hide();
});

$(window).bind('mercury:saved', function() {
  window.location = window.location.href.replace(/\/editor\//i, '/');
});