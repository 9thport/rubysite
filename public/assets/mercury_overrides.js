$(window).bind("mercury:ready",function(){var a=$("#mercury_iframe").contents().find("#edit_link");Mercury.saveUrl=a.data("save-url"),a.hide()}),$(window).bind("mercury:saved",function(){window.location=window.location.href.replace(/\/editor\//i,"/")});