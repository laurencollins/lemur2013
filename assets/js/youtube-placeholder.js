
var yt_link = function(ytid) {
    var tpl = '<span class="">\
    <iframe title="YouTube video player" class="youtube-player" type="text/html" \
            width="670" height="350" src="http://www.youtube.com/embed/' + ytid +
    '?autoplay=1&amp;wmode=transparent&amp;fs=1&amp;hl=en&amp;modestbranding=1&amp;iv_load_policy=3&amp;showsearch=0&amp;rel=0&amp;theme=light" \
    frameborder="0" allowfullscreen=""></iframe></span>';
    return tpl;    
};