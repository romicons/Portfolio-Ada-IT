
var bOpen = true;

$(function(openmenu) {
  $('nav').prepend('<div class="top"/>' +
                     '<div class="mid"/>' +
                     '<div class="bot"/>' );
  $('.hamb').click(function(){
    effect(bOpen,["slow","slow","slow"]);
    bOpen = !bOpen;
  });

  
  $('.navbar>.nav-item').on("click",function() {
    $('.navbar>.nav-item').animate({marginLeft:"0"},111).delay(111).animate({marginLeft:"37px"});
  });
});

function effect(doOpen,barsTiming) {
    $(".hamb").toggleClass("active");
    if(doOpen) {
      $("main, footer").fadeOut();
      
      // $(".top").fadeIn().animate({height:"50.333%",top:"-25%"},barsTiming[0], 'easeOutBounce');
      // $(".mid").fadeIn().animate({height:"50.333%",top:"25%"},barsTiming[1], 'easeOutBounce');
      // $(".bot").fadeIn().animate({height:"50.333%",top:"75%"},barsTiming[2], 'easeOutBounce');
      var top = -25;
      $(".top, .mid, .bot").each( function(n) {
        $(this).fadeIn().animate({height:"50.333%",top:`${top}%`},barsTiming[n], 'easeOutBounce');
        top += 50;
      });
      
      var t = 0;
      $(".navbar>.nav-item").removeAttr("style").each(function(){
        $(this).delay(111+(t+=Math.random()*(t/3+111))).fadeIn().animate({margin:"7%"});
      });
    } else {
        var t = 0;
        $(".navbar").animate({top:"23%"});
        $(".navbar>.nav-item").each(function(){
          $(this).delay(t+=Math.random()*111).fadeOut().animate({margin:"1%"});
        });
        $(".top,.mid,.bot").delay(555).animate({height:"0", top:"0"});
        // $(".top,.mid,.bot,ul,ul>li").removeAttr('style');
        $("main, footer").delay(777).fadeIn().removeClass("grow").addClass("grow");
    }
}