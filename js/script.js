(function($){
  $(function(){
    var link = 'https://www.youtube.com/embed/0qbEZ8PBNm0';

    $('.parallax').parallax();
    $('.slider').slider({full_width: true});

    $('.conference-button').click(function(event) {
      var attr = this.attributes['data-url'].nodeValue;

      if (link == attr)
        return;

      link = attr;

      $('#video-el')[0].src = link;
    })
  });
})(jQuery);
