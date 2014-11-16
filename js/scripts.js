
  // var strHTML = '';
  // var vtop=0;
  // var vleft=0;
  // for (var i = 0; i < 100; i++)
  // {
  //   vtop += 5;
  //   vleft += 5;
  //   strHTML += "<span class='card' style= 'position: absolute; top:" + vtop + ";left:" + vleft + ";'></span>";
  // }




$(document).ready(function(){

$('.reset-button').click(function(){


  $('h2').each(function(i, val){
    $('.score-bar').css('height', '100px');
    $('.score-bar').append(val);
  });

  $('.card').each(function(i, card){

    console.log(card);
    var strHTML = '';

    var topBorder = false;
    var rightBorder = false;
    var bottomBorder = false;
    var leftBorder = false;

    var vtop=$(card).offset().top;
    var vleft=$(card).offset().left;
    var i=0;

    setInterval(addCardStream, 30);

    var winWidth = $(window).innerWidth();
    var winHeight = $(window).innerHeight();

function addCardStream(){
  if(i<10000){


      if(vtop<=0){
        topBorder = true;
      }

      if(vtop>=winHeight-90){
        topBorder = false;
      }


      if(vleft>=winWidth-75){
        rightBorder = true;
      }

      if(vleft<=0){
        rightBorder = false;
      }

      if(topBorder){
        vtop+=5;
      }else{
        vtop-=5;
      }


      if(!rightBorder){
        vleft+=5;
      }else{
        vleft-=5;
      }




        // if(vtop>0 && topBorder === false){
        //   vtop -=5;
        // }else{
        //   topBorder = true;
        //   vtop += 5;
        // }

        // if(vleft<winWidth-75 && rightBorder === false){
        //   vleft +=4;
        // }else{
        //   rightBorder = true;
        //   vleft -= 4;
        // }

        // if(vtop<winHeight && bottomBorder === false){
        //   vtop +=5;
        // }else{
        //   bottomBorder = true;
        //   topBorder = false;
        //   vtop -= 5;
        // }

        // if(vleft>0 && leftBorder === false){
        //   vleft -=4;
        // }else{
        //   leftBorder = true;
        //   rightBorder = true;
        //   vleft += 4;
        // }



        var cardStream = "<div class='pira' style= 'position: absolute; top:" + vtop + ";left:" + vleft + ";'></div>";
        $(".wrapper").append(cardStream);
      i++;
  }
}

    // for (var i = 0; i < 1000; i++)
    // {
    //     if(vtop>0 && topped === false){
    //       vtop -=5;
    //     }else{
    //       topped = true;
    //       vtop += 5;
    //     }
    //     vleft += 5;
    //     var cardStream = "<div class='pira' style= 'position: absolute; top:" + vtop + ";left:" + vleft + ";'></div>";
    //     $(".wrapper").append(cardStream);
    // }

    //$(".wrapper").html(strHTML)
  });

});
}); //doc.ready



// $('.card').each(function(i, card){

//   console.log(card);
//   var strHTML = '';
//   var pos = $(card).postion();
//   var vtop=pos.top;
//   var vleft=pos.left;
//   for (var i = 0; i < 100; i++)
//   {
//     vtop += 5;
//     vleft += 5;
//     strHTML += "<span class='card' style= 'position: absolute; top:" + vtop + ";left:" + vleft + ";'></span>";
//   }

//   $(".wrapper").html(strHTML);
// });
