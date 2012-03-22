$(document).ready(function(){

  $(function(){
    $('div.container').css({'height':(($(window).height())-120)+'px'});
    $(window).resize(function(){
    $('div.container').css({'height':(($(window).height())-120)+'px'});
    });
  });

  $('section.toc-no-js').hide();

  $('a.reveal-contents').toggle(
    function () {
      $('section.toc-js').fadeIn();
    },
    function () {
      $('section.toc-js').fadeOut();
    }
  );

});
