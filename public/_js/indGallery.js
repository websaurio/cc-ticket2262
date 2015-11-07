// JavaScript Document
$(function() {

  var gallery = $('.indvGallery');

  gallery.imagesLoaded(function() {
    gallery.parent().removeClass('loading');

    var fr = new FilmRoll({
      container: '.indvGallery',
      height: 700,
      configure_load: true
    });
    fr.children.each(function(index, el) {
      var img = $(el).find('img'), w = img.width(), h = img.height(), style = '' ;
      if(w > h) {
        style = 'height: 100%';
      } else if ( h > w) {
        style = 'width: 100%';
      } else {
        style = 'width: 100%;height:100%'
      }
      $(fr.pager_links[index]).html('<img src="'+img.attr('src')+'" style="'+style+'" />')

    });

    function centerCarousel()
    {
      var scrolled = fr.scrolled;
      fr.clearScroll();
      scrolled && fr.configureScroll();

      fr.child_widths = [] || fr.child_widths;
      fr.children.each(function(index) {
        fr.child_widths[index] = $(this).width();
      });
    }
    gallery.bind('film_roll:update', function(e, init) {
      centerCarousel();
    }).on('film_roll:moved', centerCarousel)
    .on('film_roll:resized', function() {
      centerCarousel();
      fr.moveToIndex(fr.index, 'best');
    }).trigger('film_roll:update', true);

    fr.moveToIndex(fr.index, 'best');
  });
});