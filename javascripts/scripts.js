$(document).ready(function(){
  $(function(){
    $('div.text-wrap').css({'height':(($(window).height())-120)+'px'});
    $(window).resize(function(){
    $('div.text-wrap').css({'height':(($(window).height())-120)+'px'});
    });
  });
});
