
  var strHTML = '';
  var vtop=0;
  var vleft=0;
  for (var i = 0; i < 100; i++)
  {
    vtop += 5;
    vleft += 5;
    strHTML += "<span class='card' style= 'position: absolute; top:" + vtop + ";left:" + vleft + ";'></span>";
  }




$(document).ready(function(){




 //$(".wrapper").html(strHTML);


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
