$('img').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('other-src') 
        , 'other-src': $(this).attr('src') 
    })
});