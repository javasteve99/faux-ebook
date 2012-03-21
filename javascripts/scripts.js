$(document).ready(function(){

  $(function(){
    $('div.container').css({'height':(($(window).height())-120)+'px'});
    $(window).resize(function(){
    $('div.container').css({'height':(($(window).height())-120)+'px'});
    });
  });

});
