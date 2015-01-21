$(document).ready(function() {

  $('.reset-button').click(function() {

    $('h2').each(function(i, val) {
      $('.score-bar').css('height', '100px');
      $('.score-bar').append(val);
    });

    $('.card').each(function(i, card) {

      var strHTML = '';
      var topBorder = false;
      var rightBorder = false;
      var bottomBorder = false;
      var leftBorder = false;
      var vtop=$(card).offset().top;
      var vleft=$(card).offset().left;
      var i=0;
      var winWidth = $(window).innerWidth();
      var winHeight = $(window).innerHeight();
      setInterval(addCardStream, 30);

      function addCardStream() {
        if (i < 10000) {

          if (vtop <= 0 ) {
            topBorder = true;
          }
          if ( vtop >= winHeight - 90) {
            topBorder = false;
          }
          if (vleft >= winWidth - 75) {
            rightBorder = true;
          }
          if (vleft <= 0) {
            rightBorder = false;
          }
          if (topBorder) {
            vtop+=5;
          }
          else {
            vtop-=5;
          }
          if(!rightBorder) {
            vleft+=5;
          }
          else {
            vleft-=5;
          }

          var cardStream = "<div class='pira' style= 'position: absolute; top:" + vtop +
            ";left:" + vleft + ";'></div>";
          $(".wrapper").append(cardStream);
          i++;
        }
      }
    });
  });
});
