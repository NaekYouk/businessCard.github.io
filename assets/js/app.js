 $(function(){

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop(),
    navT = $('.nav-toggle');


/* Fixed Header */
 checkScroll(scrollOffset);

 $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
 });

 function checkScroll(scrollOffset) {
    if( scrollOffset >= introH ) {
        header.addClass("fixed");
        navT.css('top', '15px');
    } else {
        header.removeClass("fixed");
        navT.css('top', '25px');
    }
 }



   // smooth scroll
    $("[data-scroll]").on("click", function(event) {
      event.preventDefault();  //Отменяем действие кнопки

      let blockId = $(this).data('scroll'),
         blockOffset = $(blockId).offset().top;

      $("html, body").animate({
         scrollTop: blockOffset+1
      }, 1000);
      $(".nav-toggle").removeClass("active");
      $(".nav").removeClass("active");
    });

     $(".nav-toggle").click(function(event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $(".nav").toggleClass("active");
   });

    $(".nav-link").click(function(event) {
     event.preventDefault();
     $(".nav-toggle").removeClass("active");
     $(".nav").removeClass("active");
  });
  
     if (screen.width < 883){
       $('.pr_img').removeClass("active");
        $(".project__items").slick({
           infinite: true,
           slidesToShow: 1,
           slidesToScroll: 1,
           autoplay: true,
           autoplaySpeed: 2000
        });
       }
 });